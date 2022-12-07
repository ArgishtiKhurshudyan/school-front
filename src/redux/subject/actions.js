import {createAction} from 'redux-actions';

export const subjectStartCreate = createAction(
  "SUBJECT_START_CREATE"
)

export const subjectCreateSuccess = createAction(
  "SUBJECT_CREATE_SUCCESS"
)

export const subjectCreateFailure = createAction(
  "SUBJECT_CREATE_FAILURE"
)
export const subjectUpdateStart = createAction(
  "SUBJECT_UPDATE_START"
)

export const subjectUpdateSuccess = createAction(
  "SUBJECT_UPDATE_SUCCESS"
)

export const subjectUpdateFailure = createAction(
  "SUBJECT_UPDATE_FAILURE"
)

export const subjectDeleteStart = createAction(
  "SUBJECT_DELETE_START"
)

export const subjectDeleteSuccess = createAction(
  "SUBJECT_DELETE_SUCCESS"
)

export const subjectDeleteFailure = createAction(
  "SUBJECT_DELETE_FAILURE"
)
export const getSubjectStart = createAction(
  "SUBJECT_GET_START"
)

export const getSubjectSuccess = createAction(
  "SUBJECT_GET_SUCCESS"
)

export const getSubjectFailure = createAction(
  "SUBJECT_GET_FAILURE"
)

