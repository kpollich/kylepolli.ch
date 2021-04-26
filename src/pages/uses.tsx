import matter from 'gray-matter';
import hydrate from 'next-mdx-remote/hydrate';
import renderToString from 'next-mdx-remote/render-to-string';

import { Layout } from '../layouts';
import { MetaTags } from '../components/MetaTags';
import { renderMdxForPostSlug, renderMdxForUses } from '../content';

interface Props {
  content: any;
  frontMatter?: any;
}

const UsesPage: React.FunctionComponent<Props> = ({ content }) => {
  const mdxContent = hydrate(content, { components: {} });

  return (
    <Layout>
      <MetaTags
        title="Uses"
        description="These are some of the things I use to write code, organize my
        thoughts, and try to stay productive. I'm always trying out new apps
        and gadgets, so don't consider this list exhaustive or complete."
      />

      <article className="prose prose-lg dark:prose-light max-w-screen-lg m-auto">
        <h1>Uses</h1>
        <p>
          These are some of the things I use to write code, organize my
          thoughts, and try to stay productive. I'm always trying out new apps
          and gadgets, so don't consider this list exhaustive or complete.
        </p>
        {mdxContent}
      </article>
    </Layout>
  );
};

export const getStaticProps = async () => {
  const { mdxContent, frontMatter } = await renderMdxForUses();

  return {
    props: {
      content: mdxContent,
      frontMatter,
    },
  };
};

export default UsesPage;
