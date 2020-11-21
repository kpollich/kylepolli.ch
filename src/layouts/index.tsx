import React from 'react';
import { Helmet } from 'react-helmet';

import { Header } from '../components/Header';
import { ContentWrapper } from '../components/ContentWrapper';
import { useColorTheme } from '../context/ColorTheme';

export const Layout: React.FunctionComponent = ({ children }) => {
  const { colorTheme } = useColorTheme();

  return (
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

      <div className="theme-transition-wrapper">
        <Header />

        <ContentWrapper>{children}</ContentWrapper>
      </div>
    </>
  );
};
