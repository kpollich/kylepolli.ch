import React from 'react'

const BlogPage = ({ data }) => {
  return (
    <section className="section outer">
      <div className="container">
        <h1 className="title is-1">Blog Posts</h1>
        <hr />
        <ul className="post-list">
          {data.allMarkdownRemark.edges.map(({ node }) => (
            <li key={node.id}>
              <a className="box" href={node.fields.slug}>
                <span>{node.frontmatter.date}</span>
                <h2 className="title is-4">{node.frontmatter.title}</h2>
                <span>{node.frontmatter.subtitle}</span>
              </a>
            </li>
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
