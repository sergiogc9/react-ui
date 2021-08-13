import { ArrayWithProps } from './global.types';
import { Alert } from './components/Alert';
import { Avatar } from './components/Avatar';
import { Button } from './components/Button';
import { Chip } from './components/Chip';
import { Content } from './components/Content';
import { Counter } from './components/Counter/types';
import { DatePicker } from './components/DatePicker';
import { Icon } from './components/Icon';
import { IconButton } from './components/IconButton';
import { Input } from './components/Input';
import { InputCheck } from './components/InputCheck';
import { Modal } from './components/Modal';
import { Select } from './components/Select';
import { Status } from './components/Status/types';
import { Stepper } from './components/Stepper';
import { Switch } from './components/Switch';
import { Tab } from './components/Tab';
import { TextField } from './components/TextField';
import { Title } from './components/Title';
import { Tooltip } from './components/Tooltip';

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
interface ThemeColors {
	readonly primary: ColorPalette;
	readonly secondary: string;
	readonly neutral: ColorPalette;
	readonly red: ColorPalette;
	readonly yellow: ColorPalette;
	readonly blue: ColorPalette;
	readonly green: ColorPalette;
	readonly brand: BrandColors;
}

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

interface Components {
	alert: Alert;
	avatar: Avatar;
	button: Button;
	chip: Chip;
	content: Content;
	counter: Counter;
	datePicker: DatePicker;
	icon: Icon;
	iconButton: IconButton;
	input: Input;
	inputCheck: InputCheck;
	modal: Modal;
	select: Select;
	status: Status;
	stepper: Stepper;
	switch: Switch;
	tab: Tab;
	textField: TextField;
	title: Title;
	tooltip: Tooltip;
}
export interface Theme {
	readonly breakpoints: BreakPoints;
	readonly colors: ThemeColors;
	readonly components: Components;
	readonly fonts: Fonts;
	readonly fontSizes: FontSizes;
	readonly fontWeights: FontWeights;
	readonly lineHeights: LineHeights;
	readonly locale: Locale;
	readonly radii: BorderRadius;
	readonly shadows: Shadows;
	readonly space: Space;
	readonly zIndices: ZIndices;
}
