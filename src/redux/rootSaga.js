import {all} from 'redux-saga/effects';
import user from './user/saga';
import teacher from './teacher/saga'
import subject from './subject/saga'
import room from './room/saga'

export default function* rootSaga() {
  yield all([
    user(),
    teacher(),
    subject(),
    room()
  ])
};