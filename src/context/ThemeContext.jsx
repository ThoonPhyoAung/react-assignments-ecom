import React, { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext(); //create context

export const ThemeProvider = ({ children }) => {
  // get theme (if have , get theme , if don't have , default will be "light")
  const storageTheme = localStorage.getItem("theme")
    ? localStorage.getItem("theme")
    : "light";

  const [theme, setTheme] = useState(storageTheme);

  // this make changing color
  useEffect(() => {
    let root = document.documentElement;
    // root.classList.toggle("dark"); //can't do with toggle
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
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
