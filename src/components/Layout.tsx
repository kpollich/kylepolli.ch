import React from 'react'
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components'
import Head from 'react-helmet'

import '../styles/normalize.css'
import 'prism-theme-night-owl'
import { theme } from '../styles/theme'
import { Header } from './Header'

const ContentWrapper = styled.section`
  max-width: 1024px;
  margin: auto;
  padding: 2rem;
`

export const Layout: React.FunctionComponent = ({ children }) => {
  const GlobalStyle = createGlobalStyle`
    html {
      box-sizing: border-box;
    }

    *, *:before, *:after {
      box-sizing: inherit;
    }

    body {
      background-color: ${props => props.theme.colors.white};
      color: ${props => props.theme.colors.black};
      font-family: 'Inconsolata', monospace; 
    }

    &:not(pre)>code {
      background-color: ${props => props.theme.colors.lightgrey};
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
        <Head>
          <link
            href="https://fonts.googleapis.com/css?family=Inconsolata&display=swap"
            rel="stylesheet"
          />
        </Head>

        <GlobalStyle />

        <ContentWrapper>
          <Header />
          {children}
        </ContentWrapper>
      </>
    </ThemeProvider>
  )
}
