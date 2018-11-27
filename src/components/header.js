import React from 'react';
import styled from 'react-emotion';

import { sizes, mq } from './globalStyles';

const SiteTitle = styled.h1({
  margin: 0,
  marginBottom: '1em',
  padding: '.5em 0 0',
  fontSize: '2.25em',
  color: '#444',
  fontWeight: 'normal',
  [mq('min', sizes.tablet)]: {
    textAlign: 'center',
    borderBottom: '1px solid #777',
  },
});

const Header = ({ siteTitle }) => <SiteTitle>{siteTitle}</SiteTitle>;

export default Header;
