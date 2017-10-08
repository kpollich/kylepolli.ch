import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

import './index.css'

const Header = () => (
  <nav className="navbar">
    <div className="navbar-brand">
      <a className="navbar-item" href="/">
        <h1>Kyle Pollich</h1>
      </a>

      <div className="navbar-burger burger" data-target="navMenu">
        <span />
        <span />
        <span />
      </div>
    </div>

    <div id="navMenu" className="navbar-menu">
      <div classNameName="navbar-start">
        <a classNameName="navbar-item">Test</a>
      </div>
    </div>
  </nav>
)

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Kyle Pollich - Lancaster, PA Full Stack Developer"
      meta={[
        {
          name: 'description',
          content: 'Kyle Pollich - Lancaster, PA Full Stack Developer'
        }
      ]}
    >
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.5.3/css/bulma.min.css"
      />
    </Helmet>
    <Header />
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '0px 1.0875rem 1.45rem',
        paddingTop: 0
      }}
    >
      {children()}
    </div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func
}

export default TemplateWrapper
