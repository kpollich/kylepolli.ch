import React from 'react'
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import Head from 'react-helmet'

import '../styles/normalize.css'
import 'prism-theme-night-owl'
import { theme } from '../styles/theme'
import { Header } from './Header'
import { ContentWrapper } from './ContentWrapper'

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
      font-family: 'Lato', 'Helvetica', sans-serif;
      font-size: 1.125em;
    }

    code[class*=language-], pre[class*=language-] {
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

    p {
      line-height: 1.7;
    }
  `

  return (
    <ThemeProvider theme={theme}>
      <>
        <Head>
          <title>Kyle Pollich - Full Stack Developer</title>
          <link
            href="https://fonts.googleapis.com/css?family=Lato&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css?family=Inconsolata&display=swap"
            rel="stylesheet"
          />
          <meta
            name="description"
            content="Kyle Pollich - Full Stack Developer"
          />
        </Head>

        <GlobalStyle />

        <Header />

        <ContentWrapper>{children}</ContentWrapper>
      </>
    </ThemeProvider>
  )
}
