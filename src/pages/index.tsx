import React from 'react'
import styled from 'styled-components'
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
  width: 70%;
  margin: 2rem auto;
  text-align: center;
`

const Icons = styled.div`
  display: flex;
  justify-content: space-around;
  width: 25%;
  margin: auto;
  border-bottom: 1px solid ${props => props.theme.colors.lightgrey};
`

const IndexPage: React.FunctionComponent = () => {
  return (
    <Layout>
      <Intro>
        <h1>Kyle Pollich</h1>
        <h2>Full Stack Developer</h2>

        <Icons>
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
      </Intro>

      <About>
        <p>
          I'm Kyle Pollich. I'm a full stack developer from Lancaster, PA. I
          work mostly with JavaScript, but I'm passionate about all facets of
          web development.
        </p>

        <p>
          I'm currently a Lead Developer at{' '}
          <a href="http://shiftlab.co">Shift Lab</a>, a development agency that
          solves complex challenges through creative technology.
        </p>

        <p>
          If you're interested in my professional work, head over to my{' '}
          <a
            href="https://www.linkedin.com/in/kyle-pollich/"
            target="_blank"
            rel="noopener"
          >
            LinkedIn
          </a>
          or
          <a
            href="https://www.github.com/kpollich"
            target="_blank"
            rel="noopener"
          >
            GitHub
          </a>{' '}
          profiles. You can also take a look at some of my featured{' '}
          <Link to="projects">projects</Link>.
        </p>
      </About>
    </Layout>
  )
}

export default IndexPage
