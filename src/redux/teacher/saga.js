import {call, put, takeLatest} from 'redux-saga/effects';
import axios from 'axios'

import {
  findTeacherFailure,
  findTeacherRequest,
  findTeacherSuccess,
  getTeacherFailure,
  getTeacherStart,
  getTeacherSuccess,
  teacherCreateFailure,
  teacherCreateSuccess,
  teacherDeleteFailure,
  teacherDeleteStart,
  teacherDeleteSuccess,
  teacherStartCreate,
  teacherUpdateFailure,
  teacherUpdateStart,
  teacherUpdateSuccess
} from "./actions"

const token = localStorage.getItem('access_token')
const url = `${process.env.REACT_APP_API_URL}/api/teacher`

function* createTeacher({payload}) {
  console.log('createTeacher',payload);
  try {
    // console.log(payload);
    //
    // for (var pair of payload.entries()) {
    //   console.log(pair[0] + ', ' + pair[1]);
    // }

    const headers = {
      'Content-Type': 'multipart/form-data',
      'Authorization': `Bearer ${token}`
    }
    const response = yield call(() => axios.post(`${url}`, payload, {headers}))
    if (response?.status === 200) {
      yield put(teacherCreateSuccess(response.data.data));
    }
  } catch (e) {
    if (e?.response?.data) {
      yield put(teacherCreateFailure(e?.response?.data?.message));
    }
  }
}

function* deleteTeacher({payload}) {
  try {
    const response = yield call(() => axios.delete(`${url}/${payload.id}`, {headers: {"authorization": `Bearer ${token}`}}))
    if (response?.status === 200) {
      yield put(teacherDeleteSuccess(payload));
    }
  } catch (e) {
    if (e?.response?.data) {
      yield put(teacherDeleteFailure(e?.response?.data?.message));
    }
  }
}

function* updateTeacher({payload}) {
  try {
    const response = yield call(() => axios.put(`${url}/${payload.id}`, payload, {headers: {"authorization": `Bearer ${token}`}}))
    if (response?.status === 200) {
      yield put(teacherUpdateSuccess(response.data.data));
    }
  } catch (e) {
    if (e?.response?.data) {
      yield put(teacherUpdateFailure(e?.response?.data?.message));
    }
  }
}

function* getTeachers() {
  try {
    const response = yield call(() => axios.get(`${url}/export`, {headers: {"authorization": `Bearer ${token}`}}))
    if (response?.status === 200) {
      yield put(getTeacherSuccess(response.data));
    }
  } catch (e) {
    if (e?.response?.data) {
      yield put(getTeacherFailure(e?.response?.data?.message));
    }
  }
}

function* findOneTeacher({payload}) {
  try {
    const response = yield call(() => axios.get(`${url}/${payload}`, {headers: {"authorization": `Bearer ${token}`}}))
    if (response?.status === 200) {
      yield put(findTeacherSuccess(response.data.data));
    }
  } catch (e) {
    if (e?.response?.data) {
      yield put(findTeacherFailure(e?.response?.data?.message));
    }
  }
}

export default function* () {
  yield takeLatest(teacherStartCreate, createTeacher);
  yield takeLatest(teacherDeleteStart, deleteTeacher);
  yield takeLatest(teacherUpdateStart, updateTeacher);
  yield takeLatest(getTeacherStart, getTeachers);
  yield takeLatest(findTeacherRequest, findOneTeacher);
}
