import {
  ADD_CARD,
  DELETE_CARD
} from './types';


const INITIAL_STATE = {
  cardList: {
    0:{
      name: 'John',
      contact:{
        email: 'hello@mail.com',
        phone: '',
        address: ''
      }, 
      notes: ''
    },
    1:{
      name: 'Emily',
      contact:{
        email: 'emily@mail.com',
        phone: '123456789',
        address: ''
      },
      notes: ''},
    2:{
      name: 'Emily',
      contact:{
        email: 'emily@mail.com',
        phone: '123456789',
        address: ''
      }, 
      notes: ''
    },
    3:{
      name: 'Emily',
      contact:{
        email: 'emily@mail.com',
        phone: '123456789',
        address: ''
      }, 
      notes: ''
    },
  },
  numCards: 0
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case: ADD_CARD:
      const newState = {...state};
      newState.cardList[newState.numCards] = {};
      newState.numCards++;
      return newState;
    case: DELETE_CARD:
      const {key} = action.payload;
      const newState = {...state};
      delete newState.cardList[key];
      return newState;
    default:
      return state;
  }
};
