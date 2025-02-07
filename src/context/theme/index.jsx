/* eslint-disable react/prop-types */
import { createContext } from "react";
import { UseTheme } from "../../hook/useTheme";

const ThemeContext = createContext({});

function ThemeProvider({ children }) {
  const { setTheme, theme } = UseTheme();

  return (
    <ThemeContext.Provider value={{ setTheme, theme }} >
      {children}
    </ThemeContext.Provider>
  );
}

export { ThemeProvider, ThemeContext };
