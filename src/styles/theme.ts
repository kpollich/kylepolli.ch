// my-theme.ts
import { DefaultTheme, css } from 'styled-components'

export const theme: DefaultTheme = {
  colors: {
    black: '#333',
    white: '#FFF',
    blue: '#8CBCB9',
    lightgrey: '#E8E8E8',
    darkgrey: '#738290'
  }
}

export const gradientStyles = css`
  background: rgb(190, 207, 218);
  background: linear-gradient(
    321deg,
    rgba(190, 207, 218, 1) 0%,
    rgba(115, 130, 144, 1) 42%
  );
`
