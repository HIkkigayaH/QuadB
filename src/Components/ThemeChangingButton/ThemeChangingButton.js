import React from "react";
import "./ThemeChangingButton.css";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "./../../Redux/LayoutReducer/Actions";

const ThemeChangingButton = () => {
  const theme = useSelector((state) => state.LayoutReducer.theme);
  const dispatch = useDispatch();
  const handleThemeToggle = () => dispatch(toggleTheme());
  return (
    <div className="theme-btn-container">
      <label className="switch">
        <input type="checkbox" onClick={handleThemeToggle} checked={theme} />
        <span className="slider round" />
      </label>
    </div>
  );
};

export default ThemeChangingButton;
