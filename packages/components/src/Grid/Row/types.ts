import { ComposedGridProps } from 'components/private/utils/composers/types';
import { ExtendedBoxComponent, ExtendedBoxProps } from 'components/types';

type Props = ComposedGridProps;

type GridRowProps<T extends React.ElementType = 'div'> = ExtendedBoxProps<T, Props>;

type GridRowComponent = ExtendedBoxComponent<Props>;

export { GridRowComponent, GridRowProps };
