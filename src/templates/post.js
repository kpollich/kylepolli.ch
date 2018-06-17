import React, { Component } from 'react'

import Layout from '../components/Layout'

export default ({ data }) => {
  const post = data.contentfulPost
  return (
    <Layout>
      <section className="section outer">
        <div className="container content">
          <h1 className="title is-2">{post.title}</h1>
          <h2 className="subtitle is-4">{post.subtitle}</h2>
          <p>
            <time>{post.datePublished}</time>
          </p>
          <div
            className="content is-medium"
            dangerouslySetInnerHTML={{
              __html: post.content.childMarkdownRemark.html
            }}
          />
        </div>
      </section>
    </Layout>
  )
}

export const query = graphql`
  query PostQuery($slug: String!) {
    contentfulPost(slug: { eq: $slug }) {
      title
      subtitle
      datePublished(formatString: "MMMM DD, YYYY")
      content {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`
