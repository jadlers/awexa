import React from 'react';
import { css } from '@emotion/core';

import { mq, sizes } from '../components/globalStyles';

export default () => (
  <div
    css={css`
      border: 0;
      margin: 2em auto 0;
      ${mq('min', sizes.desktop)} {
        max-width: 70%;
      }
    `}
  >
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2193.7440584913866!2d12.9210171!3d56.6442664!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4651a237fe4e6a4b%3A0xd4e981ae9c8a8141!2sKlackens+S%C3%B6dergr%C3%A4nd+8%2C+302+61+Halmstad!5e0!3m2!1sen!2sse!4v1547568991687"
      width="100%"
      height="400px"
      frameBorder="0"
    />
  </div>
);
