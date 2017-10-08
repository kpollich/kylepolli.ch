import React from 'react'

export const query = graphql`
  query ListPosts {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            subtitle
          }
          fields {
            slug
          }
        }
      }
    }
  }
`
