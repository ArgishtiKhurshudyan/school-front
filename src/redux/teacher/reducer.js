import {handleActions} from 'redux-actions';

import {
  teacherCreateFailure,
  teacherCreateSuccess,
  teacherStartCreate,
  teacherUpdateStart,
  teacherUpdateSuccess,
  teacherUpdateFailure,
  teacherDeleteStart,
  teacherDeleteSuccess,
  teacherDeleteFailure,
  getTeacherStart,
  getTeacherSuccess,
  teacherCreateFailureClear,
  teacherEdit,
  getTeacherFailure, findTeacherRequest, findTeacherSuccess, findTeacherFailure,
} from "./actions"

const initialState = {
  isTeacherCreatedStart: false,
  isTeacherCreatedSuccess: false,
  isTeacherCreatedFailure: false,
  isTeacherUpdatedStart: false,
  isTeacherUpdatedSuccess: false,
  isTeacherUpdatedFailure: false,
  isTeacherDeletedStart: false,
  isTeacherDeletedSuccess: false,
  isTeacherDeletedFailure: false,
  isTeacherGetStart: false,
  isTeacherGetSuccess: false,
  isTeacherGetFailure: false,
  data: [],
  errorMessage: '',
  isGettingTeacher: false,
  isFoundTeacherSuccess: false,
  isFoundTeacherFailure: false,
  oneTeacher: {}
}


const reducer = handleActions({
    [teacherStartCreate]: (state) => {
      return {
        ...state,
        isTeacherCreatedStart: true,
        isTeacherCreatedSuccess: false,
        isTeacherCreatedFailure: false,
        errorMessage: ''
      }
    },

    [teacherCreateSuccess]: (state, {payload}) => {
      return {
        ...state,
        isTeacherCreatedStart: false,
        isTeacherCreatedSuccess: true,
        isTeacherCreatedFailure: false,
        data: [...state.data, payload],
      }
    },

    [teacherCreateFailure]: (state, {payload}) => {
      return {
        ...state,
        isTeacherCreatedStart: false,
        isTeacherCreatedSuccess: false,
        isTeacherCreatedFailure: true,
        errorMessage: payload,
      }
    },
    [teacherCreateFailureClear]: (state) => {
      return {
        ...state,
        errorMessage: "",
      }
    },
    [teacherUpdateStart]: (state) => ({
      ...state,
      isTeacherUpdatedStart: true,
      isTeacherUpdatedSuccess: false,
      isTeacherUpdatedFailure: false,
    }),

    [teacherUpdateSuccess]: (state, {payload}) => {
      const index = state.data.findIndex(i => i.id === payload.id)
      if (index !== -1) {
        state.data[index] = payload
      } else {
        state.data.push(payload)
      }
      return {
        ...state,
        isTeacherUpdatedStart: false,
        isTeacherUpdatedSuccess: true,
        oneTeacher: payload
      }
    },

    [teacherUpdateFailure]: (state, {payload}) => ({
      ...state,
      isTeacherUpdatedStart: false,
      isTeacherUpdatedSuccess: false,
      isTeacherUpdatedFailure: true,
      errorMessage: payload
    }),
    [teacherDeleteStart]: (state) => {
      return {
        ...state,
        isTeacherDeletedStart: true,
        isTeacherDeletedSuccess: false,
        isTeacherDeletedFailure: false,
      }
    },
    [teacherDeleteSuccess]: (state, {payload}) => {
      return {
        ...state,
        isTeacherDeletedStart: false,
        isTeacherDeletedSuccess: true,
        isTeacherDeletedFailure: false,
        data: state.data.filter(i => i.id !== payload.id),
      }
    },

    [teacherDeleteFailure]: (state, {payload}) => ({
      ...state,
      isTeacherDeletedStart: false,
      isTeacherDeletedSuccess: false,
      isTeacherDeletedFailure: true,
      errorMessage: payload.data
    }),

    [getTeacherStart]: (state) => ({
      ...state,
      isTeacherGetStart: true,
      isTeacherGetSuccess: false,
      isTeacherGetFailure: false,
    }),

    [getTeacherSuccess]: (state, {payload}) => {
      return {
        ...state,
        isTeacherGetStart: false,
        isTeacherGetSuccess: true,
        isTeacherGetFailure: false,
        data: payload?.data,
      }
    },

    [getTeacherFailure]: (state, {payload}) => ({
      ...state,
      isTeacherGetStart: false,
      isTeacherGetSuccess: false,
      isTeacherGetFailure: true,
      errorMessage: payload.data
    }),
    [findTeacherRequest]: (state) => ({
      ...state,
      isGettingTeacher: true,
      isFoundTeacherSuccess: false,
      isFoundTeacherFailure: false,
    }),
    [findTeacherSuccess]: (state, {payload}) => ({
      ...state,
      isGettingTeacher: false,
      isFoundTeacherSuccess: true,
      oneTeacher: payload
    }),
    [findTeacherFailure]: (state, {payload}) => ({
      ...state,
      isGettingTeacher: false,
      isFoundTeacherFailure: true,
      errorMessage: payload
    }),
  },
  initialState
)

export default reducer;