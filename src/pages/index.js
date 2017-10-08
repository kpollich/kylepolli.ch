import React from 'react'
import Link from 'gatsby-link'

import Hero from '../components/Hero'

const IndexPage = ({ data }) => {
  return (
    <div>
      <Hero />
      <h1>Kyle Pollich</h1>
      <h2>Lancaster, PA Full Stack Developer</h2>

      <Link to="/about">About</Link>

      <div className="index-posts">
        <h1>Blog Posts</h1>
        {data.allMarkdownRemark.edges.map(({ node }) => {
          return (
            <div key={node.id} className="index-post">
              <Link to={node.fields.slug}>
                <h2 className="index-post-title">{node.frontmatter.title}</h2>
                <span className="index-post-date">{node.frontmatter.date}</span>
              </Link>
              <h3 className="index-post-subtitle">
                {node.frontmatter.subtitle}
              </h3>
            </div>
          )
        })}
      </div>
    </div>
  )
}

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

export default IndexPage
