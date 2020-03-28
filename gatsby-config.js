module.exports = {
  siteMetadata: {
    title: 'Kyle Pollich - Lancaster, PA Full Stack Developer'
  },
  pathPrefix: '/',
  plugins: [
    'gatsby-plugin-typescript',
    'gatsby-plugin-react-helmet',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-plugin-netlify',
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-154977448-1'
      }
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-prismjs',
            options: {
              classPrefix: 'language-',
              inlineCodeMarker: null,
              aliases: {},
              showLineNumbers: false,
              noInlineHighlight: true,
              prompt: {
                user: 'root',
                host: 'localhost',
                global: false
              }
            }
          }
        ]
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'posts',
        path: `${__dirname}/content/posts`
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/content/images`
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'uses',
        path: `${__dirname}/content/uses`
      }
    },
    {
      resolve: 'gatsby-plugin-styled-components'
    }
  ]
};
