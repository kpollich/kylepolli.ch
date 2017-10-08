import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

import Header from '../components/Header'

import 'bulma'
import './index.scss'

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
    />
    <Header />
    <div>{children()}</div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func
}

export default TemplateWrapper
