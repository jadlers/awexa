import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';

const NotFoundPage = () => (
  <Layout>
    <h1>Sidan existerar inte</h1>
    <Link to="/">Klicka här för att komma till förstasidan</Link>
  </Layout>
);

export default NotFoundPage;
