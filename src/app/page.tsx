import { GitHub, Linkedin, Twitter } from "react-feather";

import { Spacer } from "@/components/spacer";

export default function Home() {
  return (
    <div>
      <h1 className="text-6xl font-bold">Kyle Pollich</h1>

      <Spacer size="xs" />

      <h2 className="text-xl">Full stack software engineer</h2>

      <Spacer size="small" />

      <div className="flex space-x-4">
        <a
          title="GitHub"
          href="https://github.com/kpollich"
          target="_blank"
          rel="noopener"
          className="hover:text-cyan-600"
        >
          <GitHub />
        </a>

        <a
          title="LinkedIn"
          href="https://www.linkedin.com/in/kyle-pollich/"
          target="_blank"
          rel="noopener"
          className="hover:text-cyan-600"
        >
          <Linkedin />
        </a>

        <a
          title="Twitter"
          href="https://twitter.com/kylepollich"
          target="_blank"
          rel="noopener"
          className="hover:text-cyan-600"
        >
          <Twitter />
        </a>
      </div>

      <Spacer size="xs" />

      <hr className="max-w-lg border-t-2 border-cyan-600" />

      <Spacer size="medium" />

      <section className="max-w-2xl">
        <p>{`I'm Kyle Pollich, a full-stack software engineer from Lancaster, PA. `}</p>

        <p className="mt-4">
          {`I'm currently a Tech Lead at `}
          <a
            href="https://www.elastic.co/"
            className="hover:text-cyan-600 underline"
            target="_blank"
            rel="noopener"
          >
            Elastic
          </a>{" "}
          working on{" "}
          <a
            href="https://www.elastic.co/guide/en/fleet/current/fleet-overview.html"
            target="_blank"
            rel="noopener"
            className="underline hover:text-cyan-600"
          >
            Fleet
          </a>
          , a unified interface within{" "}
          <a
            href="https://www.elastic.co/kibana/"
            target="_blank"
            rel="noopener"
            className="underline hover:text-cyan-600"
          >
            Kibana
          </a>{" "}
          for centrally managing{" "}
          <a
            href="https://www.elastic.co/guide/en/fleet/current/elastic-agent-installation.html"
            target="_blank"
            rel="noopener"
            className="underline hover:text-cyan-600"
          >
            Elastic Agent
          </a>
          .
        </p>

        <p className="my-4">
          {`If you're interested in my professional work, head over to my `}
          <a
            href="https://www.linkedin.com/in/kyle-pollich/"
            target="_blank"
            rel="noopener"
            className="underline hover:text-cyan-600"
          >
            LinkedIn
          </a>{" "}
          or{" "}
          <a
            href="https://www.github.com/kpollich"
            target="_blank"
            rel="noopener"
            className="underline hover:text-cyan-600"
          >
            GitHub
          </a>{" "}
          profiles.
        </p>
      </section>
    </div>
  );
}
