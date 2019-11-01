import React from 'react'
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components'

import '../styles/normalize.css'
import 'prism-theme-night-owl'
import { theme } from '../styles/theme'
import { Header } from './Header'

const ContentWrapper = styled.section`
  max-width: 1024px;
  margin: auto;
  padding: 2em;
`

export const Layout: React.FunctionComponent = ({ children }) => {
  const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Inconsolata&display=swap');

    body {
      background-color: ${props => props.theme.colors.white};
      color: ${props => props.theme.colors.black};
      font-family: 'Inconsolata', monospace; 
    }

    &:not(pre)>code {
      background-color: rgb(244, 243, 250);
      color: ${props => props.theme.colors.black};
    }

    a {
      color: inherit;

      &:hover {
        color: ${props => props.theme.colors.blue};
      }
    }
  `

  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle />

        <ContentWrapper>
          <Header />
          {children}
        </ContentWrapper>
      </>
    </ThemeProvider>
  )
}
