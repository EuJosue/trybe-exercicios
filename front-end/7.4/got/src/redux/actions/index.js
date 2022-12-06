export const START_FETCH = 'START_FETCH';
export const GET_CHARACTER = 'GET_CHARACTER';
export const FETCH_ERROR = 'FETCH_ERROR';
export const CHARACTER_NOT_FOUND = 'CHARACTER_NOT_FOUND';

const startFetch = () => ({ type: START_FETCH });

const getCharacter = (character) => ({
  type: GET_CHARACTER,
  payload: character,
});

const fetchError = (error) => ({
  type: FETCH_ERROR,
  payload: error,
});

const characterNotFound = () => ({ type: CHARACTER_NOT_FOUND })

export default function fetchCharacterGoT(name) {
  return (dispatch) => {
    dispatch(startFetch());
    fetch(`https://anapioficeandfire.com/api/characters?name=${name}`)
      .then((data) => data.json())
      .then((character) => character.length
        ? dispatch(getCharacter(character[0]))
        : dispatch(characterNotFound())
      )
      .catch((error) => dispatch(fetchError(error)));
  };
};
