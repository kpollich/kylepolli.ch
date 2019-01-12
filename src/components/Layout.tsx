import * as React from 'react'
import Helmet from 'react-helmet'

import Header from './Header'
import Footer from './Footer'

import 'bulma'
import '../index.scss'
import 'prismjs/themes/prism.css'

export interface TemplateWrapperProps {
  children: React.ReactNode
}

const Layout = ({ children }: TemplateWrapperProps) => (
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

export default Layout
