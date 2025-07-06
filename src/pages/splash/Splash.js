import React, { Component } from "react";
import "./Splash.css";
import { Redirect } from "react-router-dom";
import { chosenTheme } from "../../theme";

function AnimatedSplashScreen(props) {
  return (
    <div className="logo_wrapper">
      <div className="screen" style={{ backgroundColor: props.theme.splashBg }}>
        <div className="splash-container">
          <div className="splash-title" style={{ color: props.theme.text }}>
            <h1>Amit Gangane</h1>
            <p>Data Scientist</p>
          </div>
          <div className="loading-animation">
            <div className="loading-bar" style={{ backgroundColor: props.theme.accentColor }}></div>
          </div>
        </div>
      </div>
    </div>
  );
}

class Splash extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: false
    };
  }

  componentDidMount() {
    this.id = setTimeout(() => this.setState({ redirect: true }), 2000);
  }

  componentWillUnmount() {
    clearTimeout(this.id);
  }

  render() {
    return this.state.redirect ? (
      <Redirect to="/home" />
    ) : (
      <AnimatedSplashScreen theme={chosenTheme} />
    );
  }
}

export default Splash;