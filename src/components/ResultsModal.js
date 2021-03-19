import React from 'react';

import { useSelector } from 'react-redux';

import { Dialog, Paper } from '@material-ui/core';
import Styled from 'styled-components';

const StyledPaper = Styled(Paper)`
&& {
    padding: 32px 16px
}
`;

const ResultsModal = ({ open, closeHandle }) => {
  const userData = useSelector((state) => state.userData);
  return (
    <Dialog open={open} onClose={closeHandle}>
      <StyledPaper>
        <pre>{JSON.stringify(userData, null, 2)}</pre>
      </StyledPaper>
    </Dialog>
  );
};

export default ResultsModal;
