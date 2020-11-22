import { motion } from 'framer-motion';
import { GitHub, Linkedin, Twitter } from 'react-feather';

import { Layout } from '../layouts';
import { EnterTransition, childVariants } from '../components/EnterTransition';

const IndexPage: React.FunctionComponent = () => {
  return (
    <Layout>
      <EnterTransition>
        <motion.section variants={childVariants} className="text-center">
          <h1 className="mb-0">Kyle Pollich</h1>
          <h2 className="mt-0">Full Stack Developer</h2>
        </motion.section>

        <motion.div
          variants={childVariants}
          className="flex content-around max-w-lg m-auto border-b-2 border-blue-400"
        >
          <a
            title="GitHub"
            href="https://github.com/kpollich"
            target="_blank"
            rel="noopener"
          >
            <GitHub />
          </a>

          <a
            title="LinkedIn"
            href="https://www.linkedin.com/in/kyle-pollich/"
            target="_blank"
            rel="noopener"
          >
            <Linkedin />
          </a>

          <a
            title="Twitter"
            href="https://twitter.com/kylepollich"
            target="_blank"
            rel="noopener"
          >
            <Twitter />
          </a>
        </motion.div>

        <motion.section
          variants={childVariants}
          className="max-w-xl mx-4 my-auto"
        >
          <p>
            I'm Kyle Pollich. I'm a full stack developer from Lancaster, PA. I
            love working with web technologies, and I'm particularly passionate
            about JavaScript development.
          </p>

          <p>
            I'm currently a Software Engineer at{' '}
            <a href="https://www.ridwell.com">Ridwell</a>, a Seattle-based
            startup that makes it easy to recycle more and waste less.
          </p>

          <p>
            If you're interested in my professional work, head over to my{' '}
            <a
              href="https://www.linkedin.com/in/kyle-pollich/"
              target="_blank"
              rel="noopener"
            >
              LinkedIn
            </a>{' '}
            or{' '}
            <a
              href="https://www.github.com/kpollich"
              target="_blank"
              rel="noopener"
            >
              GitHub
            </a>{' '}
            profiles.
          </p>
        </motion.section>
      </EnterTransition>
    </Layout>
  );
};

export default IndexPage;
