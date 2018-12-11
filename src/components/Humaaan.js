import React from 'react';
import PersonSVG from '../images/svg/Humaaan/Person1.js';

import styled from 'react-emotion';

const Person = styled(PersonSVG)`
  #g-legs {
    transition: all ease-in-out 0.6s;
    transform-origin: 58%;
    transform: rotateY(0.5turn);
  }

  &:hover #g-legs {
    transform: rotateY(0);
  }
`;

export default () => <Person xmlns="http:www.w3.org/2000/svg" />;
