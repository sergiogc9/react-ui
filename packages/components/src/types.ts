import React, { ComponentProps } from 'react';

import { BoxProps } from './Box';
import { FlexProps } from './Flex';
import { GridProps } from './Grid';

export type RecursivePartial<T> = {
	[P in keyof T]?: RecursivePartial<T[P]>;
};

type AsProp<T extends React.ElementType> = {
	/**
	 * Use any valid DOM element type
	 */
	as?: T;
};

type PropsToOmit<T extends React.ElementType, P> = keyof (AsProp<T> & P);

/*
Type helpers to use when creating base layout components. To extend from them, use the Extended types below

type BaseProps = {
	fakeProp: string
}

type FakeBaseComponentProps<T extends React.ElementType = 'div'> = BaseComponentProps<T, BaseProps>;

type FakeBaseComponent = BaseComponent<
	<T extends React.ElementType = keyof JSX.IntrinsicElements>(
		props: FakeBaseComponentProps<T>
	) => React.ReactElement<FakeBaseComponentProps<T>, any> | null
>;

const FakeBase: FakeBaseComponent = styled.div``;
*/

type BaseComponentProps<T extends React.ElementType = 'div', Props = object> = React.PropsWithChildren<
	Props & AsProp<T>
> &
	Omit<React.ComponentPropsWithoutRef<T>, PropsToOmit<T, Props>> & {
		ref?: BaseComponentRef<T>;
	};

type BaseComponentRef<T extends React.ElementType> = React.ComponentPropsWithRef<T>['ref'];

type BaseComponent<C extends keyof JSX.IntrinsicElements | React.JSXElementConstructor<any>> = C & {
	defaultProps?: Partial<ComponentProps<C>>;
	displayName?: string;
};

/*
Type helpers to use when extending base layout components (e.g. using styled(Box))
Example of usage:

type Props = {
	fakeProp: string
};

type FakeComponentProps<T extends React.ElementType = 'div'> = ExtendedBoxProps<T, Props>;

type FakeComponent = ExtendedBoxComponent<Props>;

const Fake: FakeComponent = styled(Box)``;
*/

type ExtendedBoxProps<T extends React.ElementType = 'div', Props = object> = BaseComponentProps<T, BoxProps<T> & Props>;
type ExtendedBoxComponent<Props extends object> = BaseComponent<
	<T extends React.ElementType = keyof JSX.IntrinsicElements>(
		props: BoxProps<T> & Props
	) => React.ReactElement<Props, any> | null
>;

type ExtendedFlexProps<T extends React.ElementType = 'div', Props = object> = BaseComponentProps<
	T,
	FlexProps<T> & Props
>;
type ExtendedFlexComponent<Props extends object> = BaseComponent<
	<T extends React.ElementType = keyof JSX.IntrinsicElements>(
		props: FlexProps<T> & Props
	) => React.ReactElement<Props, any> | null
>;

type ExtendedGridProps<T extends React.ElementType = 'div', Props = object> = BaseComponentProps<
	T,
	GridProps<T> & Props
>;
type ExtendedGridComponent<Props extends object> = BaseComponent<
	<T extends React.ElementType = keyof JSX.IntrinsicElements>(
		props: GridProps<T> & Props
	) => React.ReactElement<Props, any> | null
>;

export {
	BaseComponent,
	BaseComponentProps,
	BaseComponentRef,
	ExtendedBoxProps,
	ExtendedBoxComponent,
	ExtendedFlexProps,
	ExtendedFlexComponent,
	ExtendedGridProps,
	ExtendedGridComponent
};
