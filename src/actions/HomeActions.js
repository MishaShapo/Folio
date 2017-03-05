import {
  ADD_CARD,
  DELETE_CARD
} from './types';

export const addCard = (card) => {
  return {
    type: ADD_CARD,
    payload: card
  }
}

export const deleteCard = (card) => {
  return {
    type: DELETE_CARD,
    payload: card
  }
}
