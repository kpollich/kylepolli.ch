import React from 'react'
import Link from 'gatsby-link'

import Hero from '../components/Hero'

const IndexPage = ({ data }) => {
  return (
    <div>
      <Hero />
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
              when I can. In my free time, I experiment with technologies like
              React.js, static site generators, and functional programming.
            </p>
            <p>
              When I'm not writing code, I'm an avid guitarist and drummer as
              well as a huge fan of esports. You can usually catch me on
              weekends watching League of Legends or Counter Strike tournaments,
              or playing some competitive strategy games myself. Or you might
              find me relaxing with my wife Alex and our Bengal cat Sterling.
            </p>
            <p>
              If you're interested in what I do, you can find an online version
              of my resume <a href="/resume">here</a>. You can also feel free to
              email me at{' '}
              <a href="mailto:kpollich1@gmail.com">kpollich1@gmail.com</a> or
              find me on{' '}
              <a href="https://twitter.com/kylepollich" target="_blank">
                Twitter
              </a>,
              <a href="https://github.com/kpollich" target="_blank">
                GitHub
              </a>, or{' '}
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
              <em>Developer (May 2017 - Present)</em>
            </h3>
            <p>
              As a developer at Shift Lab, I work closely with a wide variety of
              clients to provide support, make architecture recommendations, and
              create unique web experiences for their users.
            </p>
            <ul>
              <li>Full stack Ruby on Rails and JavaScript development</li>
              <li>Maintain and support existing codebases</li>
              <li>Create compelling e-commerce experiences</li>
              <li>Provide DevOps and architecture support and consulting</li>
              <li>
                Work closely with clients and collaborate extensively with
                remote developers
              </li>
            </ul>

            <h2 className="title">Clipper Magazine</h2>
            <h3 className="subtitle is-5">
              <em>Lead Backend Developer (March 2015 - May 2017)</em>
            </h3>
            <p>
              As a lead developer at Clipper, I worked to maintain our existing
              C# .NET e-commerce project and to lead new projects. I led
              development efforts on Node and Rails projects for third party
              integrations, internal platforms, and data driven backend
              applications.
            </p>
            <ul>
              <li>Maintain and iterate on a C#/Webforms codebase</li>
              <li>Implement and architect REST API’s in Rails and Node.js</li>
              <li>
                Implement a microservice-oriented Email Service Provider with
                Node.js, Docker, and AWS
              </li>
              <li>Work extensively with Microsoft SQL Server and MySQL</li>
              <li>
                Perform extensive code review, implement development standards,
                and manage Git repositories
              </li>
              <li>
                Participate in and drive architecture and solution engineering
                discussions
              </li>
            </ul>
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
    </div>
  )
}

export default IndexPage
