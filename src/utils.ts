import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';
import renderToString from 'next-mdx-remote/render-to-string';

export const CONTENT_PATH = 'src/content';
export const POSTS_PATH = path.join(CONTENT_PATH, 'posts');
export const USES_PATH = path.join(CONTENT_PATH, 'uses');

export function getAllPostSlugs() {
  const postPaths = fs.readdirSync(path.resolve(POSTS_PATH));

  return postPaths.map((postPath) =>
    postPath.replace(POSTS_PATH, '').replace('.mdx', '')
  );
}

export function renderMdxForPostSlug(slug: string) {
  const postPath = path.resolve(POSTS_PATH, `${slug}.mdx`);

  return renderMdxForFile(postPath);
}

export async function renderMdxForFile(filePath: string) {
  const fileContents = fs.readFileSync(filePath).toString();
  const { content, data } = matter(fileContents);

  const mdxContent = await renderToString(content, {
    scope: data,
    mdxOptions: {
      remarkPlugins: [require('remark-prism'), require('remark-slug')],
    },
  });

  return { mdxContent, frontMatter: data };
}

export function getUsesContent() {
  return fs.readFileSync(path.resolve(USES_PATH, 'uses.mdx')).toString();
}
