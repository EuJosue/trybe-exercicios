export const REQUEST_API = 'REQUEST_API';
export const GET_PICTURE = 'GET_PICTURE';
export const REQUEST_ERROR = 'REQUEST_ERROR';

const requestAPI = () => ({ type: REQUEST_API });

const requestError = (error) => ({ type: REQUEST_ERROR, payload: error })

const getPicture = (imageURL) => ({ type: GET_PICTURE, payload: imageURL })

export default function fetchCatImage() {
  return (dispatch) => {
    dispatch(requestAPI());
    fetch('http://aws.random.cat/meow')
      .then((data) => data.json())
      .then(({ file }) => dispatch(getPicture(file)))
      .catch((error) => dispatch(requestError(error)))
  }
}
