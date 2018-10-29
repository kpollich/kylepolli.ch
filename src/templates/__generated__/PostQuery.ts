/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: PostQuery
// ====================================================

export interface PostQuery_contentfulPost_content_childMarkdownRemark {
  html: string | null;
}

export interface PostQuery_contentfulPost_content {
  /**
   * The child of this node of type markdownRemark
   */
  childMarkdownRemark: PostQuery_contentfulPost_content_childMarkdownRemark | null;
}

export interface PostQuery_contentfulPost {
  title: string | null;
  subtitle: string | null;
  datePublished: any | null;
  content: PostQuery_contentfulPost_content | null;
}

export interface PostQuery {
  contentfulPost: PostQuery_contentfulPost | null;
}

export interface PostQueryVariables {
  slug: string;
}
