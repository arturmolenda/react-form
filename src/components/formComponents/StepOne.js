import React, { useState } from 'react';

import { useSelector } from 'react-redux';

import {
  FormControl,
  FormHelperText,
  Grid,
  InputLabel,
  Select,
  TextField,
} from '@material-ui/core';
import StepButtons from '../StepButtons';
import Steps from '../Steps';

const StepOne = () => {
  const { name: nameData, surname: surnameData, sex: sexData } = useSelector(
    (state) => state.userData
  );
  const [name, setName] = useState(nameData);
  const [surname, setSurname] = useState(surnameData);
  const [sex, setSex] = useState(sexData);
  const [submitted, setSubmitted] = useState(false);
  const userData = { name, surname, sex };

  const validate = () => {
    setSubmitted(true);
    return name.trim() !== '' && surname.trim() !== '' && sex;
  };

  return (
    <Grid container item xs={12} md={12} xl={6}>
      <Steps validate={validate} userData={userData} />
      <TextField
        fullWidth
        type='text'
        name='name'
        variant='outlined'
        label='Imię'
        margin='normal'
        value={name}
        onChange={(e) => setName(e.target.value)}
        error={submitted && !Boolean(name.trim())}
        helperText={submitted && 'Imię nie może być puste!'}
      />
      <TextField
        fullWidth
        type='text'
        name='surname'
        variant='outlined'
        label='Nazwisko'
        margin='normal'
        value={surname}
        onChange={(e) => setSurname(e.target.value)}
        error={submitted && !Boolean(surname.trim())}
        helperText={submitted && 'Nazwisko nie może być puste!'}
      />
      <FormControl
        fullWidth
        margin='normal'
        variant='outlined'
        error={submitted && !Boolean(sex)}
      >
        <InputLabel>Płeć</InputLabel>
        <Select
          native
          label='Płeć'
          fullWidth
          value={sex}
          onChange={(e) => setSex(e.target.value)}
        >
          <option value=''></option>
          <option value='Mężczyzna'>Mężczyzna</option>
          <option value='Kobieta'>Kobieta</option>
          <option value='Inne'>Inne</option>
        </Select>
        {submitted && !Boolean(sex) && (
          <FormHelperText>Płeć nie może być pusta!</FormHelperText>
        )}
      </FormControl>
      <StepButtons step={0} userData={userData} validate={validate} />
    </Grid>
  );
};

export default StepOne;
