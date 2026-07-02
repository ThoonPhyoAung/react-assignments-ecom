import React, { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext(); //create context

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  // this make changing color
  useEffect(() => {
    let root = document.documentElement;
    root.classList.toggle("dark");
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
