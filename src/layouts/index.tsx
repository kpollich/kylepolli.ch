import Head from 'next/head';
import colors from 'tailwindcss/colors';

import ContentWrapper from '../components/ContentWrapper';
import { Header } from '../components/Header';
import { useColorTheme } from '../context/ColorThemeContext';

export const Layout: React.FunctionComponent = ({ children }) => {
  const { colorTheme } = useColorTheme();

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
        <meta
          name="theme-color"
          content={colorTheme === 'light' ? colors.white : colors.gray[800]}
        />
      </Head>

      <div className="transition-colors">
        <Header />

        <ContentWrapper>{children}</ContentWrapper>
      </div>
    </>
  );
};
