import React from 'react';
import styled from 'styled-components';
import { graphql } from 'gatsby';

import { Layout } from '../components/Layout';
import { MetaTags } from '../components/MetaTags';

const Content = styled.div`
  p {
    margin: 0;
  }

  img {
    width: 100%;
  }
`;

interface Props {
  data: {
    markdownRemark: {
      html: string;
    };
  };
}

const UsesPage: React.FunctionComponent<Props> = ({ data }) => {
  const { html } = data.markdownRemark;

  return (
    <Layout>
      <MetaTags
        title="Uses"
        description="These are some of the things I use to write code, organize my
        thoughts, and try to stay productive. I'm always trying out new apps
        and gadgets, so don't consider this list exhaustive or complete."
      />
      <section>
        <h1>Uses</h1>
        <p>
          These are some of the things I use to write code, organize my
          thoughts, and try to stay productive. I'm always trying out new apps
          and gadgets, so don't consider this list exhaustive or complete.
        </p>

        <Content dangerouslySetInnerHTML={{ __html: html }} />
      </section>
    </Layout>
  );
};

export const query = graphql`
  {
    markdownRemark(fileAbsolutePath: { regex: "/content/uses/" }) {
      html
    }
  }
`;

export default UsesPage;
