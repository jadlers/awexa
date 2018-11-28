import React from 'react';
import styled from 'react-emotion';

const Footer = styled.footer`
  margin 0;
  padding-bottom: 2em;
  text-align: center;
  color: #222;
  font-size: 1.2em;
`;

const Contact = styled.a`
  text-decoration: none;
  color: inherit;
`;

const Div = styled.div`
  margin: 1em 0;
`;

const Split = styled.span`
  position: relative;
  font-style: italic;
  line-height: 1;

  :before,
  :after {
    content: '';
    position: absolute;
    border-bottom: 1px solid #222;
    top: 50%;
    width: 7em;
  }

  :before {
    right: 100%;
    margin-right: 0.6em;
  }

  :after {
    left: 100%;
    margin-left: 0.6em;
  }
`;

export default ({ phone, email }) => {
  const phoneNoSpaces = phone.replace(/ /g, '');
  return (
    <Footer>
      <Contact href={`tel:${phoneNoSpaces}`}>{phone}</Contact>
      <Div>
        <Split>eller</Split>
      </Div>
      <Contact href={`mailto:${email}`}>{email}</Contact>
    </Footer>
  );
};