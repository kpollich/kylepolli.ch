import React from 'react'

const PostListItem = props => {
  return (
    <div>
      <li>
        <a className="box" href={props.slug}>
          <span>{props.date}</span>
          <h2 className="title is-4">{props.title}</h2>
          <span>{props.subtitle}</span>
        </a>
      </li>
    </div>
  )
}

export default PostListItem
