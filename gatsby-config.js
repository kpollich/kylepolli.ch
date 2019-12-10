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
        name: 'projects',
        path: `${__dirname}/content/projects`
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
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-prismjs`,
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
      resolve: 'gatsby-plugin-styled-components',
      options: {
        // Add any options here
      }
    }
  ]
}
