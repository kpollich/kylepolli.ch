import { useRouter } from 'next/router';
import Head from 'next/head';

const SITE_URL = 'https://www.kylepollich.com';

const defaults = {
  title: 'Kyle Pollich',
  image: '',
  description: 'Lancaster, PA Full Stack Developer',
  twitterUsername: '@kylepollich',
};

interface Props {
  title: string;
  description: string;
  image?: string;
  article?: boolean;
}

export const MetaTags: React.FC<Props> = ({
  title,
  description,
  image,
  article = false,
}) => {
  const { pathname } = useRouter();

  const seo = {
    title: title || defaults.title,
    description: description || defaults.description,
    image: `${SITE_URL}${image || defaults.image}`,
    url: `${SITE_URL}${pathname}`,
  };

  return (
    <Head>
      <title>Kyle Pollich | {title}</title>
      <meta name="description" content={seo.description} />

      <meta name="image" content={seo.image} />

      {seo.url && <meta property="og:url" content={seo.url} />}

      {(article ? true : null) && <meta property="og:type" content="article" />}

      {seo.title && <meta property="og:title" content={seo.title} />}

      {seo.description && (
        <meta property="og:description" content={seo.description} />
      )}

      {seo.image && <meta property="og:image" content={seo.image} />}

      <meta name="twitter:card" content="summary_large_image" />

      {defaults.twitterUsername && (
        <meta name="twitter:creator" content={defaults.twitterUsername} />
      )}

      {seo.title && <meta name="twitter:title" content={seo.title} />}

      {seo.description && (
        <meta name="twitter:description" content={seo.description} />
      )}

      {seo.image && <meta name="twitter:image" content={seo.image} />}
    </Head>
  );
};
