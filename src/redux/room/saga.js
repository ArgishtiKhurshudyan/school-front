import {call, put, takeLatest} from 'redux-saga/effects';
import axios from 'axios'

import {
  classStartCreate,
  classCreateSuccess,
  classCreateFailure,
  classUpdateStart,
  classUpdateSuccess,
  classUpdateFailure,
  classDeleteStart,
  classDeleteSuccess,
  classDeleteFailure,
  getClassStart,
  getClassSuccess,
  getClassFailure, findRoomRequest, findRoomSuccess, findRoomFailure,
} from "./actions"
import {findTeacherFailure, findTeacherSuccess} from "../teacher/actions";

const token = localStorage.getItem('access_token')
const url = `${process.env.REACT_APP_API_URL}/api/class`
const headers = {
  'Authorization': `Bearer ${token}`
}

function* createClass({payload}) {
  console.log(payload)
  try {
    const response = yield call(() => axios.post(`${url}`, payload, {headers}))
    if (response?.status === 200) {
      yield put(classCreateSuccess(response.data.data));
    }
  } catch (e) {
    if (e?.response?.data) {
      yield put(classCreateFailure(e?.response?.data?.message));
    }
  }
}

function* deleteClass({payload}) {
  try {
    const response = yield call(() => axios.delete(`${url}/${payload.id}`, {headers}))
    if (response?.status === 200) {
      yield put(classDeleteSuccess(payload));
    }
  } catch (e) {
    if (e?.response?.data) {
      yield put(classDeleteFailure(e?.response?.data?.message));
    }
  }
}

function* updateClass({payload}) {
  try {
    const response = yield call(() => axios.put(`${url}/${payload.id}`, payload, {headers}))
    if (response?.status === 200) {
      yield put(classUpdateSuccess(response.data.data));
    }
  } catch (e) {
    if (e?.response?.data) {
      yield put(classUpdateFailure(e?.response?.data?.message));
    }
  }
}

function* getClasses() {
  try {
    const response = yield call(() => axios.get(`${url}`, {headers}))
    if (response?.status === 200) {
      yield put(getClassSuccess(response.data));

    }
  } catch (e) {
    if (e?.response?.data) {
      yield put(getClassFailure(e?.response?.data?.message));
    }
  }
}

function* findOneClass({payload}) {
  try {
    const response = yield call(() => axios.get(`${url}/${payload}`, {headers}))
    if (response?.status === 200) {
      yield put(findRoomSuccess(response.data.data));
    }
  } catch (e) {
    if (e?.response?.data) {
      yield put(findRoomFailure(e?.response?.data?.message));
    }
  }
}

export default function* () {
  yield takeLatest(classStartCreate, createClass);
  yield takeLatest(classDeleteStart, deleteClass);
  yield takeLatest(classUpdateStart, updateClass);
  yield takeLatest(getClassStart, getClasses);
  yield takeLatest(findRoomRequest, findOneClass);
}
