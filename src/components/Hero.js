import React from 'react'

import IconLinks from './IconLinks'

const Hero = () => (
  <div className="hero is-fullheight is-fullwidth has-text-centered">
    <div className="hero-body">
      <div className="container">
        <h1 className="title is-1" style={{ color: 'white' }}>
          Kyle Pollich
        </h1>
        <h2 className="subtitle" style={{ color: 'white' }}>
          Lancaster, PA Full Stack Developer
        </h2>
        {<IconLinks />}
      </div>
    </div>
  </div>
)

export default Hero
