import { motion } from 'framer-motion';
import { GitHub, Linkedin, Twitter } from 'react-feather';

import { Layout } from '../layouts';
import { EnterTransition, childVariants } from '../components/EnterTransition';
import { MetaTags } from '../components/MetaTags';

const IndexPage: React.FunctionComponent = () => {
  return (
    <Layout>
      <MetaTags
        title="Lancaster, PA Full Stack Developer"
        description="Senior full stack developer focused on React, TypeScript, and web technologies"
      />

      <EnterTransition>
        <div>
          <motion.section variants={childVariants} className="text-center">
            <h1 className="text-9xl text-white font-bold mx-auto max-w-6xl mb-2">
              <span className="text-transparent bg-gradient-to-r bg-clip-text from-cyan-600 to-purple-500">
                Kyle Pollich
              </span>
            </h1>
            <h2 className="mb-4 text-3xl leading-none font-semibold">
              Full-Stack Software Engineer
            </h2>
          </motion.section>

          <motion.div
            variants={childVariants}
            className="flex justify-around items-center w-36 mx-auto mb-8 pb-2 border-b-2 border-cyan-600"
          >
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
          </motion.div>

          <motion.section
            variants={childVariants}
            className="max-w-screen-md mx-auto text-2xl leading-normal flex-col space-y-8"
          >
            <p>
              I'm Kyle Pollich, a full-stack software engineer from Lancaster,
              PA. I love working with web technologies, and I'm particularly
              passionate about JavaScript development.
            </p>

            <p className="mt-4">
              I'm currently a Senior JavaScript Engineer at{' '}
              <a
                href="https://www.elastic.co/"
                className="hover:text-cyan-600 underline"
                target="_blank"
                rel="noopener"
              >
                Elastic
              </a>{' '}
              working on{' '}
              <a
                href="https://www.elastic.co/guide/en/fleet/current/fleet-overview.html"
                target="_blank"
                rel="noopener"
                className="underline hover:text-cyan-600"
              >
                Fleet
              </a>
              , a unified interface within{' '}
              <a
                href="https://www.elastic.co/kibana/"
                target="_blank"
                rel="noopener"
                className="underline hover:text-cyan-600"
              >
                Kibana
              </a>{' '}
              for centrally managing{' '}
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
              If you're interested in my professional work, head over to my{' '}
              <a
                href="https://www.linkedin.com/in/kyle-pollich/"
                target="_blank"
                rel="noopener"
                className="underline hover:text-cyan-600"
              >
                LinkedIn
              </a>{' '}
              or{' '}
              <a
                href="https://www.github.com/kpollich"
                target="_blank"
                rel="noopener"
                className="underline hover:text-cyan-600"
              >
                GitHub
              </a>{' '}
              profiles.
            </p>
          </motion.section>
        </div>
      </EnterTransition>
    </Layout>
  );
};

export default IndexPage;
