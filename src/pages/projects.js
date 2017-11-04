import React from 'react'

import Project from '../components/Project'

const ProjectsPage = ({ data }) => {
  const { allContentfulProject } = data

  return (
    <section className="section outer">
      <div className="container">
        <h1 className="title is-1">My Projects</h1>
        <hr />
        {allContentfulProject.edges.map(({ node }) => (
          <Project key={node.title} {...node} />
        ))}
      </div>
    </section>
  )
}

export const query = graphql`
  query GetProjects {
    allContentfulProject {
      edges {
        node {
          title
          gitHubLink
          description {
            childMarkdownRemark {
              id
              html
            }
          }
          image {
            responsiveResolution(width: 600) {
              height
              width
              src
            }
          }
        }
      }
    }
  }
`

export default ProjectsPage
