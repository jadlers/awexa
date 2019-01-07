import React, { Component } from 'react';
import { graphql, StaticQuery } from 'gatsby';
import styled from 'react-emotion';

import Humaaan from './Humaaan';
import { mq, sizes } from '../components/globalStyles';

const IntroductionWrapper = styled.section`
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  justify-content: space-evenly;

  ${mq('min', sizes.tablet)} {
    flex-direction: row;
  }
`;

const Content = styled.div`
  color: #222;

  ${mq('min', sizes.tablet)} {
    max-width: 50%;
  }

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
  ${mq('min', sizes.tablet)} {
    align-self: center;
  }
`;

export default class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      animate: false,
    };
  }

  componentDidMount() {
    // TODO: Make on scroll/after 3s?
    setTimeout(() => {
      this.setState({ animate: true });
    }, 800);
  }

  render() {
    return (
      <StaticQuery
        query={graphql`
          {
            allMarkdownRemark(
              filter: { fileAbsolutePath: { regex: "/home/introduction.md$/" } }
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
        render={({
          allMarkdownRemark: {
            edges: [
              {
                node: {
                  html,
                  frontmatter: { title },
                },
              },
            ],
          },
        }) => (
          <IntroductionWrapper>
            <Content>
              <h1>{title}</h1>
              <div dangerouslySetInnerHTML={{ __html: html }} />
            </Content>
            <Aside>
              <Humaaan animate={this.state.animate} />
            </Aside>
          </IntroductionWrapper>
        )}
      />
    );
  }
}
