export interface GetHeroData {
  contentfulHero: {
    title: string
    subtitle: string
    image: {
      fluid: {
        srcSet: string
        aspectRatio: number
        src: string
        sizes: string
      }
    }
  }
}
