import { THEME_UPDATE } from '../constants/Constants';

export const updateTheme = () => (dispatch, getState) => {
  const {
    theme: { darkTheme },
  } = getState();
  dispatch({ type: THEME_UPDATE, payload: !darkTheme });
  darkTheme
    ? localStorage.removeItem('darkTheme')
    : localStorage.setItem('darkTheme', true);
};
