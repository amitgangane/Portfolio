import React, { Component } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";
import ExperienceAccordion from "../../containers/experienceAccordion/ExperienceAccordion";
import "./Experience.css";
import { chosenTheme } from "../../theme";
import { workExperiences } from "../../portfolio.js";
import { Fade } from "react-reveal";

class Experience extends Component {
  render() {
    const theme = chosenTheme;
    return (
      <div className="experience-main">
        <Header theme={theme} />
        <div className="basic-experience">
          <Fade bottom duration={2000} distance="40px">
            <div className="experience-heading-div">
              <div className="experience-heading-img-div">
                <img
                  src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Experience"
                  className="experience-heading-img"
                />
              </div>
              <div className="experience-heading-text-div">
                <h1 className="experience-heading-text" style={{ color: theme.text }}>
                  Experience
                </h1>
                <h3 className="experience-heading-sub-text" style={{ color: theme.text }}>
                  Work, Internship and Volunteership
                </h3>
              </div>
            </div>
          </Fade>
          {workExperiences.display && (
            <ExperienceAccordion sections={workExperiences} theme={theme} />
          )}
        </div>
        <Footer theme={theme} />
        <TopButton theme={theme} />
      </div>
    );
  }
}

export default Experience;