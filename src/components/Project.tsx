import * as React from 'react'

import { GetProjects_allContentfulProject_edges_node as ProjectProps } from '../graphql-types/GetProjects'

const Project: React.SFC<ProjectProps> = props => {
  if (!props) {
    return null
  }

  if (!props.description || !props.description.childMarkdownRemark) {
    return null
  }

  return (
    <div>
      <div className="columns" style={{ marginBottom: '3em' }}>
        <div className="column is-8">
          <h2 className="title is-2">{props.title}</h2>
          <p
            dangerouslySetInnerHTML={{
              __html: props.description.childMarkdownRemark.html
            }}
          />
          <br />
          <p>
            <a href={props.gitHubLink}>View Source on GitHub</a>
          </p>
        </div>
        <div className="column is-4">
          <figure className="image">
            <img src={props.image.fixed.src} />
          </figure>
        </div>
      </div>
    </div>
  )
}

export default Project
