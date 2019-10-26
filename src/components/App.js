import React, { Fragment } from 'react';
import Grid from '@material-ui/core/Grid';
import BingoCard from './BingoCard';
import ThemeToggle from './ThemeToggle';

export default () => {
  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justify="center"
      style={{ minHeight: '100vh' }}
    >
      <Grid
        style={{ marginRight: '8px' }}
        container
        alignItems="center"
        justify="flex-end"
      >
        <ThemeToggle />
      </Grid>
      <BingoCard
        count={75}
        rows={['B', 'I', 'N', 'G', 'O']}
      />
    </Grid>
  );
}
