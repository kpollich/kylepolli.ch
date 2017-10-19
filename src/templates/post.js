import React, { Component } from 'react'

export default ({ data }) => {
  const post = data.markdownRemark
  return (
    <section className="section outer">
      <div className="container content">
        <h1 className="title is-2">{post.frontmatter.title}</h1>
        <h2 className="subtitle is-4">{post.frontmatter.subtitle}</h2>
        <p>
          <time>{post.frontmatter.date}</time>
        </p>
        <div
          className="content is-medium"
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
      </div>
    </section>
  )
}

export const query = graphql`
  query PostQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        subtitle
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`
