import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import Img, { FluidObject } from 'gatsby-image'
import { format } from 'date-fns'

import { Layout } from '../components/Layout'

const MarkdownContentWrapper = styled.article`
  img {
    width: 100%;
  }

  ul {
    word-break: break-all;
  }
`

const Banner = styled.div`
  margin-bottom: 2rem;

  .credit {
    color: ${props => props.theme.colors.darkgrey};
  }
`

const Title = styled.h1`
  margin-bottom: 0.75rem;
`

const Subtitle = styled.h3`
  margin-top: 0;
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
        image?: {
          childImageSharp: {
            fluid: FluidObject
          }
        }
      }
    }
  }
}

const PostTemplate: React.FunctionComponent<Props> = ({ data }) => {
  return (
    <Layout>
      <section>
        {data.markdownRemark.frontmatter.image && (
          <Banner>
            <Img
              fluid={
                data.markdownRemark.frontmatter.image.childImageSharp.fluid
              }
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

        <Title>{data.markdownRemark.frontmatter.title}</Title>
        <Subtitle>{data.markdownRemark.frontmatter.subtitle}</Subtitle>

        <time>
          {format(
            new Date(data.markdownRemark.frontmatter.datePublished),
            'MMMM do, yyyy'
          )}
        </time>
      </section>

      <hr />

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
        imageCreditText
        imageCreditLink
        imageAlt
        image {
          childImageSharp {
            fluid(maxWidth: 1024, traceSVG: { color: "#8CBCB9" }) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
    }
  }
`

export default PostTemplate
