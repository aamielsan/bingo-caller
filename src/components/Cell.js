import React, { useState } from 'react';
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
  const [ toggled, setToggle ] = useState(false);

  const handleOnClick = () => {
    setToggle(!toggled);
  }

  return (
    <Button
      style={{ pointerEvents: 'auto' }}
      variant="contained"
      onClick={handleOnClick}
      className={`${classes.button} square ${toggled ? '' : 'Mui-disabled'}`}
      color={`${toggled ? 'secondary' : 'primary'}`}
    >
      <Typography variant="h4">
        {children}
      </Typography>
    </Button>
  );
}
