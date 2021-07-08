import { AfterModifier, BeforeModifier, DayPickerProps, Modifier, RangeModifier } from 'react-day-picker';

const getDisabledModifiers = (modifiers?: Modifier | Modifier[], minDate?: Date, maxDate?: Date) => {
	const limitDateModifiers: Partial<AfterModifier & BeforeModifier> = {};
	if (minDate) limitDateModifiers.before = new Date(minDate);
	if (maxDate) limitDateModifiers.after = new Date(maxDate);

	if (modifiers) {
		const propModifiers = Array.isArray(modifiers) ? modifiers : [modifiers];

		return [...propModifiers, limitDateModifiers] as Modifier[];
	}
	return [limitDateModifiers] as Modifier[];
};

const getRangeModifiers = (isRange: boolean, selectedDays: DayPickerProps['selectedDays']) => {
	if (isRange && selectedDays)
		return {
			start: (selectedDays as RangeModifier).from,
			end: (selectedDays as RangeModifier).to
		};
	return {};
};

export { getDisabledModifiers, getRangeModifiers };
