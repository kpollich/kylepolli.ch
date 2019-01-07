export interface GatsbyContentfulFluidWithWebP {
  fluid: {
    srcSet: string
    aspectRatio: number
    src: string
    sizes: string
  }
}

export interface FixedImage {
  fixed: {
    height: number
    width: number
    src: string
  }
}
