import React, { Component } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";
import "./Opensource.css";
import { chosenTheme } from "../../theme";
import { Fade } from "react-reveal";

class Opensource extends Component {
  render() {
    const theme = chosenTheme;
    return (
      <div className="opensource-main">
        <Header theme={theme} />
        <div className="basic-opensource">
          <Fade bottom duration={2000} distance="40px">
            <div className="opensource-heading-div">
              <div className="opensource-heading-img-div">
                <img
                  src="https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Open Source"
                  className="opensource-heading-img"
                />
              </div>
              <div className="opensource-heading-text-div">
                <h1 className="opensource-heading-text" style={{ color: theme.text }}>
                  Open Source
                </h1>
                <h3 className="opensource-heading-sub-text" style={{ color: theme.text }}>
                  Open Source Projects and Contributions
                </h3>
              </div>
            </div>
          </Fade>
          <div className="opensource-content">
            <Fade bottom duration={2000} distance="20px">
              <div className="opensource-description" style={{ color: theme.secondaryText }}>
                <p>
                  I love contributing to open source projects and building tools that help the data science community. 
                  Here are some of my notable contributions and projects that are available for everyone to use and contribute to.
                </p>
              </div>
            </Fade>
            <div className="github-profile-card">
              <Fade bottom duration={2000} distance="20px">
                <div className="github-card" style={{ backgroundColor: theme.projectCard }}>
                  <h2 style={{ color: theme.text }}>GitHub Profile</h2>
                  <p style={{ color: theme.secondaryText }}>
                    Check out my GitHub profile to see all my open source contributions and projects.
                  </p>
                  <a
                    href="https://github.com/amitgangane"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="github-button"
                    style={{
                      color: theme.body,
                      backgroundColor: theme.text,
                      border: `1px solid ${theme.text}`,
                    }}
                  >
                    Visit GitHub Profile
                  </a>
                </div>
              </Fade>
            </div>
          </div>
        </div>
        <Footer theme={theme} />
        <TopButton theme={theme} />
      </div>
    );
  }
}

export default Opensource;