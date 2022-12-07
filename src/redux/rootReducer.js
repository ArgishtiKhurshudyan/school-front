import {combineReducers} from 'redux';
import user from './user/reducer';
import teacher from './teacher/reducer'
import subject from './subject/reducer'
import room from './room/reducer'

const rootReducer = combineReducers({
  user,
  teacher,
  subject,
  room,
});

export default rootReducer;