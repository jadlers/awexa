import React from 'react';
import styled from 'react-emotion';

import { mq, sizes } from './globalStyles';

const SectionWrapper = styled.section(props => ({
  [mq('min', sizes.desktop)]: {
    marginLeft: props.position === 'right' && '20%',
    marginRight: props.position === 'left' && '20%',
    padding: '.5em',
  },
  marginBottom: '3em',
}));

const Title = styled.h1({
  marginTop: 0,
  fontSize: '1.75em',
});

const Content = styled.div({
  color: '#222',
  fontSize: '1.25em',
  lineHeight: '1.35',
  '& :last-child': {
    marginBottom: 0,
  },
});

const Section = props => (
  <SectionWrapper {...props}>
    <Title>{props.title}</Title>
    <Content>{props.content}</Content>
  </SectionWrapper>
);

export default Section;
