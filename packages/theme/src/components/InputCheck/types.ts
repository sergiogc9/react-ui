type InputTypes = 'checkbox' | 'radio';
type States = 'default' | 'hover' | 'active' | 'selected';

export interface InputCheck {
  readonly borderRadius: Record<InputTypes, string | number>;
  readonly colors: Record<States, string>;
}
