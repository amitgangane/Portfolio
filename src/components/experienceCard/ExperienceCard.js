import React from "react";
import "./ExperienceCard.css";
import { Fade } from "react-reveal";

export default function ExperienceCard(props) {
  const experience = props.cardInfo;
  const theme = props.theme;
  return (
    <div className="experience-card">
      <Fade left duration={2000} distance="40px">
        <div
          className="experience-card-content"
          style={{ backgroundColor: theme.projectCard }}
        >
          <div className="experience-card-header">
            <div className="experience-card-logo">
              <img
                className="experience-card-logo-img"
                src={experience.companylogo}
                alt={experience.company}
              />
            </div>
            <div className="experience-card-info">
              <h2 className="experience-card-role" style={{ color: theme.text }}>
                {experience.role}
              </h2>
              <h3 className="experience-card-company" style={{ color: theme.text }}>
                {experience.company}
              </h3>
              <p className="experience-card-date" style={{ color: theme.secondaryText }}>
                {experience.date}
              </p>
            </div>
          </div>
          <div className="experience-card-body">
            <p className="experience-card-description" style={{ color: theme.text }}>
              {experience.desc}
            </p>
            {experience.descBullets && experience.descBullets.length > 0 && (
              <ul className="experience-card-bullets" style={{ color: theme.text }}>
                {experience.descBullets.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </Fade>
    </div>
  );
}