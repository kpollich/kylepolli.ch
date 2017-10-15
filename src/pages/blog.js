import React from 'react'

import PostListItem from '../components/PostListItem'

const BlogPage = ({ data }) => {
  return (
    <section className="section outer">
      <div className="container">
        <h1 className="title is-1">Blog Posts</h1>
        <hr />
        <ul className="post-list">
          {data.allMarkdownRemark.edges.map(({ node }) => (
            <PostListItem {...node} />
          ))}
        </ul>
      </div>
    </section>
  )
}

export const query = graphql`
  query ListPosts {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          id
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            subtitle
            title
          }
          fields {
            slug
          }
        }
      }
    }
  }
`

export default BlogPage
