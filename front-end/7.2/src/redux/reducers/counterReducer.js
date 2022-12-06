const INITIAL_STATE = { count: 0 }

const counterReducer = (state = INITIAL_STATE, action) => {
  const { payload, type } = action;
  const { count } = state;
  switch (type) {
    case 'INCREMENT_COUNTER':
      return { ...state, count: count + payload };
    case 'DECREMENT_COUNTER':
      return { ...state, count: count - payload };
    case 'CHANGE_COUNTER':
      return { ...state, count: payload };
    default:
      return state;
  }
};

export default counterReducer;
