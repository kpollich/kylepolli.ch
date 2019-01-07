import { Edge } from './common/Edge'

export interface BlogPostNode {
  datePublished: string
  slug: string
  subtitle: string
  title: string
}

export interface GetBlogPostsData {
  allContentfulPost: {
    edges: Edge<BlogPostNode>[]
  }
}
