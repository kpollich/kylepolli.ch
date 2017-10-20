const { createFilePath } = require('gatsby-source-filesystem')
const path = require('path')

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators
  return new Promise((resolve, reject) => {
    graphql(`
      {
        allContentfulPosts {
          edges {
            node {
              slug
            }
          }
        }
      }
    `).then(result => {
      result.data.allContentfulPosts.edges.map(({ node }) => {
        createPage({
          path: node.slug,
          component: path.resolve(`./src/templates/post.js`),
          context: {
            slug: node.slug
          }
        })
      })

      resolve()
    })
  })
}
