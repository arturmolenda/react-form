import {
  STEP_UPDATE,
  THEME_UPDATE,
  USER_DATA_UPDATE,
} from '../constants/Constants';

export const themeReducer = (state = {}, action) => {
  switch (action.type) {
    case THEME_UPDATE:
      return { darkTheme: action.payload };
    default:
      return state;
  }
};

export const stepsReducer = (state = { activeStep: 0 }, action) => {
  switch (action.type) {
    case STEP_UPDATE:
      return { activeStep: action.payload };
    default:
      return state;
  }
};

export const userDataReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_DATA_UPDATE:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
