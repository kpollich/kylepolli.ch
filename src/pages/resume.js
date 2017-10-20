import React from 'react'

const ResumePage = ({ data }) => {
  const html = data.markdownRemark.html
  return (
    <section className="section outer">
      <div className="container">
        <div className="content" dangerouslySetInnerHTML={{ __html: html }} />
      </div>
    </section>
  )
}

export const query = graphql`
  query ResumeContent {
    markdownRemark(fileAbsolutePath: { regex: "/resume/" }) {
      html
    }
  }
`

export default ResumePage
