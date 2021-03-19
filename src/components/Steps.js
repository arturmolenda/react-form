import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { setStep, updateUserData } from '../redux/actions/Actions';

import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepButton from '@material-ui/core/StepButton';

import Styled from 'styled-components';

const StyledStepper = Styled(Stepper)`
  && {
    background: transparent;
    position: absolute;
    width: 100%;
    left: 0;
    top: 0;
  }
`;

const StyledStepButton = Styled(StepButton)`
  && {
    @media (max-width: 420px) {
      & span {
      font-size: 0;
      }
    }
  }
`;

const Steps = ({ validate, userData }) => {
  const { activeStep } = useSelector((state) => state.steps);
  const dispatch = useDispatch();

  const clickHandle = (step) => {
    if (step < activeStep || validate()) {
      dispatch(setStep(step));
      dispatch(updateUserData(userData));
    }
  };

  return (
    <StyledStepper nonLinear activeStep={activeStep}>
      {['Dane', 'Data Urodzenia', 'Statek'].map((label, index) => (
        <Step key={label}>
          <StyledStepButton onClick={() => clickHandle(index)}>
            {label}
          </StyledStepButton>
        </Step>
      ))}
    </StyledStepper>
  );
};

export default Steps;
