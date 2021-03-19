import {
  SHIPS_FAIL,
  SHIPS_REQUEST,
  SHIPS_SUCCESS,
  STEP_UPDATE,
  THEME_UPDATE,
  USER_DATA_UPDATE,
} from '../constants/Constants';
import axios from 'axios';

export const updateTheme = () => (dispatch, getState) => {
  const {
    theme: { darkTheme },
  } = getState();
  dispatch({ type: THEME_UPDATE, payload: !darkTheme });
  darkTheme
    ? localStorage.removeItem('darkTheme')
    : localStorage.setItem('darkTheme', true);
};

export const setStep = (step) => (dispatch) =>
  dispatch({ type: STEP_UPDATE, payload: step });

export const updateUserData = (userData) => (dispatch) =>
  dispatch({ type: USER_DATA_UPDATE, payload: userData });

export const getShips = () => async (dispatch) => {
  try {
    dispatch({ type: SHIPS_REQUEST });
    const { data } = await axios.get('https://swapi.dev/api/starships/');
    dispatch({ type: SHIPS_SUCCESS, payload: data.results });
  } catch (error) {
    dispatch({
      type: SHIPS_FAIL,
      payload: 'Coś poszło nie tak, spróbuj ponownie później.',
    });
  }
};
