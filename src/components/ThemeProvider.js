import React, { useState, createContext } from 'react';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const ThemeContext = createContext({
  isDarkMode: false,
  toggleTheme: () => {},
});

export default ({ children }) => {
  const [ theme, setTheme ] = useState({
    palette: {
      type: "light"
    }
  });

  const toggleTheme = () => {
    setTheme({
      palette: {
        type: theme.palette.type === "light" ? "dark" : "light",
      }
    });
  };

  // we generate a MUI-theme from state's theme object
  const muiTheme = createMuiTheme(theme);

  // the mui theme is used in the themeProvider.
  return (
    <ThemeProvider theme={muiTheme}>
      <ThemeContext.Provider value={{ isDarkMode: theme.palette.type === 'dark', toggleTheme }}>
        {children}
      </ThemeContext.Provider>
    </ThemeProvider>
  );
}

export { ThemeContext };
