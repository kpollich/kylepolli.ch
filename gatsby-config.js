module.exports = {
  siteMetadata: {
    title: `Kyle Pollich - Lancaster, PA Full Stack Developer`
  },
  pathPrefix: '/',
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `st2w4t2u7h9u`,
        accessToken: `6ea446be4294a1b10532d55ce88067fef62df2c0d636240b524a25da7d93a353`
      }
    },
    'gatsby-plugin-sass',
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              classPrefix: `language-`,
              inlineCodeMarker: null,
              aliases: {}
            }
          }
        ]
      }
    }
  ]
}
