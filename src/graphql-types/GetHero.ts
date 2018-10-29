/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetHero
// ====================================================

export interface GetHero_contentfulHero_image_resolutions {
  width: number | null;
  src: string | null;
}

export interface GetHero_contentfulHero_image {
  resolutions: GetHero_contentfulHero_image_resolutions | null;
}

export interface GetHero_contentfulHero {
  title: string | null;
  subtitle: string | null;
  image: GetHero_contentfulHero_image | null;
}

export interface GetHero {
  contentfulHero: GetHero_contentfulHero | null;
}
