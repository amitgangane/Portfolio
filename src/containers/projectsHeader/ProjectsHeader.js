import React from "react";
import "./ProjectsHeader.css";
import { Fade } from "react-reveal";

export default function ProjectsHeader(props) {
  const theme = props.theme;
  return (
    <Fade bottom duration={2000} distance="40px">
      <div className="projects-header-div">
        <div className="projects-header-img-div">
          <img
            src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="Projects"
            className="projects-header-img"
          />
        </div>
        <div className="projects-header-text-div">
          <h1 className="projects-header-text" style={{ color: theme.text }}>
            Projects
          </h1>
          <h3 className="projects-header-sub-text" style={{ color: theme.text }}>
            My open source projects and work
          </h3>
        </div>
      </div>
    </Fade>
  );
}