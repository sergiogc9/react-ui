import { ThemeColors } from 'theme/types';

type StepperVariants = 'compacted' | 'compacted-no-line' | 'horizontal' | 'vertical';
type StepperColors = Record<'active' | 'text' | 'disabled' | 'disabledLine', string>;
type StepperCircle = Record<StepperVariants, Record<'fontSize' | 'size', number>>;

export interface Stepper {
	readonly circle: StepperCircle;
	readonly colors: ThemeColors<StepperColors>;
}
