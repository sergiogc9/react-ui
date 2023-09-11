import { createNameSpacedComponent } from '@sergiogc9/react-utils';

import SelectOption, { SelectOptionProps } from './Option';
import Select from './Select';
import { SelectProps } from './types';

const NamespacedSelect = createNameSpacedComponent(Select, {
	Option: SelectOption
});

NamespacedSelect.displayName = 'Select';
SelectOption.displayName = 'Select.Option';

export type { SelectProps, SelectOptionProps };
export default NamespacedSelect;
