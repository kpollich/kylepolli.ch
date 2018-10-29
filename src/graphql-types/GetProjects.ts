/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetProjects
// ====================================================

export interface GetProjects_allContentfulProject_edges_node_description_childMarkdownRemark {
  /**
   * The id of this node.
   */
  id: string;
  html: string | null;
}

export interface GetProjects_allContentfulProject_edges_node_description {
  /**
   * The child of this node of type markdownRemark
   */
  childMarkdownRemark: GetProjects_allContentfulProject_edges_node_description_childMarkdownRemark | null;
}

export interface GetProjects_allContentfulProject_edges_node_image_fixed {
  height: number | null;
  width: number | null;
  src: string | null;
}

export interface GetProjects_allContentfulProject_edges_node_image {
  fixed: GetProjects_allContentfulProject_edges_node_image_fixed | null;
}

export interface GetProjects_allContentfulProject_edges_node {
  title: string | null;
  gitHubLink: string | null;
  description: GetProjects_allContentfulProject_edges_node_description | null;
  image: GetProjects_allContentfulProject_edges_node_image | null;
}

export interface GetProjects_allContentfulProject_edges {
  /**
   * The item at the end of the edge
   */
  node: GetProjects_allContentfulProject_edges_node | null;
}

export interface GetProjects_allContentfulProject {
  /**
   * A list of edges.
   */
  edges: (GetProjects_allContentfulProject_edges | null)[] | null;
}

export interface GetProjects {
  /**
   * Connection to all ContentfulProject nodes
   */
  allContentfulProject: GetProjects_allContentfulProject | null;
}
