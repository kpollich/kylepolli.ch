export interface GetBlogPostsData {
  allContentfulPost: {
    edges: [
      {
        node: {
          datePublished: string
          slug: string
          subtitle: string
          title: string
        }
      }
    ]
  }
}
