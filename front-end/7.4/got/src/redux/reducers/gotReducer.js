import { CHARACTER_NOT_FOUND, FETCH_ERROR, GET_CHARACTER, START_FETCH } from "../actions";

const INITIAL_STATE = {
  isFetching: false,
  fetchedCharacter: { name: '' },
  errorMessage: '',
};

const gotReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case START_FETCH:
      return {
        ...state,
        isFetching: true,
        fetchedCharacter: { name: '' },
        errorMessage: '',
      };
    case GET_CHARACTER:
      return {
        ...state,
        isFetching: false,
        fetchedCharacter: action.payload,
        errorMessage: '',
      };
    case FETCH_ERROR:
      return {
        ...state,
        isFetching: false,
        fetchedCharacter: { name: '' },
        errorMessage: action.payload,
      };
    case CHARACTER_NOT_FOUND:
      return {
        ...state,
        isFetching: false,
        fetchedCharacter: { name: '' },
        errorMessage: 'Character not found',
      };
    default:
      return state;
  };
};

export default gotReducer;
