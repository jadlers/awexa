import React from 'react';
import styled from 'react-emotion';

import { mq, sizes } from './globalStyles';

const SectionWrapper = styled.section(props => ({
  [mq('min', sizes.desktop)]: {
    marginLeft: props.right && '20%',
    marginRight: props.left && '20%',
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
    <Title>{title}</Title>
    <Content>{content}</Content>
  </SectionWrapper>
);

// TODO: This should be sourced from the Netlify CMS
const title = 'Vilka är vi?';
const content = (
  <>
    <p>
      Vi på Awexa hjälper dig att komma in på rätt spår. Vi har lång erfarenhet
      (64 år) av att se till så du gör rätt saker i rätt tid på rätt plats.
    </p>
    <p>
      Allt ifrån din jobbkarriär till hur du fungerar i alla sammanhang. Ditt
      liv ska fungera på alla plan och vi ser till att det gör så.
    </p>
    <p>
      Känner Du att ditt liv inte fungerar som det ska hör du bara av dig så
      bokar vi in en timmes första samtal.
    </p>
  </>
);

export default Section;
