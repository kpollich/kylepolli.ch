// import App from "next/app";
import type { AppProps /*, AppContext */ } from 'next/app';
import { lighten } from 'polished';
import 'prism-theme-night-owl';
import React from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';

import { ColorThemeProvider } from '../context/ColorTheme';
import '../styles/normalize.css';
import { theme } from '../styles/theme';
import { typescaleStyles } from '../styles/typescale';

const GlobalStyle = createGlobalStyle`
  ${typescaleStyles}

  html {
    box-sizing: border-box;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  body {
    background-color: ${(props) => props.theme.colors.white};
    color: ${(props) => props.theme.colors.black};
    font-family: 'Lato', 'Helvetica', sans-serif;
    font-size: 1.125em;

    .theme-transition-wrapper {
      min-height: 100vh;
      transition: background-color 500ms, color 500ms;
    }

    &.light {
      .theme-transition-wrapper {
        background-color: ${(props) => props.theme.colors.white};
      }

      a {
        color: ${(props) => props.theme.colors.black};
      }
    }

    pre, code, img {
      border-radius: 5px;
    }

    * > :not(pre) > code {
      padding: 3px;
    }

    &.dark {
      background-color: ${(props) => props.theme.colors.black};
      color: ${(props) => props.theme.colors.white};

      * > :not(pre) > code {
        background-color: ${(props) =>
          lighten(0.125, props.theme.colors.black)};
        color: ${(props) => props.theme.colors.white};
      }

      .theme.theme-transition-wrapper {
        background-color: ${(props) => props.theme.colors.black};
      }

      a {
        color: ${(props) => props.theme.colors.white};
      }

      .nav {
        a.active {
          background-color: ${(props) =>
            lighten(0.125, props.theme.colors.black)}};
        }

      .credit {
        color: ${(props) => props.theme.colors.lightgrey} !important;
      }
    }

    a {
      transition: color 500ms;

      &:hover {
        color: ${(props) => props.theme.colors.blue};
      }
    }
  }

  code[class*=language-], pre[class*=language-] {
    font-family: 'Inconsolata', monospace; 
  }

  :not(pre) > code {
    background-color: ${(props) => props.theme.colors.lightgrey};
    color: ${(props) => props.theme.colors.black};
  }


  hr {
    background-color: ${(props) => props.theme.colors.blue};
    border: 0;
    height: 1px;
  }

  time {
    font-style: italic;
  }

  blockquote {
    font-style: italic;
    padding-left: 1rem;
    position: relative;

    &:before {
      background-color: ${(props) => props.theme.colors.blue};
      border-radius: 5px;
      content: "";
      height: 100%;
      left: 0;
      position: absolute;
      width: 0.5rem;
    }
  } 


  /*
    Add some space below code blocks when they're immediately
    followed by a blog header
  */ 
  .gatsby-highlight + h1 {
    margin-top: 1.8rem;
  }
`;

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <ColorThemeProvider>
        <Component {...pageProps} />
      </ColorThemeProvider>
    </ThemeProvider>
  );
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext: AppContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);

//   return { ...appProps }
// }

export default MyApp;
