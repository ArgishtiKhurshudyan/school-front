import {handleActions} from 'redux-actions';

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
  getClassFailure,
  findRoomRequest,
  findRoomSuccess,
  findRoomFailure,
} from "./actions"
import {findTeacherFailure, findTeacherRequest, findTeacherSuccess} from "../teacher/actions";


const initialState = {
  isClassCreatedStart: false,
  isSClassCreatedSuccess: false,
  isClassCreatedFailure: false,
  isClassUpdatedStart: false,
  isClassUpdatedSuccess: false,
  isClassUpdatedFailure: false,
  isClassDeletedStart: false,
  isClassDeletedSuccess: false,
  isClassDeletedFailure: false,
  isClassGetStart: false,
  isClassGetSuccess: false,
  isClassGetFailure: false,
  data: [],
  errorMessage: '',
  isGettingSubject: false,
  oneRoom: {}
}


const reducer = handleActions({
    [classStartCreate]: (state) => {
      return {
        ...state,
        isClassCreatedStart: true,
        isClassCreatedSuccess: false,
        isClassCreatedFailure: false,
        errorMessage: ''
      }
    },

    [classCreateSuccess]: (state, {payload}) => {
      return {
        ...state,
        isClassCreatedStart: false,
        isClassCreatedSuccess: true,
        isClassCreatedFailure: false,
        data: [...state.data, payload]
      }
    },

    [classCreateFailure]: (state, {payload}) => {
      return {
        ...state,
        isClassCreatedStart: false,
        isClassCreatedSuccess: false,
        isClassCreatedFailure: true,
        errorMessage: payload
      }
    },

    [classUpdateStart]: (state) => ({
      ...state,
      isClassUpdatedStart: true,
      isClassUpdatedSuccess: false,
      isClassUpdatedFailure: false,
    }),

    [classUpdateSuccess]: (state, {payload}) => {
      return {
        ...state,
        isClassUpdatedStart: false,
        isClassUpdatedSuccess: true,
        oneRoom: payload
      }
    },

    [classUpdateFailure]: (state, {payload}) => ({
      ...state,
      isClassUpdatedStart: false,
      isClassUpdatedSuccess: false,
      isClassUpdatedFailure: true,
      errorMessage: payload.data
    }),

    [classDeleteStart]: (state) => ({
      ...state,
      isClassDeletedStart: true,
      isClassDeletedSuccess: false,
      isClassDeletedFailure: false,
    }),

    [classDeleteSuccess]: (state, {payload}) => {
      return {
        ...state,
        isClassDeletedStart: false,
        isClassDeletedSuccess: true,
        isClassDeletedFailure: false,
        data: state.data.filter(i => i.id !== payload.id),
      }
    },

    [classDeleteFailure]: (state, {payload}) => ({
      ...state,
      isClassDeletedStart: false,
      isClassDeletedSuccess: false,
      isClassDeletedFailure: true,
      errorMessage: payload.data
    }),

    [getClassStart]: (state) => ({
      ...state,
      isClassGetStart: true,
      isClassGetSuccess: false,
      isClassGetFailure: false,
    }),

    [getClassSuccess]: (state, {payload}) => {
      return {
        ...state,
        isClassGetStart: false,
        isClassGetSuccess: true,
        isClassGetFailure: false,
        data: payload?.data
      }
    },

    [getClassFailure]: (state, {payload}) => ({
      ...state,
      isClassGetStart: false,
      isClassGetSuccess: false,
      isClassGetFailure: true,
      errorMessage: payload.data
    }),

    [findRoomRequest]: (state) => ({
      ...state,
      isGettingTeacher: true,
      isFoundTeacherSuccess: false,
      isFoundTeacherFailure: false,
    }),

    [findRoomSuccess]: (state, {payload}) => ({
      ...state,
      isGettingTeacher: false,
      isFoundTeacherSuccess: true,
      oneRoom: payload
    }),

    [findRoomFailure]: (state, {payload}) => ({
      ...state,
      isGettingTeacher: false,
      isFoundTeacherFailure: true,
      errorMessage: payload
    }),
  },

  initialState
)

export default reducer;