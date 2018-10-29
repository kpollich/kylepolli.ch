import * as React from 'react'
import IconLinks from './IconLinks'

export interface ContentfulResolutions {
  src: String
}

export interface ContentfulImage {
  resolutions: ContentfulResolutions
}

export interface ContentfulHero {
  image: ContentfulImage
  subtitle: String
  title: String
}

export interface HeroData {
  contentfulHero: ContentfulHero
}

export interface HeroProps {
  data: HeroData
}

const Hero: React.SFC<HeroProps> = ({ data }) => (
  <div
    className="hero is-fullheight is-fullwidth has-text-centered"
    style={{
      backgroundImage: `url("${data.contentfulHero.image.resolutions.src}")`
    }}
  >
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
