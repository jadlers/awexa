import React from 'react';
import styled from 'styled-components';

const PageTitle = styled.h1`
  margin: 0;
  font-size: 2.25em;
  text-align: center;
`;

const Header = ({ siteTitle }) => (
  <div style={{ marginBottom: '1.45rem', padding: '1.45em 1.1em' }}>
    <PageTitle>{siteTitle}</PageTitle>
  </div>
);

export default Header;
