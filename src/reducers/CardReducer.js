import {
  ADD_FIELD,
  EDIT_FIELD,
  DELETE_FIELD,
  DELETE_CARD
} from './types';

const INITIAL_STATE = {
    name: '',
    contact: {},
    notes: ''
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_FIELD: 
      const {name} = action.payload;
      return { ...state, contact: {...contact, [name]: ''}};
    case EDIT_FIELD:
      const {name, text} = action.payload;  
      return {...state, contact: {...contact, [name]: text}};
    case: DELETE_FIELD:
      const {name} = action.payload;
      const newState = {...state};
      delete newState.contact[name];
      return newState;
    case: DELETE_CARD:
      return INITIAL_STATE;
    default:
      return state;
  }
};
