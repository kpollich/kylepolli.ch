import Head from 'next/head';

import ContentWrapper from '../components/ContentWrapper';
import { Header } from '../components/Header';

export const Layout: React.FunctionComponent = ({ children }) => {
  return (
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

      <Header />

      <ContentWrapper>{children}</ContentWrapper>
    </>
  );
};
