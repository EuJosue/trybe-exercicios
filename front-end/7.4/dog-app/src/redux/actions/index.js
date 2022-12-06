export const REQUEST_STARTED = 'REQUEST_STARTED';
export const REQUEST_SUCCESSFUL = 'REQUEST_SUCCESSFUL';
export const REQUEST_FAILED = 'REQUEST_FAILED';

const requestStarted = () => ({ type: REQUEST_STARTED });

const requestSuccessful = (imageURL) => ({ type: REQUEST_SUCCESSFUL, payload: imageURL });

const requestFailed = (error) => ({ type: REQUEST_FAILED, payload: error });

export const fetchDogImage = () => (dispatch) => {
  dispatch(requestStarted());
  fetch("https://dog.ceo/api/breeds/image/random")
    .then(response => response.json())
    .then(({ message }) => dispatch(requestSuccessful(message)))
    .catch((error) => dispatch(requestFailed(error)));
};
