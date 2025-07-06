import React from "react";
import "./DegreeCard.css";
import { Fade } from "react-reveal";

export default function DegreeCard(props) {
  const degree = props.school;
  const theme = props.theme;
  return (
    <div className="degree-card">
      <Fade right duration={2000} distance="40px">
        <div
          className="degree-card-border"
          style={{ border: `1px solid ${theme.accentColor}` }}
        >
          <div className="degree-card-content" style={{ backgroundColor: theme.projectCard }}>
            <div style={{ display: "flex", flexDirection: "row" }}>
              <div className="degree-card-logo">
                <img
                  crossOrigin={"anonymous"}
                  className="degree-card-img"
                  src={degree.logo}
                  alt={degree.schoolName}
                />
              </div>
              <div className="degree-card-body">
                <div
                  className="body-header"
                  style={{ backgroundColor: theme.headerColor }}
                >
                  <div className="body-header-title">
                    <h2 className="card-title" style={{ color: theme.text }}>
                      {degree.schoolName}
                    </h2>
                    <h3 className="card-subtitle" style={{ color: theme.text }}>
                      {degree.subHeader}
                    </h3>
                  </div>
                  <div className="body-header-duration">
                    <h3 className="duration" style={{ color: theme.text }}>
                      {degree.duration}
                    </h3>
                  </div>
                </div>
                <div className="body-content">
                  {degree.desc && (
                    <p className="content-list" style={{ color: theme.text }}>
                      {degree.desc}
                    </p>
                  )}
                  {degree.descBullets && degree.descBullets.length > 0 && (
                    <ul className="content-list" style={{ color: theme.text }}>
                      {degree.descBullets.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Fade>
    </div>
  );
}