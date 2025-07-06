import React, { Component } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";
import "./ContactComponent.css";
import { chosenTheme } from "../../theme";
import { contactInfo } from "../../portfolio.js";
import { Fade } from "react-reveal";

class Contact extends Component {
  render() {
    const theme = chosenTheme;
    return (
      <div className="contact-main">
        <Header theme={theme} />
        <div className="basic-contact">
          <Fade bottom duration={1000} distance="40px">
            <div className="contact-heading-div">
              <div className="contact-heading-img-div">
                <img
                  src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Contact"
                  className="contact-heading-img"
                />
              </div>
              <div className="contact-heading-text-div">
                <h1 className="contact-heading-text" style={{ color: theme.text }}>
                  {contactInfo.title}
                </h1>
                <p className="contact-header-detail-text subTitle" style={{ color: theme.secondaryText }}>
                  {contactInfo.subtitle}
                </p>
                <SocialMedia theme={theme} />
                <div className="contact-detail">
                  <h1 className="contact-detail-email" style={{ color: theme.text }}>
                    <a href={`mailto:${contactInfo.email_address}`} style={{ color: theme.text }}>
                      {contactInfo.email_address}
                    </a>
                  </h1>
                  <p className="contact-detail-text" style={{ color: theme.secondaryText }}>
                    {contactInfo.number}
                  </p>
                </div>
              </div>
            </div>
          </Fade>
        </div>
        <Footer theme={theme} />
        <TopButton theme={theme} />
      </div>
    );
  }
}

export default Contact;