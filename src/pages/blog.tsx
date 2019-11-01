import React from 'react'
import styled from 'styled-components'
import { graphql, Link } from 'gatsby'
import { Layout } from '../components/Layout'

const BlogPostList = styled.ul`
  list-style: none;
  padding: none;
  margin: auto;
  width: 50%;

  li {
    margin-bottom: 4em;

    :last-child {
      margin-bottom: 0;
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
          frontmatter: {
            title: string
            datePublished: string
          }
        }
      }>
    }
  }
}

const BlogPage: React.FunctionComponent<Props> = ({ data }) => {
  return (
    <Layout>
      <h1>Blog Posts</h1>

      <BlogPostList>
        {data.allMarkdownRemark.edges.map(({ node: blogPost }) => (
          <li>
            <h3>
              <Link to={`/posts${blogPost.fields.slug}`}>
                {blogPost.frontmatter.title}
              </Link>
            </h3>
            <time>{blogPost.frontmatter.datePublished}</time>
          </li>
        ))}
      </BlogPostList>
    </Layout>
  )
}

export const query = graphql`
  query GetAllBlogPosts {
    allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/posts/" } }) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            datePublished
          }
        }
      }
    }
  }
`

export default BlogPage
