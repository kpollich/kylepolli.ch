import { MDXRemote } from 'next-mdx-remote';

import { Layout } from '../layouts';
import { MetaTags } from '../components/MetaTags';
import { renderMdxForUses } from '../content';

interface Props {
  content: any;
  frontMatter?: any;
}

const UsesPage: React.FunctionComponent<Props> = ({ content }) => {
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
        <MDXRemote {...content} components={{}} />
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
