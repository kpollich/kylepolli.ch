import React from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { Helmet } from 'react-helmet';
import { lighten } from 'polished';

import { theme } from '../styles/theme';
import { Header } from '../components/Header';
import { ContentWrapper } from '../components/ContentWrapper';
import { typescaleStyles } from '../styles/typescale';
import { useColorTheme } from '../context/ColorTheme';

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

export const Layout: React.FunctionComponent = ({ children }) => {
  const { colorTheme } = useColorTheme();

  return (
    <ThemeProvider theme={theme}>
      <>
        <Helmet>
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
          <meta
            name="theme-color"
            content={colorTheme === 'light' ? '#FFF' : '#333'}
          />
        </Helmet>
        <GlobalStyle />

        <div className="theme-transition-wrapper">
          <Header />

          <ContentWrapper>{children}</ContentWrapper>
        </div>
      </>
    </ThemeProvider>
  );
};