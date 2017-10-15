import React from 'react'

import Project from '../components/Project'

const ProjectsPage = ({ data }) => {
  const { allProjectsJson } = data

  console.log(__PATH_PREFIX__)

  return (
    <section className="section outer">
      <div className="container">
        <h1 className="title is-1">My Projects</h1>
        <hr />
        {allProjectsJson.edges.map(({ node }) => <Project {...node} />)}
      </div>
    </section>
  )
}

export const query = graphql`
  query GetProjects {
    allProjectsJson {
      edges {
        node {
          title
          description
          github
          image
        }
      }
    }
  }
`

export default ProjectsPage
