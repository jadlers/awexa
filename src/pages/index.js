import React from 'react';
import { Global, css } from '@emotion/core';

import Footer from '../components/Footer';
import Layout from '../components/layout';
import Introduction from '../components/Introduction';
import ImageDivider from '../components/ImageDivider';
import PersonalPresentations from '../components/PersonalPresentations';

const IndexPage = () => (
  <Layout>
    <Global
      styles={css`
        body {
          margin: 0;
          box-sizing: border-box;
          font-family: 'Titillium Web', sans-serif;
        }

        *,
        *:before,
        *:after {
          box-sizing: inherit;
        }
      `}
    />
    <Introduction />
    <ImageDivider number={0} />
    <PersonalPresentations />
    <ImageDivider number={1} />
    <Footer />
  </Layout>
);

export default IndexPage;
