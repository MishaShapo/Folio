import { combineReducers } from 'redux';
import HomeReducer from './HomeReducer';
//import PetReducer from './CaptureReducer';
//import BackpackReducer from './BackpackReducer';

export default combineReducers({
  home: HomeReducer
//  individualCard: IndividualCardReducer,
//  capture: CaptureReducer,
});
