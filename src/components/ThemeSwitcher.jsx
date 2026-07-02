import { useContext, useEffect } from "react";
import { ThemeContext } from "../context/ThemeContext";
const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  useEffect(() => {
    console.log("theme", theme);
  }, []);

  useEffect(() => {
    console.log("change theme", theme);
  }, [theme]);

  return (
    <div className="relative inline-block w-11 h-5">
      <input
        checked={theme === "dark"}
        onChange={toggleTheme}
        id="switch-component"
        type="checkbox"
        className="peer appearance-none w-11 h-5 bg-slate-100 dark:bg-gray-700 rounded-full checked:bg-slate-800 dark:checked:bg-gray-800 cursor-pointer transition-colors duration-300"
      />
      <label
        htmlFor="switch-component"
        className="absolute top-0 left-0 w-5 h-5 bg-white dark:bg-gray-200 rounded-full border border-slate-300 dark:border-gray-200 shadow-sm transition-transform duration-300 peer-checked:translate-x-6 peer-checked:border-slate-800 cursor-pointer"
      ></label>
    </div>
  );
};
export default ThemeSwitcher;
