import React from 'react'

import Layout from '../components/Layout'
import Project from '../components/Project'
import { graphql } from 'gatsby'
import { GetProjectsData } from '../types/GetProjectsData'

export interface ProjectsPageProps {
  data: GetProjectsData
}

const ProjectsPage: React.FunctionComponent<ProjectsPageProps> = ({ data }) => {
  const { allContentfulProject } = data

  return (
    <Layout>
      <section className="section outer">
        <div className="container">
          <h1 className="title is-1">My Projects</h1>
          <hr />
          {allContentfulProject.edges.map(({ node }) => (
            <Project key={node.title} {...node} />
          ))}
        </div>
      </section>
    </Layout>
  )
}

export const GetProjectsQuery = graphql`
  query GetProjects {
    allContentfulProject {
      edges {
        node {
          title
          gitHubLink
          description {
            childMarkdownRemark {
              html
            }
          }
          image {
            fixed(width: 600) {
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
