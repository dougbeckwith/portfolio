import { useEffect, useState } from "react";
export const useDarkMode = () => {
  // set theme to light by default
  const [theme, setTheme] = useState("dark");

  const setMode = (mode) => {
    window.localStorage.setItem("theme", mode);
    setTheme(mode);
  };

  const themeToggler = () => {
    theme === "light" ? setMode("dark") : setMode("light");
  };

  //Checks if there is theme in local storage already set
  useEffect(() => {
    const localTheme = window.localStorage.getItem("theme");
    localTheme && setTheme(localTheme);
  }, []);
  return [theme, themeToggler];
};
