// import App from "next/app";
import type { AppProps /*, AppContext */ } from 'next/app';
import { lighten } from 'polished';
import 'prism-theme-night-owl';
import { createGlobalStyle, ThemeProvider } from 'styled-components';

import '../styles/normalize.css';
import { theme } from '../styles/theme';
import { typescaleStyles } from '../styles/typescale';

const GlobalStyle = createGlobalStyle`
  ${typescaleStyles}

  @media (prefers-color-scheme: light) {
    :root {
      --color: ${(props) => props.theme.colors.black};
      --background: ${(props) => props.theme.colors.white};
      --inline-code-background: ${(props) => props.theme.colors.lightgrey};
    }
  }

  @media (prefers-color-scheme: dark) {
    :root {
      --color: ${(props) => props.theme.colors.white};
      --background: ${(props) => props.theme.colors.black};
      --inline-code-background: ${(props) =>
        lighten(0.125, props.theme.colors.black)}
    }
  }

  .pdm-light {
    --color: ${(props) => props.theme.colors.black};
    --background: ${(props) => props.theme.colors.white};
    --inline-code-background: ${(props) => props.theme.colors.lightgrey};
  }

  .pdm-dark {
    --color: ${(props) => props.theme.colors.white};
    --background: ${(props) => props.theme.colors.black};
    --inline-code-background: ${(props) =>
      lighten(0.125, props.theme.colors.black)}
  }

  html {
    box-sizing: border-box;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  body {
    background-color: var(--background);
    color: var(--color);
    font-family: 'Lato', 'Helvetica', sans-serif;
    font-size: 1.125em;

    .theme-transition-wrapper {
      min-height: 100vh;
      transition: background-color 500ms, color 500ms;
    }

    pre, code, img {
      border-radius: 5px;
    }

    * > :not(pre) > code {
      padding: 3px;
    }


    * > :not(pre) > code {
      background-color: var(--inline-code-background);
      color: var(--color);
    }

    .theme.theme-transition-wrapper {
      background-color: var(--background);
    }

    a {
      color: var(--color);
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
      <Component {...pageProps} />
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
