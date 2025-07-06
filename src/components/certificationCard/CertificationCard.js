import React from "react";
import "./CertificationCard.css";
import { Fade } from "react-reveal";

export default function CertificationCard(props) {
  const certificate = props.cardInfo;
  const theme = props.theme;
  return (
    <Fade bottom duration={2000} distance="20px">
      <div className="cert-card">
        <div className="cert-card-content" style={{ backgroundColor: theme.projectCard }}>
          <div className="cert-header">
            <img
              className="cert-logo"
              src={certificate.image}
              alt={certificate.title}
            />
          </div>
          <div className="cert-body">
            <h2 className="cert-body-title" style={{ color: theme.text }}>
              {certificate.title}
            </h2>
            <p className="cert-body-subtitle" style={{ color: theme.secondaryText }}>
              {certificate.subtitle}
            </p>
          </div>
          <div className="cert-card-footer">
            {certificate.footerLink && certificate.footerLink.length > 0 && (
              <div className="cert-footer-button-div">
                {certificate.footerLink.map((link, index) => {
                  return (
                    <a
                      key={index}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cert-footer-button"
                      style={{
                        color: theme.text,
                        backgroundColor: theme.body,
                        border: `1px solid ${theme.text}`,
                      }}
                    >
                      {link.name}
                    </a>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </div>
    </Fade>
  );
}