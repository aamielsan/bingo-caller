import React, { useContext } from 'react';
import Switch from '@material-ui/core/Switch';
import { ThemeContext } from './ThemeProvider';

export default () => {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);
  return (
    <Switch
      checked={isDarkMode}
      value="true"
      onClick={toggleTheme}
    >
      toggle
    </Switch>
  );
}
