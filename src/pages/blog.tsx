import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import PostListItem from '../components/PostListItem'
import { GetBlogPostsData } from '../types/GetBlogPostsData'

export interface BlogPageProps {
  data: GetBlogPostsData
}

const BlogPage: React.FunctionComponent<BlogPageProps> = ({ data }) => {
  return (
    <Layout>
      <section className="section outer">
        <div className="container">
          <h1 className="title is-1">Blog Posts</h1>
          <hr />
          <ul className="post-list">
            {data.allContentfulPost.edges.map(({ node }) => (
              <PostListItem key={node.title} {...node} />
            ))}
          </ul>
        </div>
      </section>
    </Layout>
  )
}

export const query = graphql`
  query GetBlogPosts {
    allContentfulPost(sort: { fields: [datePublished], order: DESC }) {
      edges {
        node {
          datePublished(formatString: "MMMM DD, YYYY")
          subtitle
          title
          slug
        }
      }
    }
  }
`

export default BlogPage
