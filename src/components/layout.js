import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';
import styled from 'react-emotion';
import { mq, sizes } from './globalStyles';

import Header from './header';

const Main = styled.main`
  margin: 0 auto;
  padding: 0 1em;
  width: 100%;
  ${mq('min', sizes.desktop)} {
    max-width: ${sizes.desktop}px;
    padding-left: 0;
    padding-right: 0;
  }
`;

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet title={data.site.siteMetadata.title}>
          <html lang="se" />
          <script src="https://identity.netlify.com/v1/netlify-identity-widget.js" />
        </Helmet>
        <Main>
          <Header siteTitle={data.site.siteMetadata.title} />
          {children}
        </Main>
      </>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
