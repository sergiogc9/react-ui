type StatusVariants = 'blue' | 'green' | 'grey' | 'red' | 'yellow';

type StatusColors = Record<StatusVariants, Record<'color' | 'bg', string>>;

export interface Status {
  readonly colors: StatusColors;
}
