import { allPosts, Post } from "contentlayer/generated";
import { compareDesc, intlFormat } from "date-fns";
import Link from "next/link";

import { Spacer } from "@/components";

export default function Blog() {
  const posts = allPosts.sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)));

  return (
    <div>
      <h1 className="text-6xl font-bold">Blog posts</h1>

      <Spacer size="medium" />

      <ul>
        {posts.map((post: Post) => (
          <li key={post._id}>
            <Link href={post.url} className="hover:text-cyan-600 text-2xl">
              <div>
                <h3>{post.title}</h3>
                <p className="text-sm">{post.subtitle}</p>
              </div>
            </Link>

            <Spacer size="small" />
          </li>
        ))}
      </ul>
    </div>
  );
}
