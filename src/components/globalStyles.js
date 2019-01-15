const sizes = { phone: 450, tablet: 768, desktop: 1050 };
const mq = (type, size) =>
  `@media (${type === 'min' ? 'min' : 'max'}-width: ${size}px)`;

export { mq, sizes };
