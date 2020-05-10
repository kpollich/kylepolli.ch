import React from 'react';
import styled from 'styled-components';
import { graphql, Link } from 'gatsby';
import Img, { FluidObject } from 'gatsby-image';
import { compareDesc, format } from 'date-fns';

import { Layout } from '../components/Layout';
import { EnterTransition, childVariants } from '../components/EnterTransition';
import { ArrowRight } from 'react-feather';
import { motion } from 'framer-motion';
import { MetaTags } from '../components/MetaTags';

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 800px;
  margin: auto;
`;

const BlogPostList = styled.ul`
  list-style: none;
  padding: 0;

  li {
    margin-bottom: 6em;

    :last-child {
      margin-bottom: 0;
    }

    a {
      text-decoration: none;
    }
  }
`;

interface Props {
  data: {
    allMarkdownRemark: {
      edges: Array<{
        node: {
          fields: {
            slug: string;
          };
          excerpt: string;
          frontmatter: {
            title: string;
            datePublished: string;
            image: {
              childImageSharp: {
                fluid: FluidObject;
              };
            };
            imageAlt: string;
          };
        };
      }>;
    };
  };
}

const BlogPage: React.FunctionComponent<Props> = ({ data }) => {
  return (
    <Layout>
      <MetaTags
        title="Blog"
        description="Where I blog about web technologies and software engineering culture."
      />
      <EnterTransition>
        <Wrapper>
          <motion.h1 variants={childVariants}>Blog Posts</motion.h1>

          <BlogPostList>
            {data.allMarkdownRemark.edges
              .sort((first, second) =>
                compareDesc(
                  new Date(first.node.frontmatter.datePublished),
                  new Date(second.node.frontmatter.datePublished)
                )
              )
              .map(({ node: blogPost }) => (
                <motion.li variants={childVariants} key={blogPost.fields.slug}>
                  <Link to={`/posts${blogPost.fields.slug}`}>
                    <Img
                      fluid={blogPost.frontmatter.image.childImageSharp.fluid}
                      alt={blogPost.frontmatter.imageAlt}
                    />
                  </Link>
                  <h3>
                    <Link to={`/posts${blogPost.fields.slug}`}>
                      {blogPost.frontmatter.title}
                    </Link>
                  </h3>
                  <time>
                    {format(
                      new Date(blogPost.frontmatter.datePublished),
                      'MMMM do, yyyy'
                    )}
                  </time>
                  <p>{blogPost.excerpt}</p>
                  <div>
                    <Link
                      to={`/posts${blogPost.fields.slug}`}
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        textDecoration: 'underline',
                      }}
                    >
                      <span style={{ marginRight: '0.5rem' }}>Read</span>{' '}
                      <ArrowRight size={20} />
                    </Link>
                  </div>
                </motion.li>
              ))}
          </BlogPostList>
        </Wrapper>
      </EnterTransition>
    </Layout>
  );
};

export const query = graphql`
  query GetAllBlogPosts {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/posts/" } }
      sort: { fields: frontmatter___datePublished, order: DESC }
    ) {
      edges {
        node {
          fields {
            slug
          }
          excerpt(pruneLength: 300)
          frontmatter {
            title
            datePublished
            image {
              childImageSharp {
                fluid(maxWidth: 1024, traceSVG: { color: "#8CBCB9" }) {
                  ...GatsbyImageSharpFluid_withWebp_tracedSVG
                }
              }
            }
            imageAlt
          }
        }
      }
    }
  }
`;

export default BlogPage;
