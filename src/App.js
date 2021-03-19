import React from 'react';
import {
  createMuiTheme,
  CssBaseline,
  MuiThemeProvider,
} from '@material-ui/core';

const theme = createMuiTheme({});

const App = () => {
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <div className='App'></div>
    </MuiThemeProvider>
  );
};

export default App;
