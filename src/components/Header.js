import React, { Component } from "react";
import Link from "gatsby-link";

class Header extends Component {
  constructor() {
    super();
    this.state = { isNavMenuOpen: false };
  }
  render() {
    const navMenuClassName = this.state.isNavMenuOpen
      ? "navbar-menu is-active"
      : "navbar-menu";

    const navbarBurgerClassName = this.state.isNavMenuOpen
      ? "navbar-burger is-active"
      : "navbar-burger";

    return (
      <nav className="navbar">
        <div className="navbar-brand">
          <a className="navbar-item" href="/">
            <h1>Kyle Pollich</h1>
          </a>

          <div
            className={navbarBurgerClassName}
            data-target="navMenu"
            onClick={() =>
              this.setState({ isNavMenuOpen: !this.state.isNavMenuOpen })
            }
          >
            <span />
            <span />
            <span />
          </div>
        </div>

        <div id="navMenu" className={navMenuClassName}>
          <div className="navbar-start">
            <Link to="/blog" className="navbar-item">
              Blog
            </Link>
            <Link to="/projects" className="navbar-item">
              Projects
            </Link>
            <Link to="/resume" className="navbar-item">
              Resume
            </Link>
          </div>
        </div>
      </nav>
    );
  }
}

export default Header;
