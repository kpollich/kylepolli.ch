import { useMDXComponent } from "next-contentlayer/hooks";

interface MdxProps {
  code: string;
}

// Add custom MDX components here - maybe some day!
const components = {};

export function Mdx({ code }: MdxProps) {
  const Component = useMDXComponent(code);

  return (
    <article className="prose prose-lg prose-neutral dark:prose-invert">
      <Component components={{ ...components }} />
    </article>
  );
}
