import React, { Component } from "react";
import Header from "../../../components/header/Header";
import Footer from "../../../components/footer/Footer";
import TopButton from "../../../components/topButton/TopButton";
import { chosenTheme } from "../../../theme";
import "./Error.css";
import { Fade } from "react-reveal";

class Error extends Component {
  render() {
    const theme = chosenTheme;
    return (
      <div className="error-main">
        <Header theme={theme} />
        <div className="error-class">
          <Fade bottom duration={2000} distance="40px">
            <h1 style={{ color: theme.text }}>Woops</h1>
            <h1 className="error-404" style={{ color: theme.text }}>
              404
            </h1>
            <p style={{ color: theme.secondaryText }}>
              The requested page is unavailable at the moment!
            </p>
            <a className="main-button" href="/home" style={{
              color: theme.body,
              backgroundColor: theme.text,
              border: `solid 1px ${theme.text}`,
            }}>
              Go Home
            </a>
          </Fade>
        </div>
        <Footer theme={theme} />
        <TopButton theme={theme} />
      </div>
    );
  }
}

export default Error;