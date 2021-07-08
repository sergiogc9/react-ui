import { variant } from 'styled-system';

export default () => {
  return variant({
    prop: 'behavior',
    variants: {
      default: {
        '&:hover': {
          opacity: 0.8,
          '&::after': {
            opacity: 0
          }
        }
      },
      opposite: {
        '&:hover': {
          opacity: 0.8,
          '&::after': {
            opacity: 1
          }
        }
      }
    }
  });
};
