import * as React from 'react'

const Footer: React.SFC = () => (
  <div className="footer">
    <div className="container">
      <div className="content has-text-centered">
        <div>Kyle Pollich - Lancaster, PA Full Stack Developer</div>
        <div style={{ marginTop: '2em' }}>
          <a href="https://www.contentful.com/" rel="nofollow" target="_blank">
            <img
              src="https://images.contentful.com/fo9twyrwpveg/7F5pMEOhJ6Y2WukCa2cYws/398e290725ef2d3b3f0f5a73ae8401d6/PoweredByContentful_DarkBackground.svg"
              style={{ maxWidth: '100px', width: '100%' }}
              alt="Powered by Contentful"
            />
          </a>
        </div>
      </div>
    </div>
  </div>
)

export default Footer
