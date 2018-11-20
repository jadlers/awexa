import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';
import styled, { injectGlobal } from 'react-emotion';

import Header from './header';

injectGlobal`
html { margin: 0; box-sizing: border-box; }
*,*:before,*:after { box-sizing: inherit; }
`;

const Main = styled.div({
  margin: '0 auto',
  padding: '0 1em 1.5em',
  width: '100%',
});

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
