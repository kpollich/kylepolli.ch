import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

import { Layout } from '../components/Layout'

const Intro = styled.section``

const IndexPage: React.FunctionComponent = () => {
  return (
    <Layout>
      <Intro>
        <h1>Kyle Pollich</h1>
        <h2>Full Stack Developer</h2>

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
          <a href="https://www.linkedin.com/in/kyle-pollich/">LinkedIn</a> or{' '}
          <a href="https://www.github.com/kpollich">GitHub</a> profiles. You can
          also take a look at some of my featured{' '}
          <Link to="projects">projects</Link>.
        </p>
      </Intro>
    </Layout>
  )
}

export default IndexPage
