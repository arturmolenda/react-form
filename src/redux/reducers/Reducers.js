import {
  STEP_UPDATE,
  THEME_UPDATE,
  USER_DATA_UPDATE,
  SHIPS_REQUEST,
  SHIPS_SUCCESS,
  SHIPS_FAIL,
  USER_DATA_RESET,
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

export const userDataReducer = (
  state = {
    name: '',
    surname: '',
    sex: '',
    birthDate: new Date(),
    age: 0,
    ship: '',
  },
  action
) => {
  switch (action.type) {
    case USER_DATA_UPDATE:
      return { ...state, ...action.payload };
    case USER_DATA_RESET:
      return {
        name: '',
        surname: '',
        sex: '',
        birthDate: new Date(),
        age: 0,
        ship: '',
      };
    default:
      return state;
  }
};

export const shipsReducer = (state = { ships: [] }, action) => {
  switch (action.type) {
    case SHIPS_REQUEST:
      return { loading: true };
    case SHIPS_SUCCESS:
      return { ships: action.payload };
    case SHIPS_FAIL:
      return { error: action.payload };
    default:
      return state;
  }
};
