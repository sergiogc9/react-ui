import { ExtendedFlexComponent, ExtendedFlexProps } from '@sergiogc9/react-ui';

// eslint-disable-next-line @typescript-eslint/ban-types
type Props = {};

type SwitchBoxContentProps<T extends React.ElementType = 'div'> = ExtendedFlexProps<Props, T>;

type SwitchBoxContentComponent = ExtendedFlexComponent<Props>;

export { SwitchBoxContentComponent, SwitchBoxContentProps };
