import React from 'react';

import { useSelector } from 'react-redux';

import { Container as MuiContainer, Grid } from '@material-ui/core';
import Styled from 'styled-components';

import StepOne from './formComponents/StepOne';
import StepTwo from './formComponents/StepTwo';
import StepThree from './formComponents/StepThree';

const StyledContainer = Styled(MuiContainer)`
  && {
      display: flex;
    position: relative;
    margin-top: 5vh;
  }
`;
const StyledGrid = Styled(Grid)`
  && {
    margin-top: 10vh;
  }
`;

const Container = () => {
  const { activeStep } = useSelector((state) => state.steps);
  return (
    <StyledContainer>
      <StyledGrid
        container
        direction='column'
        justify='center'
        alignItems='center'
      >
        {activeStep === 0 && <StepOne />}
        {activeStep === 1 && <StepTwo />}
        {activeStep === 2 && <StepThree />}
      </StyledGrid>
    </StyledContainer>
  );
};

export default Container;
