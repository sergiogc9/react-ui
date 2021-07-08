import { variant } from 'styled-system';

export default variant({
  prop: 'location',
  variants: {
    'bottom-left': {
      bottom: 0,
      left: 0,
      transform: 'translate(-4px, 0px)'
    },
    'bottom-right': {
      bottom: 0,
      right: 0,
      transform: 'translate(4px, 0px)'
    },
    'top-left': {
      top: 0,
      left: 0,
      transform: 'translate(-4px, 0px)'
    },
    'top-right': {
      top: 0,
      right: 0,
      transform: 'translate(4px, 0px)'
    }
  }
});
