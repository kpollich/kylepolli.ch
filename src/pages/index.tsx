import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'gatsby';
import { GitHub, Linkedin, Twitter } from 'react-feather';

import { Layout } from '../components/Layout';
import { EnterTransition, childVariants } from '../components/EnterTransition';

const Intro = styled.section`
  text-align: center;

  h1 {
    margin-bottom: 0;
  }

  h2 {
    margin-top: 0;
  }
`;

const About = styled.section`
  max-width: 720px;
  margin: 2rem auto;
  text-align: center;
`;

const Icons = styled.div`
  display: flex;
  justify-content: space-around;
  max-width: 200px;
  margin: auto;
  border-bottom: 2px solid ${props => props.theme.colors.blue};
`;

const IndexPage: React.FunctionComponent = () => {
  return (
    <Layout>
      <EnterTransition>
        <Intro as={motion.div} variants={childVariants}>
          <h1>Kyle Pollich</h1>
          <h2>Full Stack Developer</h2>
        </Intro>

        <Icons as={motion.div} variants={childVariants}>
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
        </Icons>

        <About as={motion.div} variants={childVariants}>
          <p>
            I'm Kyle Pollich. I'm a full stack developer from Lancaster, PA. I
            love working with web technologies, and I'm particularly passionate
            about JavaScript development.
          </p>

          <p>
            I'm currently a Lead Developer at{' '}
            <a href="http://shiftlab.co">Shift Lab</a>, a development agency
            that solves complex challenges through creative technology.
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
        </About>
      </EnterTransition>
    </Layout>
  );
};

export default IndexPage;
