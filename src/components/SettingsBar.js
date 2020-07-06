import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import ThemeToggle from './ThemeToggle';

const useStyles = makeStyles(theme => ({
  settings: {
    paddingRight: theme.spacing(1),
  },
}));

export default () => {
  const classes = useStyles();
  return (
    <Grid
      container
      className={classes.settings}
      alignItems="center"
      justify="flex-end"
    >
      <ThemeToggle />
    </Grid>
  );
}
