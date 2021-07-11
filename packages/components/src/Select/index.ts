import { createNameSpacedComponent } from '@sergiogc9/react-utils';

import SelectOption, { SelectOptionProps } from './Option';
import Select from './Select';
import { SelectProps } from './types';

export type { SelectProps, SelectOptionProps };
export default createNameSpacedComponent(Select, {
	Option: SelectOption
});
