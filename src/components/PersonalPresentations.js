import React from 'react';
import styled from 'react-emotion';

const Wrapper = styled.section`
  display: flex;
  color: #222;
`;

const Presentation = styled.div`
  padding: 0 2em;
  min-width: 350px;

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
