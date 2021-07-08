import { AspectSize } from '../Input/types';

type AspectSizes = {
  label: Record<'offset', number>;
};

export interface TextField {
  aspectSize: Record<AspectSize, AspectSizes>;
}
