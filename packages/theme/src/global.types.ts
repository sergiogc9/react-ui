export type ArrayWithProps<T, P> = Array<T> & P;

export type RecursivePartial<T> = {
	[P in keyof T]?: RecursivePartial<T[P]>;
};
