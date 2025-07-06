import React from "react";
import "./Certifications.css";
import CertificationCard from "../../components/certificationCard/CertificationCard";
import { achievementSection } from "../../portfolio";
import { Fade } from "react-reveal";

export default function Certifications(props) {
  const theme = props.theme;
  if (achievementSection.display) {
    return (
      <div className="certifications-main-div" id="certifications">
        <Fade bottom duration={2000} distance="20px">
          <div className="certifications-header">
            <h1 className="certifications-header-text" style={{ color: theme.text }}>
              {achievementSection.title}
            </h1>
            <p className="certifications-header-subtitle" style={{ color: theme.secondaryText }}>
              {achievementSection.subtitle}
            </p>
          </div>
        </Fade>
        <div className="certifications-body-div">
          {achievementSection.achievementsCards.map((card, index) => {
            return (
              <CertificationCard key={index} cardInfo={card} theme={theme} />
            );
          })}
        </div>
      </div>
    );
  }
  return null;
}