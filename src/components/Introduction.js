import React from 'react';
import styled from 'react-emotion';

import StickFigure from './StickFigure';

const Content = styled.div({
  color: '#222',
  maxWidth: '55%',
  '& :last-child': { marginBottom: 0 },

  h1: {
    marginTop: 0,
    fontSize: '1.75em',
  },

  p: {
    fontSize: '1.25em',
    lineHeight: '1.35',
  },
});

const Aside = styled.aside`
  padding: 0 3em;
  margin: 0 auto;
`;

const IntroductionWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const Introduction = ({ content }) => (
  <IntroductionWrapper>
    <Content>{content}</Content>
    <Aside>
      <StickFigure />
    </Aside>
  </IntroductionWrapper>
);

export default Introduction;
