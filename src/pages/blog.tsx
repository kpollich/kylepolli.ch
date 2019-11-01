import React from 'react'
import styled from 'styled-components'
import { graphql, Link } from 'gatsby'
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
      <Wrapper>
        <h1>Blog Posts</h1>

        <BlogPostList>
          {data.allMarkdownRemark.edges.map(({ node: blogPost }) => (
            <li key={blogPost.fields.slug}>
              <h3>
                <Link to={`/posts${blogPost.fields.slug}`}>
                  {blogPost.frontmatter.title}
                </Link>
              </h3>
              <time>{blogPost.frontmatter.datePublished}</time>
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
