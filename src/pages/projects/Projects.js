import React, { Component } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";
import GithubRepoCard from "../../components/githubRepoCard/GithubRepoCard";
import ProjectsHeader from "../../containers/projectsHeader/ProjectsHeader";
import PublicationCard from "../../components/publicationsCard/PublicationCard";
import { chosenTheme } from "../../theme";
import { bigProjects } from "../../portfolio.js";
import "./Projects.css";
import { Fade } from "react-reveal";

class Projects extends Component {
  render() {
    const theme = chosenTheme;
    return (
      <div className="projects-main">
        <Header theme={theme} />
        <div className="basic-projects">
          <ProjectsHeader theme={theme} />
          {bigProjects.display && (
            <div className="big-projects-container">
              <Fade bottom duration={2000} distance="40px">
                <div className="projects-heading-div">
                  <h1 className="projects-heading-text" style={{ color: theme.text }}>
                    {bigProjects.title}
                  </h1>
                  <p className="projects-heading-sub-text" style={{ color: theme.secondaryText }}>
                    {bigProjects.subtitle}
                  </p>
                </div>
              </Fade>
              <div className="projects-container">
                {bigProjects.projects.map((project, index) => {
                  return (
                    <PublicationCard key={index} cardInfo={project} theme={theme} />
                  );
                })}
              </div>
            </div>
          )}
        </div>
        <Footer theme={theme} />
        <TopButton theme={theme} />
      </div>
    );
  }
}

export default Projects;