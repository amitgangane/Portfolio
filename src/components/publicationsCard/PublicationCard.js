import React from "react";
import "./PublicationCard.css";
import { Fade } from "react-reveal";

export default function PublicationCard(props) {
  const project = props.cardInfo;
  const theme = props.theme;
  
  function openUrlInNewTab(url) {
    if (!url) {
      return;
    }
    var win = window.open(url, "_blank");
    win.focus();
  }

  return (
    <Fade bottom duration={2000} distance="20px">
      <div className="publication-card-div" style={{ backgroundColor: theme.projectCard }}>
        <div className="publication-card-img">
          <img
            src={project.image}
            alt={project.projectName}
            className="card-img"
          />
        </div>
        <div className="publication-detail">
          <h5 className="card-title" style={{ color: theme.text }}>
            {project.projectName}
          </h5>
          <p className="card-subtitle" style={{ color: theme.text }}>
            {project.projectDesc}
          </p>
          {project.footerLink && project.footerLink.length > 0 && (
            <div className="publication-card-footer">
              {project.footerLink.map((link, index) => {
                return (
                  <span
                    key={index}
                    className="publication-tag"
                    onClick={() => openUrlInNewTab(link.url)}
                    style={{ color: theme.text }}
                  >
                    {link.name}
                  </span>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </Fade>
  );
}