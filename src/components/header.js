import React from 'react';
import styled from 'react-emotion';

const SiteTitle = styled.h1({
  margin: 0,
  fontSize: '2.25em',
  textAlign: 'center',
});

const Container = styled.div({
  marginBottom: '1.5em',
  padding: '1.45em 1.1em',
});

const Header = ({ siteTitle }) => (
  <Container>
    <SiteTitle>{siteTitle}</SiteTitle>
  </Container>
);

export default Header;
