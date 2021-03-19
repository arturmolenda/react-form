import React from 'react';

import { useDispatch } from 'react-redux';
import { setStep, updateUserData } from '../redux/actions/Actions';

import { Button } from '@material-ui/core';
import Styled from 'styled-components';

const Container = Styled.div`
&& {
    display: flex;
    margin-top: 16px
}
`;
const StyledButton = Styled(Button)`
&& {
    margin-right: 8px;
}
`;

const StepButtons = ({ step, userData, validate }) => {
  const dispatch = useDispatch();

  const goBackHandle = () => {
    dispatch(setStep(step - 1));
    dispatch(updateUserData(userData));
  };
  const nextHandle = () => {
    if (validate()) {
      dispatch(setStep(step + 1));
      dispatch(updateUserData(userData));
    }
  };

  return (
    <Container>
      {step !== 0 && (
        <StyledButton onClick={goBackHandle} color='secondary'>
          Wstecz
        </StyledButton>
      )}
      {step !== 2 && (
        <StyledButton onClick={nextHandle} color='primary' variant='contained'>
          Dalej
        </StyledButton>
      )}
      {step === 2 && (
        <>
          <StyledButton color='primary' variant='outlined'>
            Reset
          </StyledButton>
          <StyledButton color='primary' variant='contained'>
            Wyślij
          </StyledButton>
        </>
      )}
    </Container>
  );
};

export default StepButtons;
