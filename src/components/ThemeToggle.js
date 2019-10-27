import React, { Fragment, useContext } from 'react';
import Switch from '@material-ui/core/Switch';
import Icon from '@material-ui/core/Icon';
import { ThemeContext } from './ThemeProvider';

export default () => {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);
  return (
    <Fragment>
      <Icon>wb_sunny</Icon>
      <Switch
        checked={isDarkMode}
        value="true"
        onClick={toggleTheme}
      />
      <Icon>nights_stay</Icon>
    </Fragment>
  );
}
