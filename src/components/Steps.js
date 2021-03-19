import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { setStep } from '../redux/actions/Actions';

import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepButton from '@material-ui/core/StepButton';

import Styled from 'styled-components';

const StyledStepper = Styled(Stepper)`
  && {
    background: transparent
  }
`;

const Steps = () => {
  const dispatch = useDispatch();
  const { activeStep } = useSelector((state) => state.steps);

  return (
    <StyledStepper nonLinear activeStep={activeStep}>
      {['Dane', 'Data Urodzenia', 'Statek'].map((label, index) => (
        <Step key={label}>
          <StepButton onClick={() => dispatch(setStep(index))}>
            {label}
          </StepButton>
        </Step>
      ))}
    </StyledStepper>
  );
};

export default Steps;
