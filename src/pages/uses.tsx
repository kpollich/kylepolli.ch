import matter from 'gray-matter';
import hydrate from 'next-mdx-remote/hydrate';
import renderToString from 'next-mdx-remote/render-to-string';

import { Layout } from '../layouts';
import { MetaTags } from '../components/MetaTags';
import { getUsesContent } from '../content';

interface Props {
  source: any;
  frontMatter: any;
}

const UsesPage: React.FunctionComponent<Props> = ({ source }) => {
  const mdxContent = hydrate(source, { components: {} });

  return (
    <Layout>
      <MetaTags
        title="Uses"
        description="These are some of the things I use to write code, organize my
        thoughts, and try to stay productive. I'm always trying out new apps
        and gadgets, so don't consider this list exhaustive or complete."
      />
      <section>
        <h1>Uses</h1>
        <p>
          These are some of the things I use to write code, organize my
          thoughts, and try to stay productive. I'm always trying out new apps
          and gadgets, so don't consider this list exhaustive or complete.
        </p>

        <article>{mdxContent}</article>
      </section>
    </Layout>
  );
};

export async function getStaticProps() {
  const usesContent = getUsesContent();

  const { content, data } = matter(usesContent);
  const mdxContent = await renderToString(content, {
    scope: data,
    mdxOptions: {
      remarkPlugins: [require('remark-slug')],
      rehypePlugins: [require('@mapbox/rehype-prism')],
    },
  });

  return { props: { source: mdxContent, frontMatter: data } };
}

export default UsesPage;
