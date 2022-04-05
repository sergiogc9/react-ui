import { FlexProps } from 'components/Flex';

type Props = {
	/**
	 * Switch size
	 */
	readonly aspectSize?: 's' | 'm';
	/**
	 * True if the switch is checked. Using this prop could be controlled from outside.
	 */
	readonly isChecked?: boolean;
	/**
	 * True if the switch is checked by default. Use this prop only if the switch is not controlled from outside.
	 */
	readonly isDefaultChecked?: boolean;
	/**
	 * True if the switch is disabled
	 */
	readonly isDisabled?: boolean;
	/**
	 * Handler called when the switch changes the state
	 */
	readonly onChange?: (defaultChecked: boolean) => void;
};

export type SwitchProps = Props & Omit<FlexProps, 'onChange'>;
