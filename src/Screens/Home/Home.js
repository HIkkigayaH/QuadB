import React, { Component } from "react";
import "./Home.css";
import { connect } from "react-redux";
import Navbar from "../../Components/Navbar/Navbar";
import Statistics from "../../Components/Statistics/Statistics";
import AddToHomeScreen from "../../Components/AddToHomeScreen/AddToHomeScreen";
import TradeTable from "../../Components/TradeTable/TradeTable";
import { Link } from "react-router-dom";

const mapStateToProps = (state) => ({
  theme: state.LayoutReducer.theme,
});

class Home extends Component {
  render() {
    const { theme } = this.props;
    return (
      <div
        className={`relative home min-vh-100 ${
          theme ? "dark-theme" : "light-theme"
        }`}
        style={{ paddingBottom: "50px" }}
      >
        <Navbar />
        <Statistics />
        <TradeTable />
        <AddToHomeScreen />
        <div className="pa3">
          <Link to="#">
            <img
              src="https://hodlinfo.com/static/media/BannerFTXNews.d0cd974b.png"
              alt="register now"
            />
          </Link>
        </div>
        <footer className="pa3">
          <div className="flex items-center">
            <span className="pr2">Copyright © 2019</span>
            <span className="pr2">HodlInfo.com</span>
            <span className="pr2">
              Developed By{" "}
              <a href="https://github.com/HIkkigayaH" className="no-underline">
                HIkkigayaH
              </a>
            </span>
            <span className="pr2 ml-auto">Support</span>
          </div>
        </footer>
      </div>
    );
  }
}

export default connect(mapStateToProps)(Home);
