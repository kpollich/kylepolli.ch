import { format, parseISO } from "date-fns";
import { allPosts } from "contentlayer/generated";

import { Mdx, Spacer } from "@/components";

export const generateStaticParams = async () =>
  allPosts.map((post) => ({ slug: post._raw.flattenedPath }));

export const generateMetadata = ({ params }: { params: { slug: string } }) => {
  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug);
  if (!post) {
    throw new Error(`Post not found for slug: ${params.slug}`);
  }

  return { title: `Kyle Pollich | ${post.title}`, description: post.subtitle };
};

const PostLayout = ({ params }: { params: { slug: string } }) => {
  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug);
  if (!post) throw new Error(`Post not found for slug: ${params.slug}`);

  return (
    <article className="py-8">
      <div>
        <h1 className="text-6xl font-bold max-w-4xl">{post.title}</h1>
        <Spacer size="xs" />
        <h2 className="text-xl">{post.subtitle}</h2>
        <time dateTime={post.date} className="mb-1 text-s text-gray-400">
          {format(parseISO(post.date), "LLLL d, yyyy")}
        </time>

        <Spacer size="medium" />
      </div>

      <Mdx code={post.body.code} />
    </article>
  );
};

export default PostLayout;
