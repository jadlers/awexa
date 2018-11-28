import React from 'react';
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

const Content = styled.div({
  color: '#222',
  '& :last-child': { marginBottom: 0 },

  [mq('min', sizes.tablet)]: {
    maxWidth: '55%',
  },

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
  margin: 0 auto;

  ${mq('min', sizes.tablet)} {
    padding: 0 3em;
  }
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
