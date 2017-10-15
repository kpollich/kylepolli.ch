import React from 'react'

const Project = props => {
  return (
    <div>
      <div className="columns" style={{ marginBottom: '3em' }}>
        <div className="column is-8">
          <h2 className="title is-2">{props.title}</h2>
          <p dangerouslySetInnerHTML={{ __html: props.description }} />
          <br />
          <p>
            <a href={props.github}>View Source on GitHub</a>
          </p>
        </div>
        <div className="column is-4">
          <figure className="image">
            <img src={`${__PATH_PREFIX__}/images/${props.image}`} />
          </figure>
        </div>
      </div>
    </div>
  )
}

export default Project
