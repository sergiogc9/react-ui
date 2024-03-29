import { ArrayWithProps } from './global.types';
import { ActionMenu } from './themes/collections/ActionMenu';
import { Alert, AlertAspectSize, AlertStatus } from './themes/components/Alert';
import { Avatar } from './themes/components/Avatar';
import { Button, ButtonAspectSize, ButtonVariant } from './themes/components/Button';
import { Chip } from './themes/components/Chip';
import { Counter } from './themes/components/Counter/types';
import { DatePicker } from './themes/components/DatePicker';
import { Divider } from './themes/components/Divider';
import { DropdownMenu } from './themes/collections/DropdownMenu';
import { FloatingButton } from './themes/components/FloatingButton';
import { Icon } from './themes/components/Icon';
import { IconButton } from './themes/components/IconButton';
import { Input } from './themes/components/Input';
import { InputCheck } from './themes/components/InputCheck';
import { Link } from './themes/components/Link';
import { LoadingBar } from './themes/components/LoadingBar';
import { Modal } from './themes/components/Modal';
import { Popover } from './themes/components/Popover';
import { Select } from './themes/components/Select';
import { Skeleton } from './themes/components/Skeleton';
import { Status } from './themes/components/Status/types';
import { Stepper } from './themes/components/Stepper';
import { Switch } from './themes/components/Switch';
import { SwitchBox } from './themes/collections/SwitchBox';
import { Tab } from './themes/components/Tab';
import { Table } from './themes/components/Table';
import { Text } from './themes/components/Text';
import { TextField } from './themes/components/TextField';
import { Title } from './themes/components/Title';
import { Tooltip } from './themes/components/Tooltip';
import { UserMenu } from './themes/collections/UserMenu';

export interface ColorPalette {
	readonly '0'?: string;
	readonly '50': string;
	readonly '100': string;
	readonly '200': string;
	readonly '300': string;
	readonly '400': string;
	readonly '500': string;
	readonly '600': string;
	readonly '700': string;
	readonly '800': string;
	readonly '900': string;
}

interface BrandColors {
	readonly linkedin: string;
}

export type ThemeColors<T extends Record<string, any>> = T & { modes: Record<ThemeColorMode, T> };

export type ThemePalette = {
	readonly primary: ColorPalette;
	readonly secondary: string;
	readonly neutral: ColorPalette;
	readonly red: ColorPalette;
	readonly yellow: ColorPalette;
	readonly blue: ColorPalette;
	readonly green: ColorPalette;
	readonly brand: BrandColors;
	readonly common: Record<'background' | 'text', string>;
};

export type ThemeColorMode = 'light' | 'dark';

type BreakPoints = ArrayWithProps<string, Partial<Record<'xs' | 'sm' | 'md' | 'lg' | 'xl', string>>>;

type Space = ArrayWithProps<number, Partial<Record<'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl', number>>>;

type Fonts = ArrayWithProps<string, Partial<Record<'main' | 'headings', string>>>;

type FontSizes = number[];

type FontWeights = ArrayWithProps<number, Partial<Record<'light' | 'regular' | 'semibold' | 'bold', number>>>;

type LineHeights = string[];

type BorderRadius = ArrayWithProps<string, Partial<Record<'sm' | 'md' | 'lg' | 'xl', string>>>;

type BorderWidths = Record<'default' | 'emphasis', string>;

type Shadows = Record<'center1' | 'center2' | 'center3' | 'up' | 'down', string>;

type ZIndices = ArrayWithProps<
	number,
	Partial<Record<'card' | 'drawer' | 'plain' | 'overlay' | 'menu' | 'modal' | 'popover' | 'tooltip', number>>
>;

type Locale = 'en' | 'es' | 'fr' | 'it' | 'es-MX';

type Keys = Record<'googleMapsAPI', string>;

interface Collections {
	actionMenu: ActionMenu;
	dropdownMenu: DropdownMenu;
	switchBox: SwitchBox;
	userMenu: UserMenu;
}

interface Components {
	alert: Alert;
	avatar: Avatar;
	button: Button;
	chip: Chip;
	counter: Counter;
	datePicker: DatePicker;
	divider: Divider;
	floatingButton: FloatingButton;
	icon: Icon;
	iconButton: IconButton;
	input: Input;
	inputCheck: InputCheck;
	link: Link;
	loadingBar: LoadingBar;
	modal: Modal;
	popover: Popover;
	select: Select;
	skeleton: Skeleton;
	status: Status;
	stepper: Stepper;
	switch: Switch;
	tab: Tab;
	table: Table;
	text: Text;
	textField: TextField;
	title: Title;
	tooltip: Tooltip;
}

/**
 * To extend the attributes and be able to change theme properties:
 *
 * import 'styled-components';
 *
 * import { DefaultThemeAttributes, Theme } from './types';
 *
 *	export interface ThemeAttributes extends Omit<DefaultThemeAttributes, 'ButtonAspectSize'> {
 *		ButtonAspectSize: DefaultThemeAttributes['ButtonAspectSize'] | 'extra-small';
 *	}
 *
 * 	declare module 'styled-components' {
 *		interface DefaultTheme extends Theme<ThemeAttributes> {}
 *	}
 */
export interface DefaultThemeAttributes {
	AlertAspectSize: AlertAspectSize;
	AlertStatus: AlertStatus;
	ButtonAspectSize: ButtonAspectSize;
	ButtonVariant: ButtonVariant;
}

export type ExtractThemeAttributes<Type> = Type extends Theme<infer X> ? X : null;

export interface Theme<ThemeAttributes = DefaultThemeAttributes> {
	readonly borderWidths: BorderWidths;
	readonly breakpoints: BreakPoints;
	readonly collections: Collections;
	readonly colors: ThemeColors<ThemePalette>;
	readonly components: Components;
	readonly fonts: Fonts;
	readonly fontSizes: FontSizes;
	readonly fontWeights: FontWeights;
	readonly keys: Keys;
	readonly lineHeights: LineHeights;
	readonly locale: Locale;
	readonly mode: ThemeColorMode;
	readonly radii: BorderRadius;
	readonly shadows: Shadows;
	readonly space: Space;
	readonly zIndices: ZIndices;
	// This is necessary to make ThemeAttributes types to work fine
	readonly _?: ThemeAttributes;
}

// @ref https://github.com/microsoft/TypeScript/issues/48552#issuecomment-1093107826
export type TokenPath<T> = object extends Required<T>
	? string
	: T extends object
	? (ExtractThemePropertyValues<keyof T> & string) | PathSubKeys<T, ExtractThemePropertyValues<keyof T> & string>
	: never;

type PathSubKeys<T, K extends string> = K extends keyof T ? `${K}.${TokenPath<T[K]>}` : never;

type ExtractThemePropertyValues<T> = T extends keyof any[] ? never : T;

export type TokenPathValue<T, Path extends string> = {
	[K in Path]: K extends keyof T
		? T[K]
		: K extends `${infer P}.${infer S}`
		? P extends keyof T
			? TokenPathValue<T[P], S>
			: never
		: never;
}[Path];
