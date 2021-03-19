import React, { useState } from 'react';

import { FormControl, InputLabel, Select, TextField } from '@material-ui/core';
import StepButtons from '../StepButtons';

const StepOne = () => {
  const [name, setName] = useState();
  const [surname, setSurname] = useState();
  const [sex, setSex] = useState();
  return (
    <>
      <TextField
        fullWidth
        variant='outlined'
        label='Imię'
        margin='normal'
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <TextField
        fullWidth
        variant='outlined'
        label='Nazwisko'
        margin='normal'
        value={surname}
        onChange={(e) => setSurname(e.target.value)}
      />
      <FormControl fullWidth margin='normal' variant='outlined'>
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
      </FormControl>
      <StepButtons step={0} userData={{ name, surname, sex }} />
    </>
  );
};

export default StepOne;
