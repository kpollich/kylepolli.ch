import React from 'react'

import Layout from '../components/Layout'

const ResumePage = ({ data }) => {
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

export const query = graphql`
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
