const { createFilePath } = require('gatsby-source-filesystem')
const path = require('path')

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions

  if (node.internal.type !== 'MarkdownRemark') {
    return
  }

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
    {
      allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/content/posts/" } }
        sort: { fields: frontmatter___datePublished, order: DESC }
      ) {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              image
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
        slug: node.fields.slug,
        image: node.frontmatter.image
      }
    })
  })
}
