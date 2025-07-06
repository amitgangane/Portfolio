import React, { Component } from "react";

export default class EducationImg extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div>
        <img
          alt="Education"
          src="https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=600"
          style={{
            maxWidth: "100%",
            height: "auto",
            borderRadius: "20px",
            boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)"
          }}
        />
      </div>
    );
  }
}