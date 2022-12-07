import {createAction} from 'redux-actions';

export const classStartCreate = createAction(
  "CLASS_START_CREATE"
)

export const classCreateSuccess = createAction(
  "CLASS_CREATE_SUCCESS"
)

export const classCreateFailure = createAction(
  "CLASS_CREATE_FAILURE"
)

export const classUpdateStart = createAction(
  "CLASS_UPDATE_START"
)

export const classUpdateSuccess = createAction(
  "CLASS_UPDATE_SUCCESS"
)

export const classUpdateFailure = createAction(
  "CLASS_UPDATE_FAILURE"
)

export const classDeleteStart = createAction(
  "CLASS_DELETE_START"
)

export const classDeleteSuccess = createAction(
  "CLASS_DELETE_SUCCESS"
)

export const classDeleteFailure = createAction(
  "CLASS_DELETE_FAILURE"
)

export const getClassStart = createAction(
  "CLASS_GET_START"
)

export const getClassSuccess = createAction(
  "CLASS_GET_SUCCESS"
)

export const getClassFailure = createAction(
  "CLASS_GET_FAILURE"
)


export const findRoomRequest = createAction('FIND_ROOM_REQUEST')
export const findRoomSuccess = createAction('FIND_ROOM_SUCCESS')
export const findRoomFailure = createAction('FIND_ROOM_FAILURE')