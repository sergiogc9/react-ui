import React, { ComponentProps } from 'react';

import { BoxProps } from './Box';
import { FlexProps } from './Flex';
import { GridProps } from './Grid';
import { TextProps } from './Text';

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

type FakeBaseComponentProps<T extends React.ElementType = 'div'> = BaseComponentProps<BaseProps, T>;

type FakeBaseComponent = BaseComponent<
	<T extends React.ElementType = keyof JSX.IntrinsicElements>(
		props: FakeBaseComponentProps<T>
	) => React.ReactElement<FakeBaseComponentProps<T>, any> | null
>;

const FakeBase: FakeBaseComponent = styled.div``;
*/

type BaseComponentProps<
	Props = object,
	T extends React.ElementType = keyof JSX.IntrinsicElements,
	OmitKeys extends Array<string> = []
> = React.PropsWithChildren<Props & AsProp<T>> &
	Omit<React.ComponentPropsWithoutRef<T>, PropsToOmit<T, Props> | OmitKeys[number]> & {
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

type FakeComponentProps<T extends React.ElementType = 'div'> = ExtendedBoxProps<Props, T>;

type FakeComponent = ExtendedBoxComponent<Props>;

const Fake: FakeComponent = styled(Box)``;

IF you want to omit some props to override them:

type FakeComponentProps<T extends React.ElementType = 'div'> = ExtendedBoxProps<Props, T, ['onClick','defaultValue']>;

type FakeComponent = ExtendedBoxComponent<Props, ['onClick','defaultValue']>;
*/

type ExtendedBoxProps<
	Props = object,
	T extends React.ElementType = 'div',
	OmitKeys extends Array<string> | undefined = undefined
> = BaseComponentProps<
	(OmitKeys extends string[] ? Omit<BoxProps<T>, OmitKeys[number]> : BoxProps<T>) & Props,
	T,
	OmitKeys extends undefined ? [] : OmitKeys
>;
type ExtendedBoxComponent<
	Props extends ExtendedBoxProps,
	OmitKeys extends Array<string> | undefined = undefined
> = BaseComponent<
	<T extends React.ElementType = keyof JSX.IntrinsicElements>(
		props: (OmitKeys extends Array<string> ? Omit<BoxProps<T>, OmitKeys[number]> : BoxProps<T>) & Props
	) => React.ReactElement<Props, any> | null
>;

type ExtendedFlexProps<
	Props = object,
	T extends React.ElementType = 'div',
	OmitKeys extends Array<string> | undefined = undefined
> = BaseComponentProps<
	(OmitKeys extends string[] ? Omit<FlexProps<T>, OmitKeys[number]> : FlexProps<T>) & Props,
	T,
	OmitKeys extends undefined ? [] : OmitKeys
>;
type ExtendedFlexComponent<
	Props extends ExtendedFlexProps,
	OmitKeys extends Array<string> | undefined = undefined
> = BaseComponent<
	<T extends React.ElementType = keyof JSX.IntrinsicElements>(
		props: (OmitKeys extends Array<string> ? Omit<FlexProps<T>, OmitKeys[number]> : FlexProps<T>) & Props
	) => React.ReactElement<Props, any> | null
>;

type ExtendedGridProps<
	Props = object,
	T extends React.ElementType = 'div',
	OmitKeys extends Array<string> | undefined = undefined
> = BaseComponentProps<
	(OmitKeys extends string[] ? Omit<GridProps<T>, OmitKeys[number]> : GridProps<T>) & Props,
	T,
	OmitKeys extends undefined ? [] : OmitKeys
>;
type ExtendedGridComponent<
	Props extends ExtendedGridProps,
	OmitKeys extends Array<string> | undefined = undefined
> = BaseComponent<
	<T extends React.ElementType = keyof JSX.IntrinsicElements>(
		props: (OmitKeys extends Array<string> ? Omit<GridProps<T>, OmitKeys[number]> : GridProps<T>) & Props
	) => React.ReactElement<Props, any> | null
>;

type ExtendedTextProps<
	Props = object,
	T extends React.ElementType = 'div',
	OmitKeys extends Array<string> | undefined = undefined
> = BaseComponentProps<
	(OmitKeys extends string[] ? Omit<TextProps<T>, OmitKeys[number]> : TextProps<T>) & Props,
	T,
	OmitKeys extends undefined ? [] : OmitKeys
>;
type ExtendedTextComponent<
	Props extends ExtendedTextProps,
	OmitKeys extends Array<string> | undefined = undefined
> = BaseComponent<
	<T extends React.ElementType = keyof JSX.IntrinsicElements>(
		props: (OmitKeys extends Array<string> ? Omit<TextProps<T>, OmitKeys[number]> : TextProps<T>) & Props
	) => React.ReactElement<Props, any> | null
>;

export {
	BaseComponent,
	BaseComponentProps,
	BaseComponentRef,
	ExtendedBoxComponent,
	ExtendedBoxProps,
	ExtendedFlexComponent,
	ExtendedFlexProps,
	ExtendedGridComponent,
	ExtendedGridProps,
	ExtendedTextComponent,
	ExtendedTextProps
};
