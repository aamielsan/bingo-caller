import React from 'react';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
  },
}));

export default ({ children }) => {
  const classes = useStyles();

  return (
    <Button
      variant="contained"
      className={`${classes.button} square`}
      color="primary"
    >
      <Typography variant="h4">
        {children}
      </Typography>
    </Button>
  );
}
