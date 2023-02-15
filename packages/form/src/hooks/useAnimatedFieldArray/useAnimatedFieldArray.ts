import React from 'react';
import { ArrayPath, FieldValues, useFieldArray, UseFieldArrayProps } from 'react-hook-form';

/**
 * This hook improves the react-hook-form when used together with animated components where the behavior was buggy after removing elements from the field array.
 * @param props The useFieldArray props
 * @returns The properties returned from useFieldArray hook plus the onFieldAnimationEnded method that should be called once animation ends.
 */
const useAnimatedFieldArray = <
	TFieldValues extends FieldValues = FieldValues,
	TFieldArrayName extends ArrayPath<TFieldValues> = ArrayPath<TFieldValues>
>(
	props: UseFieldArrayProps<TFieldValues, TFieldArrayName, 'id'>
) => {
	const { fields, remove, ...rest } = useFieldArray<TFieldValues, TFieldArrayName, 'id'>(props);

	const [removedFields, setRemovedFields] = React.useState<Record<string, true>>({});
	const removedFieldsRef = React.useRef(removedFields);
	removedFieldsRef.current = removedFields; // Ref needed to have last values in onFieldAnimationEnded

	const onRemoveField = React.useCallback(
		(index: number) => {
			setRemovedFields(currentRemovedFields => ({ ...currentRemovedFields, [fields[index].id]: true }));
		},
		[fields]
	);

	const onFieldAnimationEnded = React.useCallback(
		(index: number) => {
			if (removedFieldsRef.current[fields[index].id]) {
				remove(index);
			}
		},
		[fields, remove]
	);

	const filteredFields = React.useMemo(() => fields.filter(field => !removedFields[field.id]), [fields, removedFields]);

	return { ...rest, fields: filteredFields, onFieldAnimationEnded, remove: onRemoveField };
};

export default useAnimatedFieldArray;
