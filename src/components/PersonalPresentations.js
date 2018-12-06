import React from 'react';
import styled from 'react-emotion';
import { StaticQuery, graphql } from 'gatsby';

import { mq, sizes } from '../components/globalStyles';

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  color: #222;

  ${mq('min', sizes.tablet)} {
    flex-direction: row;
  }
`;

const Presentation = styled.div`
  font-size: 1.25em;
  line-height: 1.35;

  h1 {
    margin-top: 0;
    font-size: 1.75em;
  }

  ${mq('min', sizes.tablet)} {
    padding: 0 2em;
  }
`;

export default () => (
  <StaticQuery
    query={graphql`
      {
        allMarkdownRemark(
          filter: { fileAbsolutePath: { regex: "/home/employees/.*.md$/" } }
        ) {
          edges {
            node {
              frontmatter {
                title
              }
              html
            }
          }
        }
      }
    `}
    render={({ allMarkdownRemark: { edges } }) => (
      <Wrapper>
        {edges.map(({ node: { html, frontmatter: { title } } }) => (
          <Presentation key={title}>
            <h1>{title}</h1>
            <div dangerouslySetInnerHTML={{ __html: html }} />
          </Presentation>
        ))}
      </Wrapper>
    )}
  />
);
