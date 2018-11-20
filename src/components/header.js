import React from 'react';
import styled from 'react-emotion';

import { sizes, mq } from './globalStyles';

const SiteTitle = styled.h1({
  margin: '.5em 0 1em',
  fontSize: '2.25em',
  [mq('min', sizes.tablet)]: {
    textAlign: 'center',
  },
});

const Header = ({ siteTitle }) => <SiteTitle>{siteTitle}</SiteTitle>;

export default Header;
