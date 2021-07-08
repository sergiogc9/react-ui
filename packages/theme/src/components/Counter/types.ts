type CounterAspectSizes = 's' | 'm';
type CounterVariants = 'blue' | 'green' | 'grey' | 'red' | 'yellow';

type CounterColors = Record<CounterVariants, Record<'color' | 'bg', string>>;
type CounterSizes = Record<CounterAspectSizes, number>;

export interface Counter {
  readonly colors: CounterColors;
  readonly sizes: CounterSizes;
}
