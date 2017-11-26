import React from 'react'

const ResumePage = ({ data }) => {
  console.log(data)
  // GraphQL nesting can be a bit ridiculous...
  const html =
    data.allContentfulResume.edges[0].node.content.childMarkdownRemark.html

  return (
    <section className="section outer">
      <div className="container">
        <div className="content" dangerouslySetInnerHTML={{ __html: html }} />
      </div>
    </section>
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
