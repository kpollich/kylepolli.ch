export interface GetProjectsData {
  allContentfulProject: {
    edges: [
      {
        node: {
          title: string
          gitHubLink: string
          description: {
            childMarkdownRemark: {
              html: string
            }
          }
          image: {
            fixed: {
              height: number
              width: number
              src: string
            }
          }
        }
      }
    ]
  }
}
