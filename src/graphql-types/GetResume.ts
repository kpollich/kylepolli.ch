/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetResume
// ====================================================

export interface GetResume_allContentfulResume_edges_node_content_childMarkdownRemark {
  html: string | null;
}

export interface GetResume_allContentfulResume_edges_node_content {
  /**
   * The child of this node of type markdownRemark
   */
  childMarkdownRemark: GetResume_allContentfulResume_edges_node_content_childMarkdownRemark | null;
}

export interface GetResume_allContentfulResume_edges_node {
  content: GetResume_allContentfulResume_edges_node_content | null;
}

export interface GetResume_allContentfulResume_edges {
  /**
   * The item at the end of the edge
   */
  node: GetResume_allContentfulResume_edges_node | null;
}

export interface GetResume_allContentfulResume {
  /**
   * A list of edges.
   */
  edges: (GetResume_allContentfulResume_edges | null)[] | null;
}

export interface GetResume {
  /**
   * Connection to all ContentfulResume nodes
   */
  allContentfulResume: GetResume_allContentfulResume | null;
}
