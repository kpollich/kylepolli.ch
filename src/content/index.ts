import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';
import { serialize } from 'next-mdx-remote/serialize';
import rehypeSlug from 'rehype-slug';

export const CONTENT_PATH = 'src/content';
export const POSTS_PATH = path.join(CONTENT_PATH, 'posts');
export const USES_PATH = path.join(CONTENT_PATH, 'uses');

export function getAllPostSlugs() {
  const postPaths = fs.readdirSync(path.resolve(POSTS_PATH));

  return postPaths.map((postPath) => postPath.replace('.mdx', ''));
}

/**
 * Get all posts + frontmatter - for blog listing page
 */
export function getAllPostData() {
  const postPaths = fs.readdirSync(path.resolve(POSTS_PATH));

  const postData = postPaths.map((postPath) => {
    const fileContents = fs
      .readFileSync(path.resolve(POSTS_PATH, postPath))
      .toString();

    const { data: frontMatter, excerpt } = matter(fileContents, {
      //@ts-ignore - gray-matter typings are all screwy here
      excerpt: (file: any) => {
        const CHAR_LIMIT = 300;

        file.excerpt = file.content.substring(0, CHAR_LIMIT) + '...';
      },
    });

    const slug = postPath.replace('.mdx', '');

    return {
      slug,
      excerpt,
      frontMatter,
    };
  });

  return postData;
}

/**
 * Process frontmatter + mdx content for the given post by slug
 */
export function renderMdxForPostSlug(slug: string) {
  const postPath = path.resolve(POSTS_PATH, `${slug}.mdx`);

  return renderMdxForFile(postPath);
}

/**
 * Render MDX content for /uses
 */
export function renderMdxForUses() {
  return renderMdxForFile(path.resolve(USES_PATH, 'uses.mdx'));
}

/**
 * Private helper for rendering MDX content from a given `filePath`
 */
async function renderMdxForFile(filePath: string) {
  const fileContents = fs.readFileSync(filePath).toString();
  const { content, data } = matter(fileContents);

  const mdxContent = await serialize(content, {
    scope: data,
    mdxOptions: {
      rehypePlugins: [require('@mapbox/rehype-prism'), rehypeSlug],
    },
  });

  return { mdxContent, frontMatter: data };
}
