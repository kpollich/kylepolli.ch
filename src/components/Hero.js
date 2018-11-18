import React from 'react'
import Img from 'gatsby-image'

import IconLinks from './IconLinks'

const Hero = ({ data }) => (
  <div className="hero is-fullheight is-fullwidth has-text-centered">
    <Img
      fluid={data.contentfulHero.image.fluid}
      style={{ height: '100vh', width: '100vw', position: 'absolute' }}
    />
    <div className="hero-body">
      <div className="container">
        <h1 className="title is-1" style={{ color: 'white' }}>
          {data.contentfulHero.title}
        </h1>
        <h2 className="subtitle" style={{ color: 'white' }}>
          {data.contentfulHero.subtitle}
        </h2>
        {<IconLinks />}
      </div>
    </div>
  </div>
)

export default Hero
