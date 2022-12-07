import {handleActions} from 'redux-actions';

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


const initialState = {
  isSubjectCreatedStart: false,
  isSubjectCreatedSuccess: false,
  isSubjectCreatedFailure: false,
  isSubjectUpdatedStart: false,
  isSubjectUpdatedSuccess: false,
  isSubjectUpdatedFailure: false,
  isSubjectDeletedStart: false,
  isSubjectDeletedSuccess: false,
  isSubjectDeletedFailure: false,
  isSubjectGetStart: false,
  isSubjectGetSuccess: false,
  isSubjectGetFailure: false,
  dataSubjects: [],
  errorMessage: '',
  isGettingSubject: false,
  oneSubject: {}
}


const reducer = handleActions({
    [subjectStartCreate]: (state) => {
      return {
        ...state,
        isSubjectCreatedStart: true,
        isSubjectCreatedSuccess: false,
        isSubjectCreatedFailure: false,
        errorMessage: ''
      }
    },

    [subjectCreateSuccess]: (state, {payload}) => {
      return {
        ...state,
        isSubjectCreatedStart: false,
        isSubjectCreatedSuccess: true,
        isSubjectCreatedFailure: false,
        dataSubjects: [...state.data, payload]
      }
    },

    [subjectCreateFailure]: (state, {payload}) => {
      return {
        ...state,
        isSubjectCreatedStart: false,
        isSubjectCreatedSuccess: false,
        isSubjectCreatedFailure: true,
        errorMessage: payload

      }
    },
    [subjectUpdateStart]: (state) => ({
      ...state,
      isSubjectUpdatedStart: true,
      isSubjectUpdatedSuccess: false,
      isSubjectUpdatedFailure: false,
    }),

    [subjectUpdateSuccess]: (state, {payload}) => {
      return {
        ...state,
        isSubjectUpdatedStart: false,
        isSubjectUpdatedSuccess: true,
        oneSubject: payload
      }
    },

    [subjectUpdateFailure]: (state, {payload}) => ({
      ...state,
      isSubjectUpdatedStart: false,
      isSubjectUpdatedSuccess: false,
      isSubjectUpdatedFailure: true,
      errorMessage: payload.data
    }),
    [subjectDeleteStart]: (state) => ({
      ...state,
      isSubjectDeletedStart: true,
      isSubjectDeletedSuccess: false,
      isSubjectDeletedFailure: false,
    }),

    [subjectDeleteSuccess]: (state, {payload}) => {
      return {
        ...state,
        isSubjectDeletedStart: false,
        isSubjectDeletedSuccess: true,
        isSubjectDeletedFailure: false,
        dataSubjects: state.data.filter(i => i.id !== payload.id),
      }
    },
    [subjectDeleteFailure]: (state, {payload}) => ({
      ...state,
      isSubjectDeletedStart: false,
      isSubjectDeletedSuccess: false,
      isSubjectDeletedFailure: true,
      errorMessage: payload.data
    }),
    [getSubjectStart]: (state) => ({
      ...state,
      isSubjectGetStart: true,
      isSubjectGetSuccess: false,
      isSubjectGetFailure: false,
    }),

    [getSubjectSuccess]: (state, {payload}) => {
      return {
        ...state,
        isSubjectGetStart: false,
        isTSubjectGetSuccess: true,
        isSubjectGetFailure: false,
        dataSubjects: payload?.data
      }
    },

    [getSubjectFailure]: (state, {payload}) => ({
      ...state,
      isSubjectGetStart: false,
      isSubjectGetSuccess: false,
      isSubjectGetFailure: true,
      errorMessage: payload.data
    }),
  },
  initialState
)

export default reducer;