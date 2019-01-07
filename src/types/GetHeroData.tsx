import { GatsbyContentfulFluidWithWebP } from './common/Images'

export interface GetHeroData {
  contentfulHero: {
    title: string
    subtitle: string
    image: GatsbyContentfulFluidWithWebP
  }
}
