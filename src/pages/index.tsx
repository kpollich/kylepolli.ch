import React from 'react'
import Link from 'gatsby-link'

import Hero from '../components/Hero'
import Layout from '../components/Layout'
import { graphql } from 'gatsby'
import { GetHeroData } from '../types/GetHeroData'

export interface IndexPageProps {
  data: GetHeroData
}

const IndexPage: React.FunctionComponent<IndexPageProps> = ({ data }) => {
  return (
    <Layout>
      <Hero data={data} />
      <div className="section">
        <div className="container">
          <div className="content is-medium">
            <h1 className="has-text-centered">About Me</h1>
            <p>
              Hello! My name is Kyle Pollich, and I am a fullstack developer
              located in Lancaster, Pennsylvania. I graduated from Millersville
              University in 2015 with a degree in Computer Science. I work
              primarily with data driven web applications, e-commerce platforms,
              and RESTful API's.
            </p>
            <p>
              I'm also a hobby programmer,and I love dabbling in new technology
              when I can. In my free time, I experiment with new programming
              languages and technologies like .NET Core and GraphQL.
            </p>
            <p>
              When I'm not writing code, I'm an avid guitarist and drummer as
              well as a huge fan of esports. You can usually catch me on
              weekends watching League of Legends or Counter Strike tournaments,
              or playing some competitive strategy games or tactical shooters
              myself. Or you might find me relaxing with my wife Alex and our
              Bengal cat Sterling.
            </p>
            <p>
              If you're interested in what I do, you can find an online version
              of my resume <Link to="/resume">here</Link>. You can also feel
              free to email me at{' '}
              <a href="mailto:kpollich1@gmail.com">kpollich1@gmail.com</a> or
              find me on{' '}
              <a href="https://twitter.com/kylepollich" target="_blank">
                Twitter
              </a>
              ,{' '}
              <a href="https://github.com/kpollich" target="_blank">
                GitHub
              </a>
              , or{' '}
              <a
                href="https://www.linkedin.com/in/kyle-pollich-b881a2102/"
                target="_blank"
              >
                LinkedIn
              </a>
            </p>
          </div>
        </div>
      </div>
      <div className="section gray-section">
        <div className="container">
          <div className="content is-medium">
            <h1 className="has-text-centered">Work</h1>
            <h2 className="title">Shift Lab</h2>
            <h3 className="subtitle is-5">
              <em>Developer, Lead Developer (May 2017 - Present)</em>
            </h3>
            <p>
              As a developer at <a href="http://shiftlabny.com">Shift Lab</a>, I
              work closely with a wide variety of clients to provide support,
              make architecture recommendations, and create unique web
              experiences for their users.
            </p>
            <p>
              I work to maintain inherited JavaScript and Rails codebases as
              well as to develop greenfield applications and prototypes with
              technologies like React, Gatsby, Node.js, and GraphQL. I also
              create proposals and system engineering documentation for new
              projects.
            </p>
            <p>
              At Shift, I work with a semi-distributed team between Lancaster,
              PA and NYC. Effective remote collaboration and communication are
              built into our culture.
            </p>
            <h2 className="title">Clipper Magazine</h2>
            <h3 className="subtitle is-5">
              <em>
                Backend Web Applications Developer, Lead Backend Developer
                (March 2015 - May 2017)
              </em>
            </h3>
            <p>
              As a lead developer at Clipper, I worked to maintain a legacy C#
              .NET e-commerce project and to lead new projects with other
              toolchains. I led development efforts on Node and Rails projects
              for third party integrations, internal platforms, and data-driven
              backend applications.
            </p>
            <p>
              We leveraged Node to create highly performant, Dockerized Hapi
              services for a multitude of purposes. I led development efforts on
              third party integrations with strict SLA requirements, and on a
              highly scalable internal Email Service Provider for high volume
              marketing email sends.
            </p>
            <p>
              I also worked as a part of a team to create a JSON API compliant
              Rails 5 API serving an Ember frontend. This application acted as a
              client to our internal Email Service Provider, and allowed users
              to configure and interface with personalized marketing emails for
              their customers.
            </p>
          </div>
        </div>
      </div>
      <div className="section">
        <div className="container">
          <h1 className="title is-2 has-text-centered">Skills</h1>
          <div className="columns is-mobile is-multiline">
            <div className="column is-6 has-text-right">
              <h2 className="title is-4 skill-title">
                Infrastructure and Operations
              </h2>
            </div>
            <div className="column is-6">
              <ul>
                <li>Docker</li>
                <li>AWS</li>
                <li>Linux server administration</li>
                <li>Git, GitHub</li>
                <li>Software Architrecture and Design</li>
                <li>Continuous Integration + Continuous Deployment</li>
              </ul>
            </div>
            <div className="column is-6 has-text-right">
              <h2 className="title is-4 skill-title">Backend Development</h2>
            </div>
            <div className="column is-6">
              <ul>
                <li>Node.js</li>
                <li>Ruby on Rails</li>
                <li>C# .NET</li>
                <li>REST APIs</li>
                <li>Microservices</li>
                <li>MySQL, Postgres</li>
                <li>Redis</li>
              </ul>
            </div>
            <div className="column is-6 has-text-right">
              <h2 className="title is-4 skill-title">Frontend Development</h2>
            </div>
            <div className="column is-6">
              <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>jQuery</li>
                <li>React.js</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query GetHero {
    contentfulHero(title: { eq: "Kyle Pollich" }) {
      title
      subtitle
      image {
        fluid(maxWidth: 2560, quality: 80) {
          ...GatsbyContentfulFluid_withWebp
        }
      }
    }
  }
`

export default IndexPage
