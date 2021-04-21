import React, { useRef, useState } from "react";
import "./Navbar.css";
import Logo from "../../Assets/Images/logo.png";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import { CryptoDropdown, CurrencyDropdown } from "../Dropdowns/Dropdowns";
import SVGCounter from "../SVGCounter/SVGCounter";
import { TelegramButton } from "../TelegramButton/TelegramButton";
import ThemeChangingButton from "../ThemeChangingButton/ThemeChangingButton";

const mapStateToProps = (state) => ({
  currencies: state.DataReducer.currencies,
  cryptos: state.DataReducer.cryptos,
});
const mapDispatchToProps = (dispatch) => ({});

const Navbar = ({ currencies, cryptos }) => {
  const [currencyOpen, setCurrencyOpen] = useState(false);
  const [cryptoOpen, setCryptoOpen] = useState(false);
  const currencyRef = useRef(null);
  const cryptoRef = useRef(null);
  const { currencyPair } = useParams();
  const [crypto, currency] = currencyPair
    ? currencyPair.split("-")
    : [cryptos[0], currencies[0]];
  const toggleCurrencyOpen = () => {
    if (cryptoOpen) setCryptoOpen(false);
    setCurrencyOpen((open) => !open);
  };
  const toggleCryptoOpen = () => {
    if (currencyOpen) setCurrencyOpen(false);
    setCryptoOpen((open) => !open);
  };

  return (
    <nav className="nav-bar flex items-center justify-center flex-wrap">
      <div className="logo-container">
        <div className="tl">
          <img src={Logo} className="w-100" alt="" />
        </div>
        <p className="gray fw4 tl ttc">
          powered by{" "}
          <a href="#" className="no-underline">
            Finstreet
          </a>
        </p>
      </div>
      <div className="nav-btn-group tc">
        <div>
          <button
            className="dropdown-btn"
            onClick={toggleCurrencyOpen}
            ref={currencyRef}
            closeHandler={() => setCryptoOpen(false)}
          >
            {currency}
          </button>
          {currencyOpen && (
            <CurrencyDropdown
              links={currencies}
              siblingRef={currencyRef}
              closeHandler={() => setCurrencyOpen(false)}
              preFix={crypto}
            />
          )}
        </div>
        <div>
          <button
            className="dropdown-btn"
            onClick={toggleCryptoOpen}
            ref={cryptoRef}
          >
            {crypto}
          </button>
          {cryptoOpen && (
            <CryptoDropdown
              links={cryptos}
              siblingRef={cryptoRef}
              closeHandler={() => setCryptoOpen(false)}
              postFix={currency}
            />
          )}
        </div>
        <div>
          <button>BUY BTC</button>
        </div>
      </div>
      <div className="nav-utils tr">
        <div className="inline-flex justify-center items-center flex-wrap">
          <SVGCounter />
          <TelegramButton />
          <ThemeChangingButton />
        </div>
      </div>
    </nav>
  );
};

export default connect(mapStateToProps)(Navbar);
