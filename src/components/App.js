import React from 'react';
import Grid from '@material-ui/core/Grid';
import BingoCard from './BingoCard';
import SettingsBar from './SettingsBar';

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
      <SettingsBar />
      <BingoCard
        count={75}
        rows={['B', 'I', 'N', 'G', 'O']}
      />
    </Grid>
  );
}
