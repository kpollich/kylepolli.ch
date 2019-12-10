import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import Img, { FluidObject } from 'gatsby-image'

import { Layout } from '../components/Layout'

const MarkdownContentWrapper = styled.article`
  img {
    width: 100%;
  }
`

const Banner = styled.div`
  margin-bottom: 2rem;

  .credit {
    color: ${props => props.theme.colors.darkgrey};
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
        imageAlt?: string
        imageCreditText?: string
        imageCreditLink?: string
      }
    }
    banner: {
      childImageSharp: {
        fluid: FluidObject
      }
    }
  }
}

const PostTemplate: React.FunctionComponent<Props> = ({ data }) => {
  return (
    <Layout>
      {data.banner && (
        <Banner>
          <Img
            fluid={data.banner.childImageSharp.fluid}
            alt={data.markdownRemark.frontmatter.imageAlt || ''}
          />
          {data.markdownRemark.frontmatter.imageCreditText && (
            <em className="credit">
              Photo by{' '}
              <a href={data.markdownRemark.frontmatter.imageCreditLink}>
                {data.markdownRemark.frontmatter.imageCreditText}
              </a>
            </em>
          )}
        </Banner>
      )}

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
  query($slug: String!, $image: String) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        subtitle
        datePublished
        imageCreditText
        imageCreditLink
        imageAlt
      }
    }
    banner: file(relativePath: { eq: $image }) {
      childImageSharp {
        fluid(maxWidth: 1024, traceSVG: { color: "#8CBCB9" }) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
  }
`

export default PostTemplate
