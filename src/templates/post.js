import React, { Component } from 'react'

export default ({ data }) => {
  const post = data.markdownRemark
  return (
    <section className="section outer">
      <div className="container content">
        <h1>{post.frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
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
      }
    }
  }
`
