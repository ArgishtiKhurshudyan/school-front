import {call, put, takeLatest} from 'redux-saga/effects';
import axios from 'axios'

import {
  subjectStartCreate,
  subjectCreateSuccess,
  subjectCreateFailure,
  subjectUpdateStart,
  subjectUpdateSuccess,
  subjectUpdateFailure,
  subjectDeleteStart,
  subjectDeleteSuccess,
  subjectDeleteFailure,
  getSubjectStart,
  getSubjectSuccess,
  getSubjectFailure,
} from "./actions"

const token = localStorage.getItem('access_token')

function* createSubject({payload}) {
  try {
    const headers = {
      'Authorization': `Bearer ${token}`
    }
    // const response = yield call(() => axios.post("http://localhost:3333/api/teacher", payload, {headers: {"authorization": `Bearer ${token}`,  'content-type': 'multipart/form-data'}}))
    const response = yield call(() => axios.post("http://localhost:3333/api/topic", payload, {headers}))
    if (response?.status === 200) {
      yield put(subjectCreateSuccess(response.data.data));
    }
  } catch (e) {
    if (e?.response?.data) {
      yield put(subjectCreateFailure(e?.response?.data?.message));
    }
  }
}

function* deleteSubject({payload}) {
  try {
    const response = yield call(() => axios.delete(`http://localhost:3333/api/topic/${payload.id}`, {headers: {"authorization": `Bearer ${token}`}}))
    if (response?.status === 200) {
      yield put(subjectDeleteSuccess(payload));
    }
  } catch (e) {
    if (e?.response?.data) {
      yield put(subjectDeleteFailure(e?.response?.data?.message));
    }
  }
}

function* updateSubject({payload}) {
  try {
    const response = yield call(() => axios.put(`http://localhost:3333/api/topic/${payload.id}`, payload))
    if (response?.status === 200) {
      yield put(subjectUpdateSuccess(response.data.data));
    }
  } catch (e) {
    if (e?.response?.data) {
      yield put(subjectUpdateFailure(e?.response?.data?.message));
    }
  }
}

function* getSubjects() {
  try {
    const response = yield call(() => axios.get("http://localhost:3333/api/topic", {headers: {"authorization": `Bearer ${token}`}}))
    if (response?.status === 200) {
      yield put(getSubjectSuccess(response.data));
    }
  } catch (e) {
    if (e?.response?.data) {
      yield put(getSubjectFailure(e?.response?.data?.message));
    }
  }
}


export default function* () {
  yield takeLatest(subjectStartCreate, createSubject);
  yield takeLatest(subjectDeleteStart, deleteSubject);
  yield takeLatest(subjectUpdateStart, updateSubject);
  yield takeLatest(getSubjectStart, getSubjects);
}
