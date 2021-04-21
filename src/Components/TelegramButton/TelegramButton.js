import React from "react";
import "./TelegramButton.css";
import telegramLogo from "../../Assets/Images/telegram-logo.png";
import { Link } from "react-router-dom";

export const TelegramButton = () => (
  <Link to="/connect/telegram" className="no-underline">
    <div className="telegram-button-container">
      <button className="bn pointer flex flex-nowrap">
        <div className="dib">
          <img
            src={telegramLogo}
            alt="telegram icon"
            className="telegram-logo"
          />
        </div>
        <p className="ttc dib ma0 nowrap">connect telegram</p>
      </button>
    </div>
  </Link>
);
