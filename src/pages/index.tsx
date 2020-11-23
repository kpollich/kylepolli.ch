import { motion } from 'framer-motion';
import { GitHub, Linkedin, Twitter } from 'react-feather';

import { Layout } from '../layouts';
import { EnterTransition, childVariants } from '../components/EnterTransition';

const IndexPage: React.FunctionComponent = () => {
  return (
    <Layout>
      <EnterTransition>
        <div>
          <motion.section variants={childVariants} className="text-center">
            <h1 className="mb-2 text-5xl leading-none font-extrabold">
              Kyle Pollich
            </h1>
            <h2 className="mb-4 text-3xl leading-none font-semibold">
              Full Stack Developer
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
            className="max-w-screen-md mx-auto text-center text-xl"
          >
            <p>
              I'm Kyle Pollich. I'm a full stack developer from Lancaster, PA. I
              love working with web technologies, and I'm particularly
              passionate about JavaScript development.
            </p>

            <p className="mt-4">
              I'm currently a Software Engineer at{' '}
              <a
                href="https://www.ridwell.com"
                className="hover:text-cyan-600 underline"
              >
                Ridwell
              </a>
              , a Seattle-based startup that makes it easy to recycle more and
              waste less.
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
