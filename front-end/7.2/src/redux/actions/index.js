export const actionIncrementCounter = (increment = 1) => ({
  type: 'INCREMENT_COUNTER',
  payload: increment,
});

export const actionDecrementCounter = (decrement = 1) => ({
  type: 'DECREMENT_COUNTER',
  payload: decrement,
});

export const actionChangeCounter = (newValue) => {
  if (isNaN(parseInt(newValue, 10))) return {}
  return {
    type: 'CHANGE_COUNTER',
    payload: parseInt(newValue, 10),
  }
};
