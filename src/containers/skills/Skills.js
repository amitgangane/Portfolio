import React, { Component } from "react";
import "./Skills.css";
import SoftwareSkill from "../../components/softwareSkills/SoftwareSkill";
import { skillsSection } from "../../portfolio";
import { Fade } from "react-reveal";

function GetSkillSvg(props) {
  return (
    <div className="skills-image-div">
      <img
        alt="Skills"
        src="https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=600"
        className="skills-image"
      />
    </div>
  );
}

class Skills extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div className="main" id="skills">
        <div className="skills-main-div">
          <Fade left duration={2000}>
            <div className="skills-image-div">
              <GetSkillSvg theme={theme} />
            </div>
          </Fade>

          <Fade right duration={2000}>
            <div className="skills-text-div">
              <h1 className="skills-heading" style={{ color: theme.text }}>
                {skillsSection.title}
              </h1>
              <p
                className="subTitle skills-text-subtitle"
                style={{ color: theme.secondaryText }}
              >
                {skillsSection.subTitle}
              </p>
              <SoftwareSkill theme={theme} />
              <div>
                {skillsSection.skills.map((skills, i) => {
                  return (
                    <p
                      key={i}
                      className="subTitle skills-text"
                      style={{ color: theme.secondaryText }}
                    >
                      {skills}
                    </p>
                  );
                })}
              </div>
            </div>
          </Fade>
        </div>
      </div>
    );
  }
}

export default Skills;