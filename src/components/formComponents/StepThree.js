import React, { useState } from 'react';

import { useSelector } from 'react-redux';

import {
  FormControl,
  FormHelperText,
  Grid,
  InputLabel,
  MenuItem,
  Select,
} from '@material-ui/core';

import StepButtons from '../StepButtons';
import Steps from '../Steps';
import ResultsModal from '../ResultsModal';

const StepThree = () => {
  const { ship: shipData } = useSelector((state) => state.userData);
  const { loading, error, ships } = useSelector((state) => state.ships);
  const [ship, setShip] = useState(shipData);
  const [submitted, setSubmitted] = useState(false);
  const [open, setOpen] = useState(false);
  const userData = { ship };

  const validate = () => {
    setSubmitted(true);
    return Boolean(ship);
  };

  return (
    <>
      <Grid container item xs={12} md={12} xl={6}>
        <Steps validate={validate} userData={userData} />
        <FormControl
          fullWidth
          margin='normal'
          variant='outlined'
          error={submitted && !Boolean(ship)}
        >
          <InputLabel>Statek</InputLabel>
          <Select
            MenuProps={{
              getContentAnchorEl: null,
              anchorOrigin: {
                vertical: 'bottom',
                horizontal: 'left',
              },
            }}
            label='Statek'
            fullWidth
            value={ship}
            onChange={(e) => setShip(e.target.value)}
            disabled={loading || error}
          >
            {!loading &&
              ships &&
              ships.map((shipObj, i) => (
                <MenuItem key={i} value={shipObj.name}>
                  {shipObj.name}
                </MenuItem>
              ))}
          </Select>
          {submitted && !Boolean(ship) && (
            <FormHelperText>Musisz wybrać statek!</FormHelperText>
          )}
        </FormControl>
        <StepButtons
          step={2}
          userData={userData}
          validate={validate}
          openModal={() => setOpen(true)}
        />
      </Grid>
      <ResultsModal open={open} closeHandle={() => setOpen(false)} />
    </>
  );
};

export default StepThree;
