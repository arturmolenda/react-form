import {
  createStore as reduxCreateStore,
  combineReducers,
  applyMiddleware,
} from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import {
  themeReducer,
  stepsReducer,
  userDataReducer,
  shipsReducer,
} from './reducers/Reducers';

const reducer = combineReducers({
  theme: themeReducer,
  steps: stepsReducer,
  userData: userDataReducer,
  ships: shipsReducer,
});

// if theme exists in localStorage returns true and shows site in dark theme
const darkThemeFromStorage = localStorage.getItem('darkTheme') ? true : false;

const initialState = {
  theme: {
    darkTheme: darkThemeFromStorage,
  },
};

const middleware = [thunk];

const createStore = reduxCreateStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default createStore;
