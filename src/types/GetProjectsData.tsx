import { Edge } from './common/Edge'
import { FixedImage } from './common/Images'
import { MarkdownContent } from './common/MarkdownContent'

export interface ProjectNode {
  title: string
  gitHubLink: string
  description: MarkdownContent
  image: FixedImage
}

export interface GetProjectsData {
  allContentfulProject: {
    edges: Edge<ProjectNode>[]
  }
}
