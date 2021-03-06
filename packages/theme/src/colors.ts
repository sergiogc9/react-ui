import cloneDeep from 'lodash/cloneDeep';
import merge from 'lodash/merge';
import { RecursivePartial } from './global.types';
import { Theme, ThemePalette } from './types';

const lightColors: ThemePalette = {
	primary: {
		50: '#ECF8FC',
		100: '#BDE8F6',
		200: '#8ED8F1',
		300: '#5EC9EB',
		400: '#2FB9E6',
		500: '#00A9E0',
		600: '#008ABC',
		700: '#006A99',
		800: '#004B75',
		900: '#002B51'
	},
	secondary: '#101D22',
	neutral: {
		0: '#FFFFFF',
		50: '#F5F5F6',
		100: '#E7E8E8',
		200: '#D6D6D6',
		300: '#BBBBBB',
		400: '#A0A0A0',
		500: '#858585',
		600: '#696969',
		700: '#4E4E4E',
		800: '#333333',
		900: '#1A1A1A'
	},
	red: {
		50: '#FFF6F6',
		100: '#FFD3D3',
		200: '#FFB1B1',
		300: '#FF8E8E',
		400: '#FF6C6C',
		500: '#FF4949',
		600: '#D93E3E',
		700: '#B23333',
		800: '#8C2828',
		900: '#1A1A1A'
	},
	yellow: {
		50: '#FFFBEB',
		100: '#FFF1C5',
		200: '#FFE79F',
		300: '#FFDC78',
		400: '#FFD252',
		500: '#FFC82C',
		600: '#D9AE22',
		700: '#B49517',
		800: '#8E7B0D',
		900: '#686102'
	},
	blue: {
		50: '#ECF9FF',
		100: '#BDE3F6',
		200: '#8ECDED',
		300: '#5EB6E5',
		400: '#2FA0DC',
		500: '#008AD3',
		600: '#007ABE',
		700: '#0069A8',
		800: '#005993',
		900: '#00487D'
	},
	green: {
		50: '#F1FCF6',
		100: '#C4F1D8',
		200: '#97E5BA',
		300: '#6BDA9C',
		400: '#3ECE7E',
		500: '#11C360',
		600: '#0FA551',
		700: '#0C8642',
		800: '#0A6833',
		900: '#074924'
	},
	brand: {
		linkedin: '#0073B1'
	},
	common: {
		background: '#ffffff',
		text: '#1A1A1A'
	}
};

const darkColors: ThemePalette = merge<ThemePalette, RecursivePartial<ThemePalette>>(cloneDeep(lightColors), {
	// Set specific dark theme colors
	common: {
		background: '#333333',
		text: '#F5F5F6'
	}
});

const colors: Theme['colors'] = {
	...lightColors,
	modes: {
		dark: darkColors,
		light: lightColors
	}
};

export default colors;
