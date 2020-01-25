import React from 'react'
import styled from 'styled-components'
import { graphql } from 'gatsby'

import { Layout } from '../components/Layout'

const Content = styled.div`
  ul {
    p {
      margin: 0;
    }
  }
`

interface Props {
  data: {
    markdownRemark: {
      html: string
    }
  }
}

const UsesPage: React.FunctionComponent<Props> = ({ data }) => {
  const { html } = data.markdownRemark

  return (
    <Layout>
      <section>
        <h1>Uses</h1>
        <p style={{ width: '75%' }}>
          These are some of the things I use to write code. I'm always trying
          out new apps and gadgets, so don't consider this list exhaustive or
          complete.
        </p>

        <Content dangerouslySetInnerHTML={{ __html: html }} />
      </section>
    </Layout>
  )
}

export const query = graphql`
  {
    markdownRemark(fileAbsolutePath: { regex: "/content/uses/" }) {
      html
    }
  }
`

export default UsesPage
