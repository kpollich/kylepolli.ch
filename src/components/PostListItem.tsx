import * as React from 'react'
import { BlogPostNode } from '../types/GetBlogPostsData'

const PostListItem: React.FunctionComponent<BlogPostNode> = props => {
  return (
    <div>
      <li>
        <a className="box" href={`/blog/${props.slug}`}>
          <span>{props.datePublished}</span>
          <h2 className="title is-4">{props.title}</h2>
          <span>{props.subtitle}</span>
        </a>
      </li>
    </div>
  )
}

export default PostListItem
