import { StyledProps } from 'styled-components';
import { variant } from 'styled-system';

import { StyledStepperStepProps } from '../types';

export default (props: StyledProps<StyledStepperStepProps>) => {
  return variant({
    prop: 'variant',
    variants: {
      compacted: {
        alignItems: 'flex-start',
        flexDirection: 'column',
        minWidth: props.minWidth ?? '100px'
      },
      'compacted-no-line': {
        alignItems: 'flex-start',
        flexDirection: 'column',
        minWidth: props.minWidth ?? '50px'
      },
      horizontal: {
        flexDirection: 'column',
        minWidth: props.minWidth ?? '125px'
      },
      vertical: {
        flexDirection: 'row',
        marginTop: props.marginLeft ?? 3
      }
    }
  });
};
