import { createNameSpacedComponent } from '@sergiogc9/react-utils';

import FormButtonCancel from './Button/Cancel';
import FormButtonSubmit from './Button/Submit';
import FormCheckBox from './CheckBox';
import FormGoogleMapsAutocomplete from './GoogleMapsAutocomplete';
import FormTextField from './TextField';
import FormSelect from './Select';
import FormTextArea from './TextArea';
import FormSwitchBox from './SwitchBox';
import Form from './Form';

export type { FormErrors, FormHelpers, FormProps } from './types';
export default createNameSpacedComponent(Form, {
	ButtonCancel: FormButtonCancel,
	ButtonSubmit: FormButtonSubmit,
	CheckBox: FormCheckBox,
	GoogleMapsAutocomplete: FormGoogleMapsAutocomplete,
	Select: FormSelect,
	SwitchBox: FormSwitchBox,
	TextArea: FormTextArea,
	TextField: FormTextField
});
