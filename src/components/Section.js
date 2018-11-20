import React from 'react';
import styled from 'react-emotion';

const Title = styled.h1({
  fontSize: '1.75em',
});

const Content = styled.div({
  color: '#222',
});

const Section = () => (
  <>
    <Title>{title}</Title>
    <Content>
      {paragraphs.map(content => (
        <p>{content}</p>
      ))}
    </Content>
  </>
);

// TODO: Take these in as props
const title = 'Vilka är vi?';
const paragraphs = [
  'Vi på Awexa hjälper dig att komma in på rätt spår. Vi har lång erfarenhet (64 år) av att se till så du gör rätt saker i rätt tid på rätt plats.',
  'Allt ifrån din jobbkarriär till hur du fungerar i alla sammanhang. Ditt liv ska fungera på alla plan och vi ser till att det gör så.',
  'Känner Du att ditt liv inte fungerar som det ska hör du bara av dig så bokar vi in en timmes första samtal.',
];

export default Section;
