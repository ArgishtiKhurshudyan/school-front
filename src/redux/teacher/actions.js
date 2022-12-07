import {createAction} from 'redux-actions';

export const teacherStartCreate = createAction(
  "TEACHER_START_CREATE"
)

export const teacherCreateSuccess = createAction(
  "TEACHER_CREATE_SUCCESS"
)

export const teacherCreateFailure = createAction(
  "TEACHER_CREATE_FAILURE"
)
export const teacherUpdateStart = createAction(
  "TEACHER_UPDATE_START"
)

export const teacherUpdateSuccess = createAction(
  "TEACHER_UPDATE_SUCCESS"
)

export const teacherUpdateFailure = createAction(
  "TEACHER_UPDATE_FAILURE"
)

export const teacherDeleteStart = createAction(
  "TEACHER_DELETE_START"
)

export const teacherDeleteSuccess = createAction(
  "TEACHER_DELETE_SUCCESS"
)

export const teacherDeleteFailure = createAction(
  "TEACHER_DELETE_FAILURE"
)
export const getTeacherStart = createAction(
  "TEACHER_GET_START"
)

export const getTeacherSuccess = createAction(
  "TEACHER_GET_SUCCESS"
)

export const getTeacherFailure = createAction(
  "TEACHER_GET_FAILURE"
)
export const teacherCreateFailureClear = createAction(
  "TEACHER_CLEAR_FAILURE"
)
export const teacherEdit = createAction(
  "TEACHER_EDIT_START"
)

export const findTeacherRequest = createAction('FIND_TEACHER_REQUEST')
export const findTeacherSuccess = createAction('FIND_TEACHER_SUCCESS')
export const findTeacherFailure = createAction('FIND_TEACHER_FAILURE')