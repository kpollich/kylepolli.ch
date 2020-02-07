import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { Link } from 'gatsby'
import { GitHub, Linkedin, Twitter } from 'react-feather'

import { Layout } from '../components/Layout'

const Intro = styled.section`
  text-align: center;

  h1 {
    margin-bottom: 0;
  }

  h2 {
    margin-top: 0;
  }
`

const About = styled.section`
  max-width: 720px;
  margin: 2rem auto;
  text-align: center;
`

const Icons = styled.div`
  display: flex;
  justify-content: space-around;
  max-width: 200px;
  margin: auto;
  border-bottom: 2px solid ${props => props.theme.colors.blue};
`

const IndexPage: React.FunctionComponent = () => {
  const wrapperVariants = {
    hidden: {
      opacity: 0,
      y: 40
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delayChildren: 0.1,
        staggerChildren: 0.15
      }
    }
  }

  const childVariants = {
    hidden: {
      opacity: 0,
      y: 40
    },
    visible: {
      opacity: 1,
      y: 0
    }
  }

  return (
    <Layout>
      <motion.div initial="hidden" animate="visible" variants={wrapperVariants}>
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
            work mostly with JavaScript, but I'm passionate about all facets of
            web development.
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
      </motion.div>
    </Layout>
  )
}

export default IndexPage
