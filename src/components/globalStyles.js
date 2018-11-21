import { injectGlobal } from 'react-emotion';

injectGlobal`
body { margin: 0; box-sizing: border-box; }
*,*:before,*:after { box-sizing: inherit; }
`;

const sizes = { phone: 450, tablet: 768, desktop: 1050 };
const mq = (type, size) =>
  `@media (${type === 'min' ? 'min' : 'max'}-width: ${size}px)`;

export { mq, sizes };
