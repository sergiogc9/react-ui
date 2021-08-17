import { ComposedSvgProps } from 'components/private/utils/composers/types';

export type IconStyling = 'filled' | 'outlined';
export type Icon =
	| 'add'
	| 'add-a-photo'
	| 'alert-error'
	| 'arrow-down'
	| 'arrow-downward'
	| 'arrow-left'
	| 'arrow-right'
	| 'arrow-up'
	| 'arrow-upward'
	| 'bell'
	| 'bookmark'
	| 'burger-menu'
	| 'business'
	| 'calendar'
	| 'calendar-range'
	| 'camera'
	| 'chat'
	| 'check'
	| 'check-circle'
	| 'circle-small'
	| 'clock'
	| 'close'
	| 'cloud-upload'
	| 'dashboard'
	| 'delete'
	| 'desktop-windows'
	| 'detail'
	| 'disability'
	| 'document'
	| 'edit'
	| 'eye'
	| 'eye-off'
	| 'filter'
	| 'first-page'
	| 'flash'
	| 'fullscreen'
	| 'fullscreen-exit'
	| 'grid-view'
	| 'help'
	| 'home'
	| 'info'
	| 'insights'
	| 'kebab-horizontal'
	| 'kebab-vertical'
	| 'last-page'
	| 'layers'
	| 'list'
	| 'list-view'
	| 'location'
	| 'mail'
	| 'new-tab'
	| 'quickreply'
	| 'power-on'
	| 'remote'
	| 'salary'
	| 'search'
	| 'settings'
	| 'share'
	| 'shop'
	| 'shop-bag'
	| 'smartphone'
	| 'star'
	| 'unfold-less'
	| 'unfold-more'
	| 'upload'
	| 'user-circle'
	| 'user'
	| 'users'
	| 'verified'
	| 'wifi'
	| 'work';

export type Icons = Record<Icon, JSX.Element | null>;

type PredefinedIconProps = {
	readonly styling: IconStyling;
	readonly icon: Icon;
	readonly content?: never;
};

type CustomIconProps = {
	readonly content: JSX.Element;
	readonly styling?: never;
	readonly icon?: never;
};

type CommonProps = {
	/**
	 * The size of the icon.
	 */
	readonly aspectSize?: 's' | 'm' | 'l' | 'xl';
	/**
	 * A string with classes to use in the Icon component.
	 */
	readonly content?: JSX.Element;
	/**
	 * A custom viewBox used in the Icon component. It should only be used with a custom content.
	 */
	readonly className?: string;
	/**
	 * The icon to use. Only necessary if using a pre-defined icon.
	 */
	readonly icon?: Icon;
	/**
	 * Handler called when the button is clicked
	 */
	readonly onClick?: (ev: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
	/**
	 * The icon style to use. Only needed if using a pre-defined icon.
	 */
	readonly styling?: IconStyling;
	/**
	 * A reference which be linked to the DOM svg element.
	 */
	readonly ref?: React.ForwardedRef<SVGSVGElement>;
	/**
	 * A custom svg content used to show the Icon component. Only used when defining a custom icon.
	 */
	readonly viewBox?: string;
};

export type IconProps = CommonProps & (PredefinedIconProps | CustomIconProps) & ComposedSvgProps;
