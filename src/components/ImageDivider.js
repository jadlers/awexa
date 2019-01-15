import React from 'react';
import Img from 'gatsby-image';
import { graphql, StaticQuery } from 'gatsby';
import styled from '@emotion/styled';

import { mq, sizes } from '../components/globalStyles';

const Image = styled(Img)`
  max-height: 200px;
  margin: 3em -1em;

  ${mq('min', sizes.tablet)} {
    width: 100vw;
    margin-left: -50vw;
    left: 49%;
  }
`;

const credit = [
  'Photo by David Iskander on Unsplash.com',
  'Photo by Vero Photoart on Unsplash.com',
];

export default ({ number }) => (
  <StaticQuery
    query={graphql`
      fragment dividerImage on File {
        childImageSharp {
          fluid(maxWidth: 2440, quality: 80, cropFocus: CENTER) {
            ...GatsbyImageSharpFluid
          }
        }
      }

      query {
        image0: file(
          relativePath: { eq: "david-iskander-599118-unsplash.jpg" }
        ) {
          ...dividerImage
        }

        image1: file(
          relativePath: { eq: "vero-photoart-140937-unsplash.jpg" }
        ) {
          ...dividerImage
        }
      }
    `}
    render={data => (
      <Image
        title={credit[number] || ''}
        fluid={data[`image${number}`].childImageSharp.fluid}
      />
    )}
  />
);
