type DatePickerColors = Record<
  'disabled' | 'hover' | 'selected' | 'text' | 'today' | 'todayBackground',
  string
>;

type DatePickerDay = {
  readonly borderRadius: string | number;
  readonly size: number;
};

type DatePickerMonth = {
  readonly borderRadius: string | number;
  readonly height: string | number;
};

export interface DatePicker {
  readonly colors: DatePickerColors;
  readonly fontSize: string | number;
  readonly day: DatePickerDay;
  readonly month: DatePickerMonth;
}
