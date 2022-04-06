import { ArrayWithProps } from './global.types';
import { ActionMenu } from './themes/collections/ActionMenu';
import { Alert } from './themes/components/Alert';
import { Avatar } from './themes/components/Avatar';
import { Button } from './themes/components/Button';
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

interface ColorPalette {
	readonly 0?: string;
	readonly 50: string;
	readonly 100: string;
	readonly 200: string;
	readonly 300: string;
	readonly 400: string;
	readonly 500: string;
	readonly 600: string;
	readonly 700: string;
	readonly 800: string;
	readonly 900: string;
}

type BrandColors = {
	readonly linkedin: string;
};

export type ThemeColors<T extends Record<string, any>> = T & { modes: Record<ThemeColorMode, T> };

export interface ThemePalette {
	readonly primary: ColorPalette;
	readonly secondary: string;
	readonly neutral: ColorPalette;
	readonly red: ColorPalette;
	readonly yellow: ColorPalette;
	readonly blue: ColorPalette;
	readonly green: ColorPalette;
	readonly brand: BrandColors;
	readonly common: Record<'background' | 'text', string>;
}

export type ThemeColorMode = 'light' | 'dark';

type BreakPoints = ArrayWithProps<string, Partial<Record<'xs' | 'sm' | 'md' | 'lg' | 'xl', string>>>;

type Space = number[];

type Fonts = ArrayWithProps<string, Partial<Record<'main' | 'headings', string>>>;

type FontSizes = number[];

type FontWeights = ArrayWithProps<number, Partial<Record<'light' | 'regular' | 'semibold' | 'bold', number>>>;

type LineHeights = string[];

type BorderRadius = string[];

type Shadows = ArrayWithProps<string, Partial<Record<'center1' | 'center2' | 'center3' | 'up' | 'down', string>>>;

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
export interface Theme {
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
}
