import React from 'react';
import Img from 'gatsby-image';
import { graphql, StaticQuery } from 'gatsby';
import styled from 'react-emotion';

const Image = styled(Img)`
  max-height: 200px;
  margin: 3em 0;
  width: 100vw;
  margin-left: -50vw;
  left: 49%;
`;

const credit = ['Photo by David Iskander on Unsplash.com'];

export default ({ number }) => (
  <StaticQuery
    query={graphql`
      fragment dividerImage on File {
        childImageSharp {
          fluid(cropFocus: CENTER) {
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
      }
    `}
    render={data => (
      <Image
        title={credit[number]}
        fluid={data[`image${number}`].childImageSharp.fluid}
      />
    )}
  />
);
