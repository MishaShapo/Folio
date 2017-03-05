import {
  ADD_FIELD,
  EDIT_FIELD,
  DELETE_FIELD,
} from './types';

export const addField = (field) => {
  return {
    type: ADD_FIELD,
    payload: field
  }
}

export const editField = (field) => {
  return {
    type: EDIT_FIELD,
    payload: field
  }
}

export const deleteField = (field) => {
  return {
    type: DELETE_FIELD,
    payload: field
  }
}
