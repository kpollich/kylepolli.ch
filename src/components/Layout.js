import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/Header'
import Footer from '../components/Footer'

import 'bulma'
import '../index.scss'
import 'prismjs/themes/prism.css'

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
    <div>{children}</div>
    <Footer />
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func
}

export default TemplateWrapper
