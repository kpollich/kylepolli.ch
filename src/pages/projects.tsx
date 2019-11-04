import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'

import { Layout } from '../components/Layout'

const ProjectsList = styled.ul`
  list-style: none;
  padding: 0;

  li {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;

    margin-bottom: 6em;

    > div {
      flex: 1;

      img {
        width: 100%;
      }
    }

    @media only screen and (max-width: 768px) {
      flex-direction: column;
      flex-direction: column-reverse;
    }
  }
`

interface Props {
  data: {
    allMarkdownRemark: {
      edges: Array<{
        node: {
          frontmatter: {
            title: string
            demo?: string
            github: string
            image?: string
          }
          html: string
        }
      }>
    }
  }
}

const ProjectsPage: React.FunctionComponent<Props> = ({ data }) => {
  return (
    <Layout>
      <section>
        <h1>Projects</h1>
        <ProjectsList>
          {data.allMarkdownRemark.edges.map(({ node: project }) => (
            <li key={project.frontmatter.title}>
              <div>
                <h2>{project.frontmatter.title}</h2>

                <div dangerouslySetInnerHTML={{ __html: project.html }} />

                <div>
                  <a href={project.frontmatter.github}>GitHub Repo</a>
                  {project.frontmatter.demo && (
                    <>
                      {' '}
                      &mdash; <a href={project.frontmatter.demo}>Live Demo</a>
                    </>
                  )}
                </div>
              </div>

              <div>
                <img src={`/images/${project.frontmatter.image}`} />
              </div>
            </li>
          ))}
        </ProjectsList>
      </section>
    </Layout>
  )
}

export const query = graphql`
  query GetAllProjects {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/projects/" } }
      sort: { fields: frontmatter___datePublished, order: DESC }
    ) {
      edges {
        node {
          frontmatter {
            title
            demo
            github
            image
          }
          html
        }
      }
    }
  }
`

export default ProjectsPage
