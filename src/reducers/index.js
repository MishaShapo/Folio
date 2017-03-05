import { combineReducers } from 'redux';
import CardListReducer from './CardListReducer';
import CardReducer from './CardReducer';
//import BackpackReducer from './BackpackReducer';

export default combineReducers({
  cardList: CardListReducer,
  card: CardReducer
//  capture: CaptureReducer,
});
