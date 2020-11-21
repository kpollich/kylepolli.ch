import Head from 'next/head';
import {
  InjectPerfectDarkMode,
  usePerfectDarkMode,
} from 'next-plugin-perfect-dark-mode';

import { Header } from '../components/Header';
import { ContentWrapper } from '../components/ContentWrapper';

export const Layout: React.FunctionComponent = ({ children }) => {
  const { mode } = usePerfectDarkMode();

  return (
    <>
      <InjectPerfectDarkMode />

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
        <meta name="theme-color" content={mode === 'light' ? '#FFF' : '#333'} />
      </Head>

      <div className="theme-transition-wrapper">
        <Header />

        <ContentWrapper>{children}</ContentWrapper>
      </div>
    </>
  );
};
