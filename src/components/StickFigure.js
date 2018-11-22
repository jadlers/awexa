import React from 'react';
import UpperBody from '../images/svg/UpperBody';
import LegsSVG from '../images/svg/Legs';

import styled from 'react-emotion';

const Legs = styled(LegsSVG)({
  transform: 'translateY(-16.2%)',
  transition: 'transform 0.3s ease-in',
});

const Container = styled.div({
  display: 'flex',
  flexDirection: 'column',
  justifycontent: 'center',
  opacity: 0.5,
  fill: 'rebeccapurple',

  [`:hover ${Legs}`]: {
    transform: 'rotateY(0.5turn) translateX(9%)',
  },
});

const StickFigure = () => {
  return (
    <Container>
      <UpperBody />
      <Legs />
    </Container>
  );
};

export default StickFigure;
