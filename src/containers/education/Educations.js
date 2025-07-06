import React from "react";
import "./Educations.css";
import DegreeCard from "../../components/degreeCard/DegreeCard";
import { educationInfo } from "../../portfolio";
import { Fade } from "react-reveal";

export default function Educations(props) {
  const theme = props.theme;
  if (educationInfo.display) {
    return (
      <div className="educations-main-div" id="educations">
        <Fade bottom duration={2000} distance="20px">
          <div className="educations-header">
            <h1 className="educations-header-text" style={{ color: theme.text }}>
              Degrees Received
            </h1>
          </div>
        </Fade>
        <div className="educations-body-div">
          {educationInfo.schools.map((school, index) => {
            return (
              <DegreeCard key={index} school={school} theme={theme} />
            );
          })}
        </div>
      </div>
    );
  }
  return null;
}