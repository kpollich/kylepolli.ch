/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: ListPosts
// ====================================================

export interface ListPosts_allContentfulPost_edges_node {
  datePublished: any | null;
  subtitle: string | null;
  title: string | null;
  slug: string | null;
}

export interface ListPosts_allContentfulPost_edges {
  /**
   * The item at the end of the edge
   */
  node: ListPosts_allContentfulPost_edges_node | null;
}

export interface ListPosts_allContentfulPost {
  /**
   * A list of edges.
   */
  edges: (ListPosts_allContentfulPost_edges | null)[] | null;
}

export interface ListPosts {
  /**
   * Connection to all ContentfulPost nodes
   */
  allContentfulPost: ListPosts_allContentfulPost | null;
}
