import React, { useState } from 'react';

import { useSelector } from 'react-redux';

import DateFnsUtils from '@date-io/date-fns';
import { pl } from 'date-fns/locale';
import { MuiPickersUtilsProvider, DatePicker } from '@material-ui/pickers';
import { Grid, TextField } from '@material-ui/core';
import Styled from 'styled-components';
import moment from 'moment';

import StepButtons from '../StepButtons';
import Steps from '../Steps';

const StyledDatePicker = Styled(DatePicker)`
&& {
  cursor: pointer;
  margin-right: 16px;
  & input {
  cursor: pointer;
  user-select: none;
  }
}
`;
const StyledTextField = Styled(TextField)`
&& {
  width: 70px;
  }
}
`;
const StyledContainer = Styled.div`
&& {
  display: flex;
}
`;

const StepTwo = () => {
  const { birthDate: birthDateData } = useSelector((state) => state.userData);
  const [birthDate, setBirthDate] = useState(birthDateData);
  const [submitted, setSubmitted] = useState(false);
  const age = moment().diff(birthDate, 'years');
  const userData = { birthDate, age };

  const validate = () => {
    setSubmitted(true);
    return age > 0;
  };

  return (
    <Grid container item xs={12} md={12} xl={6} direction='column'>
      <Steps validate={validate} userData={userData} />
      <StyledContainer>
        <MuiPickersUtilsProvider utils={DateFnsUtils} locale={pl}>
          <StyledDatePicker
            fullWidth
            style={{ userSelect: 'none' }}
            cancelLabel='Anuluj'
            disableFuture
            inputVariant='outlined'
            id='date-picker'
            margin='normal'
            label='Data Urodzenia'
            format='MM/dd/yyyy'
            value={birthDate}
            onChange={setBirthDate}
            error={submitted && age === 0}
            helperText={
              submitted && age === 0 && 'Wiek nie może być równy zeru!'
            }
          />
        </MuiPickersUtilsProvider>
        <StyledTextField
          type='tel'
          readOnly
          margin='normal'
          label='Wiek'
          variant='outlined'
          value={age}
          error={submitted && age === 0}
        />
      </StyledContainer>
      <StepButtons step={1} userData={userData} validate={validate} />
    </Grid>
  );
};

export default StepTwo;
