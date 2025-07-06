import React, { Component } from "react";
import "./TopButton.css";

class TopButton extends Component {
  constructor() {
    super();
    this.state = {
      is_visible: false
    };
  }

  componentDidMount() {
    var scrollComponent = this;
    document.addEventListener("scroll", function(e) {
      scrollComponent.toggleVisibility();
    });
  }

  toggleVisibility() {
    if (window.pageYOffset > 300) {
      this.setState({
        is_visible: true
      });
    } else {
      this.setState({
        is_visible: false
      });
    }
  }

  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }

  render() {
    const { is_visible } = this.state;
    const theme = this.props.theme;
    return (
      <div className="scroll-to-top">
        {is_visible && (
          <div
            className="top-btn"
            onClick={() => this.scrollToTop()}
            style={{
              color: theme.body,
              backgroundColor: theme.text,
            }}
          >
            <i className="fas fa-chevron-up" />
          </div>
        )}
      </div>
    );
  }
}

export default TopButton;