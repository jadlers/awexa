import React from 'react';
import styled from 'react-emotion';

const SiteTitle = styled.h1`
  margin: 0;
  margin-bottom: 1em;
  padding: 0.5em 0 0.2em;
  font-size: 2.25em;
  color: #444;
  font-weight: normal;
  border-bottom: 1px solid #777;
  text-align: center;
`;

const Header = ({ siteTitle }) => <SiteTitle>{siteTitle}</SiteTitle>;

export default Header;
