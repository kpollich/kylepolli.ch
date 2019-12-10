import React from 'react'
import styled from 'styled-components'
import { graphql, Link } from 'gatsby'
import Img, { FluidObject } from 'gatsby-image'

import { Layout } from '../components/Layout'

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const BlogPostList = styled.ul`
  list-style: none;
  padding: 0;

  li {
    margin-bottom: 6em;

    :last-child {
      margin-bottom: 0;
    }

    a {
      text-decoration: none;
    }
  }
`

interface Props {
  data: {
    allMarkdownRemark: {
      edges: Array<{
        node: {
          fields: {
            slug: string
          }
          excerpt: string
          frontmatter: {
            title: string
            datePublished: string
            image: {
              childImageSharp: {
                fluid: FluidObject
              }
            }
            imageAlt: string
          }
        }
      }>
    }
  }
}

const BlogPage: React.FunctionComponent<Props> = ({ data }) => {
  return (
    <Layout>
      <Wrapper>
        <h1>Blog Posts</h1>

        <BlogPostList>
          {data.allMarkdownRemark.edges.map(({ node: blogPost }) => (
            <li key={blogPost.fields.slug}>
              <Link to={`/posts${blogPost.fields.slug}`}>
                <Img
                  fluid={blogPost.frontmatter.image.childImageSharp.fluid}
                  alt={blogPost.frontmatter.imageAlt}
                />
              </Link>
              <h3>
                <Link to={`/posts${blogPost.fields.slug}`}>
                  {blogPost.frontmatter.title}
                </Link>
              </h3>
              <time>{blogPost.frontmatter.datePublished}</time>
              <p>{blogPost.excerpt}</p>
            </li>
          ))}
        </BlogPostList>
      </Wrapper>
    </Layout>
  )
}

export const query = graphql`
  query GetAllBlogPosts {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/posts/" } }
      sort: { fields: frontmatter___datePublished, order: DESC }
    ) {
      edges {
        node {
          fields {
            slug
          }
          excerpt(pruneLength: 240)
          frontmatter {
            title
            datePublished
            image {
              childImageSharp {
                fluid(maxWidth: 1024, traceSVG: { color: "#8CBCB9" }) {
                  ...GatsbyImageSharpFluid_withWebp_tracedSVG
                }
              }
            }
            imageAlt
          }
        }
      }
    }
  }
`

export default BlogPage
