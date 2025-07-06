import React from "react";
import ExperienceCard from "../../components/experienceCard/ExperienceCard";
import "./ExperienceAccordion.css";
import { Fade } from "react-reveal";

export default function ExperienceAccordion(props) {
  const theme = props.theme;
  return (
    <div className="experience-accordion" id="experience">
      <Fade bottom duration={2000} distance="20px">
        <div className="experience-accordion-header">
          <h1 className="experience-accordion-header-text" style={{ color: theme.text }}>
            Experiences
          </h1>
        </div>
      </Fade>
      <div className="experience-accordion-body">
        {props.sections.experience.map((card, index) => {
          return (
            <ExperienceCard key={index} cardInfo={card} theme={theme} />
          );
        })}
      </div>
    </div>
  );
}