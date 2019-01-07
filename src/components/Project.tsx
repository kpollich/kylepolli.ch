import * as React from 'react'

export interface ProjectProps {
  title: string
  description: {
    childMarkdownRemark: {
      html: string
    }
  }
  gitHubLink: string
  image: {
    fixed: {
      src: string
    }
  }
}

const Project: React.FunctionComponent<ProjectProps> = props => {
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
