import React, { Component } from "react";

const contents = [
  {
    url: "#",
    title: "Before"
  },
  {
    url: "#",
    title: "Reading"
  },
  {
    url: "#",
    title: "Read"
  },
  {
    url: "#",
    title: "Logout"
  }
];

class Header extends Component {
  renderRightContent = () => {
    return contents.map(content => {
      return (
        <div className="messages box" key={content.title}>
          <a href={content.url}>{content.title}</a>
        </div>
      );
    });
  };

  render() {
    return (
      <header className="header">
        {/* <div className="site-name">
          <h1 className="desktop">BookShelf</h1>
        </div>
        <div className="bar">
          <div className="left-content">
            <i className="fas fa-arrow-left"></i>
            <i className="fas fa-arrow-right"></i>
          </div>
          <div className="right-content">{this.renderRightContent()}</div>
        </div> */}
        <div class="ui grid">
          <div class="left floated column">
            <p>logo</p>
          </div>
          <div class="right floated column">
            <p>signout</p>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
