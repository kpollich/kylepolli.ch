import React from 'react'
import { graphql } from 'gatsby'
import { Layout } from '../components/Layout'

interface Props {
  data: {
    markdownRemark: {
      html: string
      frontmatter: {
        title: string
        subtitle: string
        datePublished: string
      }
    }
  }
}

const PostTemplate: React.FunctionComponent<Props> = ({ data }) => {
  return (
    <Layout>
      <h1>{data.markdownRemark.frontmatter.title}</h1>
      <h2>{data.markdownRemark.frontmatter.subtitle}</h2>

      <time>{data.markdownRemark.frontmatter.datePublished}</time>

      <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        subtitle
        datePublished
      }
    }
  }
`

export default PostTemplate
