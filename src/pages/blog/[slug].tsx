import { format } from 'date-fns';
import { motion } from 'framer-motion';
import { NextPage } from 'next';
import Image from 'next/image';
import hydrate from 'next-mdx-remote/hydrate';

import {
  childVariants,
  EnterTransition,
} from '../../components/EnterTransition';
import { MetaTags } from '../../components/MetaTags';
import { Layout } from '../../layouts';
import { getAllPostSlugs, renderMdxForPostSlug } from '../../content';

interface Props {
  content: any;
  frontMatter: {
    title: string;
    subtitle: string;
    datePublished: string;
    imageAlt?: string;
    imageCreditText?: string;
    imageCreditLink?: string;
    image?: string;
    seoImage?: string;
  };
}

const PostPage: NextPage<Props> = ({ content, frontMatter }) => {
  const mdxContent = hydrate(content, { components: {} });

  return (
    <Layout>
      <MetaTags
        title={frontMatter.title}
        description={frontMatter.subtitle}
        image={frontMatter.image}
        article
      />
      <EnterTransition>
        <section>
          {frontMatter.image && (
            <motion.div variants={childVariants} className="mb-4">
              <Image
                src={frontMatter.image}
                alt={frontMatter.imageAlt}
                height={576}
                width={1024}
              />
              {frontMatter.imageCreditText && (
                <em className="text-gray-500">
                  Photo by{' '}
                  <a
                    className="text-gray-500 no-underline"
                    href={frontMatter.imageCreditLink}
                  >
                    {frontMatter.imageCreditText}
                  </a>
                </em>
              )}
            </motion.div>
          )}

          <motion.div variants={childVariants}>
            <h1 className="mb-3">{frontMatter.title}</h1>
            <h2 className="mt-0">{frontMatter.subtitle}</h2>

            <time>
              {format(new Date(frontMatter.datePublished), 'MMMM do, yyyy')}
            </time>

            <hr />
          </motion.div>
        </section>

        <motion.div variants={childVariants}>
          <article>{mdxContent}</article>
        </motion.div>
      </EnterTransition>
    </Layout>
  );
};

export const getStaticPaths = async () => {
  const postSlugs = getAllPostSlugs();

  return {
    paths: postSlugs.map((postSlug) => ({ params: { slug: postSlug } })),
    fallback: false,
  };
};

export const getStaticProps = async ({
  params: { slug },
}: {
  params: { slug: string };
}) => {
  const { mdxContent, frontMatter } = await renderMdxForPostSlug(slug);

  return {
    props: {
      content: mdxContent,
      frontMatter,
    },
  };
};

export default PostPage;
