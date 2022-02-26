import { format } from 'date-fns';
import { motion } from 'framer-motion';
import { NextPage } from 'next';
import Image from 'next/image';
import { MDXRemote } from 'next-mdx-remote';

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
  return (
    <Layout>
      <MetaTags
        title={frontMatter.title}
        description={frontMatter.subtitle}
        image={frontMatter.image}
        article
      />
      <EnterTransition>
        <section className="max-w-screen-lg m-auto dark:prose-invert">
          {frontMatter.image && (
            <motion.div variants={childVariants} className="mb-4">
              <h1 className="mb-8 text-5xl leading-none font-extrabold text-center">
                {frontMatter.title}
              </h1>

              <Image
                className="rounded"
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
            <h2 className="mb-4 text-2xl leading-none font-semibold">
              {frontMatter.subtitle}
            </h2>

            <time className="italic">
              {format(new Date(frontMatter.datePublished), 'MMMM do, yyyy')}
            </time>

            <hr className="border-cyan-600 mt-4 mb-10" />
          </motion.div>
        </section>

        <motion.div variants={childVariants}>
          <article className="prose prose-lg dark:prose-invert max-w-screen-lg m-auto">
            <MDXRemote {...content} components={{}} />
          </article>
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
