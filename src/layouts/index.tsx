import Head from 'next/head';

import ContentWrapper from '../components/ContentWrapper';
import { Header } from '../components/Header';

export const Layout: React.FunctionComponent<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <>
      <Head>
        <title>Kyle Pollich - Full Stack Developer</title>

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
