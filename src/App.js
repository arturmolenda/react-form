import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { updateTheme } from './redux/actions/Actions';

import {
  createMuiTheme,
  CssBaseline,
  MuiThemeProvider,
} from '@material-ui/core';

import ThemeButton from './components/ThemeButton';
import Container from './components/Container';

const App = () => {
  const dispatch = useDispatch();
  const { darkTheme } = useSelector((state) => state.theme);
  const theme = createMuiTheme({
    palette: {
      type: darkTheme ? 'dark' : 'light',
    },
  });

  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <div className='App'>
        <Container />
        <ThemeButton
          darkTheme={darkTheme}
          changeThemeHandle={() => dispatch(updateTheme())}
        />
      </div>
    </MuiThemeProvider>
  );
};

export default App;
