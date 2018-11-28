import React from 'react';
import styled from 'react-emotion';

import { mq, sizes } from '../components/globalStyles';

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  color: #222;

  ${mq('min', sizes.tablet)} {
    flex-direction: row;
  }
`;

const Presentation = styled.div`
  ${mq('min', sizes.tablet)} {
    padding: 0 2em;
  }

  h1 {
    margin-top: 0;
    font-size: 1.75em;
  }

  p,
  li {
    font-size: 1.25em;
    line-height: 1.35;
  }
`;

export default ({ agneta, johan }) => (
  <Wrapper>
    <Presentation>{agneta}</Presentation>
    <Presentation>{johan}</Presentation>
  </Wrapper>
);
