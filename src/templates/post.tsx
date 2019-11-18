import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'

import { Layout } from '../components/Layout'

const MarkdownContentWrapper = styled.article`
  img {
    width: 100%;
  }
`

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
      <h3>{data.markdownRemark.frontmatter.subtitle}</h3>

      <time>{data.markdownRemark.frontmatter.datePublished}</time>

      <MarkdownContentWrapper
        dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}
      />
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
