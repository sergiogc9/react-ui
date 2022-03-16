/* eslint-disable prefer-destructuring */

import colors from './colors';
import actionMenuTheme from './themes/collections/ActionMenu';
import alertTheme from './themes/components/Alert';
import avatarTheme from './themes/components/Avatar';
import buttonTheme from './themes/components/Button';
import chipTheme from './themes/components/Chip';
import contentTheme from './themes/components/Content';
import counterTheme from './themes/components/Counter';
import datePickerTheme from './themes/components/DatePicker';
import dividerTheme from './themes/components/Divider';
import floatingButtonTheme from './themes/components/FloatingButton';
import iconButtonTheme from './themes/components/IconButton';
import iconTheme from './themes/components/Icon';
import inputTheme from './themes/components/Input';
import inputCheckTheme from './themes/components/InputCheck';
import linkTheme from './themes/components/Link';
import loadingBarTheme from './themes/components/LoadingBar';
import modalTheme from './themes/components/Modal';
import popoverTheme from './themes/components/Popover';
import selectTheme from './themes/components/Select';
import skeletonTheme from './themes/components/Skeleton';
import statusTheme from './themes/components/Status';
import stepperTheme from './themes/components/Stepper';
import switchTheme from './themes/components/Switch';
import tabTheme from './themes/components/Tab';
import tableTheme from './themes/components/Table';
import textFieldTheme from './themes/components/TextField';
import titleTheme from './themes/components/Title';
import tooltipTheme from './themes/components/Tooltip';
import { Theme } from './types';

const breakpoints: Theme['breakpoints'] = ['0px', '420px', '768px', '1280px', '1920px'];
breakpoints.xs = breakpoints[0];
breakpoints.sm = breakpoints[1];
breakpoints.md = breakpoints[2];
breakpoints.lg = breakpoints[3];
breakpoints.xl = breakpoints[4];

const space: Theme['space'] = [0, 4, 8, 16, 24, 32, 40, 48, 56, 64, 72, 80];

const fonts: Theme['fonts'] = [
	'system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji;',
	"'Lato', sans-serif"
];
fonts.main = fonts[0];
fonts.headings = fonts[1];

const fontSizes: Theme['fontSizes'] = [12, 14, 16, 18, 20, 24, 28, 30, 34, 36, 46];

const fontWeights: Theme['fontWeights'] = [300, 400, 600, 700];
fontWeights.light = fontWeights[0];
fontWeights.regular = fontWeights[1];
fontWeights.semibold = fontWeights[2];
fontWeights.bold = fontWeights[3];

const lineHeights: Theme['lineHeights'] = [
	'18px',
	'22px',
	'24px',
	'26px',
	'30px',
	'34px',
	'38px',
	'40px',
	'44px',
	'46px',
	'56px'
];

const radii: Theme['radii'] = ['4px', '8px', '16px', '24px'];

const shadows: Theme['shadows'] = [
	'0px 0px 0px 1px rgba(11, 21, 25, 0.16)',
	'0px 0px 6px rgba(11, 21, 25, 0.16)',
	'0px 0px 16px 2px rgba(11, 21, 25, 0.06)',
	'0px -4px 16px 2px rgba(11, 21, 25, 0.06)',
	'0px 4px 16px 2px rgba(11, 21, 25, 0.06)'
];
shadows.center1 = shadows[0];
shadows.center2 = shadows[1];
shadows.center3 = shadows[2];
shadows.up = shadows[3];
shadows.down = shadows[4];

const zIndices: Theme['zIndices'] = [4, 8, 12, 16, 20, 24];
zIndices.plain = 0;
zIndices.card = zIndices[0];
zIndices.overlay = zIndices[1];
zIndices.drawer = zIndices[2];
zIndices.menu = zIndices[3];
zIndices.modal = zIndices[4];
zIndices.tooltip = zIndices[5];
zIndices.popover = zIndices[5];

const keys: Theme['keys'] = {
	googleMapsAPI: ''
};

const theme: Theme = {
	breakpoints,
	collections: { actionMenu: actionMenuTheme },
	colors,
	fonts,
	fontSizes,
	fontWeights,
	keys,
	lineHeights,
	locale: 'en',
	mode: 'light',
	radii,
	space,
	shadows,
	zIndices,
	components: {
		alert: alertTheme,
		avatar: avatarTheme,
		button: buttonTheme,
		chip: chipTheme,
		content: contentTheme,
		counter: counterTheme,
		datePicker: datePickerTheme,
		divider: dividerTheme,
		floatingButton: floatingButtonTheme,
		icon: iconTheme,
		iconButton: iconButtonTheme,
		input: inputTheme,
		inputCheck: inputCheckTheme,
		link: linkTheme,
		loadingBar: loadingBarTheme,
		modal: modalTheme,
		popover: popoverTheme,
		select: selectTheme,
		skeleton: skeletonTheme,
		status: statusTheme,
		stepper: stepperTheme,
		switch: switchTheme,
		tab: tabTheme,
		table: tableTheme,
		textField: textFieldTheme,
		title: titleTheme,
		tooltip: tooltipTheme
	}
};

export default theme;
