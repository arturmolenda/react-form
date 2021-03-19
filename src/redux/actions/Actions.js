import { STEP_UPDATE, THEME_UPDATE } from '../constants/Constants';

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
