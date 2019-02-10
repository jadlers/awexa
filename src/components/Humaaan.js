import React from 'react';
import PersonSVG from '../images/svg/Humaaan/Person1.js';

import styled from '@emotion/styled';
import { keyframes } from '@emotion/core';

const animation = keyframes`
  from, to {
    transform: rotateY(0);
  }

  50% {
    transform: rotateY(0.5turn);
  }
`;

export const Humaaan = styled(PersonSVG)`
  overflow: visible;

  #g-legs {
    transition: all ease-in-out 0.6s;
    transform-origin: 58%;
  }
`;

export const AnimatedHumaaan = styled(Humaaan)`
  #g-legs {
    animation: ${animation} 5s infinite cubic-bezier(0.86, -0.21, 0.08, 1.21);
  }
`;
