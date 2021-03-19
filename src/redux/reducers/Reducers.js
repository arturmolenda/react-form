import { THEME_UPDATE } from '../constants/Constants';

export const themeReducer = (state = {}, action) => {
  switch (action.type) {
    case THEME_UPDATE:
      return { darkTheme: action.payload };
    default:
      return state;
  }
};
