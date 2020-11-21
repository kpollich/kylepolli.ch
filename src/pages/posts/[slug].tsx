import { format } from 'date-fns';
import { motion } from 'framer-motion';
import { NextPage } from 'next';
import Image from 'next/image';
import styled from 'styled-components';
import hydrate from 'next-mdx-remote/hydrate';

import {
  childVariants,
  EnterTransition,
} from '../../components/EnterTransition';
import { MetaTags } from '../../components/MetaTags';
import { Layout } from '../../layouts';
import {
  getAllPostSlugs,
  renderMdxForFile,
  renderMdxForPostSlug,
} from '../../utils';

const MarkdownContentWrapper = styled.article`
  img {
    width: 100%;
  }

  ul {
    word-break: break-all;
  }
`;

const Banner = styled.div`
  margin-bottom: 2rem;

  .credit {
    color: ${(props) => props.theme.colors.darkgrey};
  }
`;

const Title = styled.h1`
  margin-bottom: 0.75rem;
`;

const Subtitle = styled.h3`
  margin-top: 0;
`;

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
            <Banner as={motion.div} variants={childVariants}>
              <Image
                src={frontMatter.image}
                alt={frontMatter.imageAlt}
                height={576}
                width={1024}
              />
              {frontMatter.imageCreditText && (
                <em className="credit">
                  Photo by{' '}
                  <a href={frontMatter.imageCreditLink}>
                    {frontMatter.imageCreditText}
                  </a>
                </em>
              )}
            </Banner>
          )}

          <motion.div variants={childVariants}>
            <Title>{frontMatter.title}</Title>
            <Subtitle>{frontMatter.subtitle}</Subtitle>

            <time>
              {format(new Date(frontMatter.datePublished), 'MMMM do, yyyy')}
            </time>

            <hr />
          </motion.div>
        </section>

        <motion.div variants={childVariants}>
          <MarkdownContentWrapper>{mdxContent}</MarkdownContentWrapper>
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
