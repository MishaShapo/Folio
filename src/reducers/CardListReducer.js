import {
  ADD_CARD,
  DELETE_CARD
} from './../actions/types';


const INITIAL_STATE = {
  cardList: {
    0:{
      name: 'Bob',
      contact:{
        email: 'blah@gmail.com',
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
      notes: 'Very nice and friendly.'
    },
    2:{
      name: 'James',
      contact:{
        email: 'emily@mail.com',
        phone: '123456789',
        address: ''
      },
      notes: ''
    },
    3:{
      name: 'Lily',
      contact:{
        email: 'emily@mail.com',
        phone: '123456789',
        address: ''
      },
      notes: ''
    },
  },
  numCards: 4
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_CARD:{
      console.log("numCards before: ", numCards);
      const newState = {...state};
      newState.cardList[newState.numCards] = action.payload;
      newState.numCards++;
      console.log("numCards after: ", numCards);
      return newState;
    }
    case DELETE_CARD: {
      const {key} = action.payload;
      const newState = {...state};
      delete newState.cardList[key];
      return newState;
    }
    default:
      return state;
  }
};
