import React from 'react';

import { useSelector } from 'react-redux';

import { Container as MuiContainer, Grid } from '@material-ui/core';
import Styled from 'styled-components';

import StepOne from './formComponents/StepOne';
import StepTwo from './formComponents/StepTwo';
import StepThree from './formComponents/StepThree';
import Steps from './Steps';

const StyledContainer = Styled(MuiContainer)`
  && {
    margin-top: 5vh;
  }
`;

const Container = () => {
  const { activeStep } = useSelector((state) => state.steps);
  return (
    <StyledContainer>
      <Steps />
      <Grid container direction='column' justify='center' alignItems='center'>
        <Grid container item xs={12} md={12} xl={6}>
          {activeStep === 0 && <StepOne />}
          {activeStep === 1 && <StepTwo />}
          {activeStep === 2 && <StepThree />}
        </Grid>
      </Grid>
    </StyledContainer>
  );
};

export default Container;
