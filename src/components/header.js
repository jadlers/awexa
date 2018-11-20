import React from 'react';
import styled from 'styled-components';

const SiteTitle = styled.h1`
  margin: 0;
  font-size: 2.25em;
  text-align: center;
`;

const Container = styled.div`
  margin-bottom: 1.5em;
  padding: 1.45em 1.1em;
`;

const Header = ({ siteTitle }) => (
  <Container>
    <SiteTitle>{siteTitle}</SiteTitle>
  </Container>
);

export default Header;
