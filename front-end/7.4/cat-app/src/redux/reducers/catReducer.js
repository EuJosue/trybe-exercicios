import { GET_PICTURE, REQUEST_API, REQUEST_ERROR } from "../actions";

const INITIAL_STATE = {
  isFetching: false,
  catImage: '',
  errorMessage: '',
};

const catReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case REQUEST_API:
      return {
        ...state,
        isFetching: true,
        catImage: '',
        errorMessage: '',
      };
    case GET_PICTURE:
      return {
        ...state,
        isFetching: false,
        catImage: action.payload,
        errorMessage: '',
      };
    case REQUEST_ERROR:
      return {
        ...state,
        isFetching: false,
        catImage: '',
        errorMessage: action.payload,
      };
    default:
      return state;
  }
}

export default catReducer;
