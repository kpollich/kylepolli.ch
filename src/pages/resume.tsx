import React from 'react'

import Layout from '../components/Layout'
import { graphql } from 'gatsby'

export interface ResumePageProps {
  data: GetResumeData
}

const ResumePage: React.FunctionComponent<ResumePageProps> = ({ data }) => {
  const html =
    data.allContentfulResume.edges[0].node.content.childMarkdownRemark.html

  return (
    <Layout>
      <section className="section outer">
        <div className="container">
          <div className="content" dangerouslySetInnerHTML={{ __html: html }} />
        </div>
      </section>
    </Layout>
  )
}

export interface GetResumeData {
  allContentfulResume: {
    edges: [
      {
        node: {
          content: {
            childMarkdownRemark: {
              html: string
            }
          }
        }
      }
    ]
  }
}

export const GetResumeQuery = graphql`
  query GetResume {
    allContentfulResume {
      edges {
        node {
          content {
            childMarkdownRemark {
              html
            }
          }
        }
      }
    }
  }
`

export default ResumePage
