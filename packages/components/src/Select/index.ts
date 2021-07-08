import { createNameSpacedComponent } from 'components/private/utils/components';

import SelectOption, { SelectOptionProps } from './Option';
import Select from './Select';
import { SelectProps } from './types';

export type { SelectProps, SelectOptionProps };
export default createNameSpacedComponent(Select, {
	Option: SelectOption
});
