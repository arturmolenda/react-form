import React from 'react';

import Styled from 'styled-components';

import { Fab } from '@material-ui/core';
import Brightness3Icon from '@material-ui/icons/Brightness3';
import Brightness7Icon from '@material-ui/icons/Brightness7';

const IconButton = Styled(Fab)`
    && {
        position: fixed;
        bottom: 20px;
        right: 20px;
    }
`;

const ThemeButton = ({ darkTheme, changeThemeHandle }) => {
  return (
    <IconButton
      color={darkTheme ? 'primary' : 'secondary'}
      onClick={changeThemeHandle}
    >
      {darkTheme ? <Brightness3Icon /> : <Brightness7Icon />}
    </IconButton>
  );
};

export default ThemeButton;
