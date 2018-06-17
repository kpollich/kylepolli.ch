const path = require('path')

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  // Dynamically create a page for each blog post in Contentful
  return new Promise((resolve, reject) => {
    graphql(`
      {
        allContentfulPost {
          edges {
            node {
              slug
            }
          }
        }
      }
    `).then(result => {
      result.data.allContentfulPost.edges.map(({ node }) => {
        createPage({
          path: `/blog/${node.slug}`,
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
