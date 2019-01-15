import React from 'react';
import PersonSVG from '../images/svg/Humaaan/Person1.js';

import styled from '@emotion/styled';

const Person = styled(PersonSVG)`
  overflow: visible;

  #g-legs {
    transition: all ease-in-out 0.6s;
    transform-origin: 58%;
    ${props => (props['data-flip'] ? '' : 'transform: rotateY(0.5turn);')}
  }
`;

export default ({ animate }) => (
  <Person data-flip={animate} xmlns="http:www.w3.org/2000/svg" />
);
