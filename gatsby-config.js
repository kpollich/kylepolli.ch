module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`
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
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'resume',
        path: `${__dirname}/src/resume/`
      }
    },
    'gatsby-transformer-remark',
    'gatsby-plugin-sass',
    'gatsby-transformer-json'
  ]
}
