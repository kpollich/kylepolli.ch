const { createFilePath } = require('gatsby-source-filesystem')
const path = require('path')

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions

  if (node.internal.type !== 'MarkdownRemark') {
    return
  }

  const fileNode = getNode(node.parent)
  const slug = createFilePath({ node, getNode, basePath: `pages` })

  createNodeField({
    node,
    name: `slug`,
    value: slug
  })
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const result = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: `/posts${node.fields.slug}`,
      component: path.resolve(`./src/templates/post.tsx`),
      context: {
        slug: node.fields.slug
      }
    })
  })
}
