import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import styled from 'react-emotion';

import StickFigure from './StickFigure';
import { mq, sizes } from '../components/globalStyles';

const IntroductionWrapper = styled.section`
  display: flex;
  flex-direction: column-reverse;
  align-items: center;

  ${mq('min', sizes.tablet)} {
    flex-direction: row;
  }
`;

const Content = styled.div`
  color: #222;

  ${mq('min', sizes.tablet)}: {
    max-width: 55%;
  };

  h1: {
    margin-top: 0;
    font-size: 1.75em;
  }

  p {
    font-size: 1.25em;
    line-height: 1.35;
  }
`;

const Aside = styled.aside`
  margin: 0 auto;

  ${mq('min', sizes.tablet)} {
    padding: 0 3em;
  }
`;

export default ({ content }) => (
  <StaticQuery
    query={graphql`
      {
        markdownRemark(
          frontmatter: { page: { eq: "Home" }, title: { eq: "Introduction" } }
        ) {
          html
        }
      }
    `}
    render={data => {
      const {
        markdownRemark: { html: content },
      } = data;
      return (
        <IntroductionWrapper>
          <Content dangerouslySetInnerHTML={{ __html: content }} />
          <Aside>
            <StickFigure />
          </Aside>
        </IntroductionWrapper>
      );
    }}
  />
);
