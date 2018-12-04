import React from 'react';

import Footer from '../components/Footer';
import Layout from '../components/layout';
import Introduction from '../components/Introduction';
import ImageDivider from '../components/ImageDivider';
import PersonalPresentations from '../components/PersonalPresentations';

const IndexPage = () => (
  <Layout>
    <Introduction />
    <ImageDivider number={0} />
    <PersonalPresentations />
    <ImageDivider number={1} />
    <Footer />
  </Layout>
);

export default IndexPage;
