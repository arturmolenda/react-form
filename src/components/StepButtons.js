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
        <Button onClick={goBackHandle} color='secondary'>
          Wstecz
        </Button>
      )}
      {step !== 2 && (
        <Button onClick={nextHandle} color='primary' variant='contained'>
          Dalej
        </Button>
      )}
    </Container>
  );
};

export default StepButtons;
