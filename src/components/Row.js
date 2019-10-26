import React from 'react';
import { Grid } from '@material-ui/core';

export default ({ children }) => {
  return (
    <Grid
      container
      className="row"
      direction="row"
      justify="center"
      alignItems="center"
    >
      {children}
    </Grid>
  );
}


