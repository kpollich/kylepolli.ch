import React from 'react'

const PostListItem = props => {
  return (
    <div>
      <li>
        <a className="box" href={props.fields.slug}>
          <span>{props.frontmatter.date}</span>
          <h2 className="title is-4">{props.frontmatter.title}</h2>
          <span>{props.frontmatter.subtitle}</span>
        </a>
      </li>
    </div>
  )
}

export default PostListItem
