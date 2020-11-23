import { compareDesc, format } from 'date-fns';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'react-feather';

import {
  childVariants,
  EnterTransition,
} from '../../components/EnterTransition';
import { MetaTags } from '../../components/MetaTags';
import { getAllPostData } from '../../content';
import { Layout } from '../../layouts';

interface Props {
  posts: Array<{
    slug: string;
    excerpt: string;
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
  }>;
}

const BlogPage: React.FunctionComponent<Props> = ({ posts }) => {
  return (
    <Layout>
      <MetaTags
        title="Blog"
        description="Where I blog about web technologies and software engineering culture."
      />

      <EnterTransition>
        <section className="flex flex-col items-center max-w-screen-lg m-auto">
          <motion.h1 variants={childVariants} className="text-4xl mb-4">
            Blog Posts
          </motion.h1>

          <ul className="list-none p-0">
            {posts
              .sort((first, second) =>
                compareDesc(
                  new Date(first.frontMatter.datePublished),
                  new Date(second.frontMatter.datePublished)
                )
              )
              .map((post) => (
                <motion.li
                  variants={childVariants}
                  key={post.slug}
                  className="mb-24 last:mb-0 text-lg"
                >
                  <Link href={`/blog/${post.slug}`}>
                    <a className="no-underline">
                      <Image
                        src={post.frontMatter.image ?? ''}
                        alt={post.frontMatter.imageAlt}
                        width={960}
                        height={540}
                      />
                    </a>
                  </Link>
                  <h3>
                    <Link href={`/blog/${post.slug}`}>
                      <a className="no-underline text-2xl">
                        {post.frontMatter.title}
                      </a>
                    </Link>
                  </h3>
                  <time className="italic text-base">
                    {format(
                      new Date(post.frontMatter.datePublished),
                      'MMMM do, yyyy'
                    )}
                  </time>
                  <p className="mt-8 mb-4">{post.excerpt}</p>
                  <div>
                    <Link href={`/blog/${post.slug}`}>
                      <a className="underline inline-flex items-center">
                        <span className="mr-1">Read</span>{' '}
                        <ArrowRight size={20} />
                      </a>
                    </Link>
                  </div>
                </motion.li>
              ))}
          </ul>
        </section>
      </EnterTransition>
    </Layout>
  );
};

export async function getStaticProps() {
  const postData = getAllPostData();

  return {
    props: {
      posts: postData,
    },
  };
}

export default BlogPage;
