import { ComposedGridProps } from 'components/private/utils/composers/types';
import { ExtendedBoxComponent, ExtendedBoxProps } from 'components/types';

type Props = ComposedGridProps;

type GridRowProps<T extends React.ElementType = 'div'> = ExtendedBoxProps<Props, T>;

type GridRowComponent = ExtendedBoxComponent<Props>;

export { GridRowComponent, GridRowProps };
