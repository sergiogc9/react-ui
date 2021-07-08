import React from 'react';

type CommonStyledComponentProps = {
  readonly as?: keyof JSX.IntrinsicElements;
  readonly key?: React.Key | null;
};

/**
 * This generic type helps to define the correct props type for a based styled-components component.
 *
 * Example when creating a new base component:
 * type BoxProps = StyledComponentProps<ComposedBoxProps, React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;
 *
 * If you are extending a styled-component based on Box and using a div use BoxProps directly.
 * If you need use another HTML dom element, use this helper to generate the correct props.
 * Example with a textarea:
 * type TextAreaBoxProps = BoxProps<React.TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement>
 * The TextAreaBoxProps will have all props from Box except those related to the div element but with the textarea specified props added.
 */
export type StyledComponentProps<
  /**
   * Any composed props defined in composers. e.g. ComposedBoxProps or ComposedTextProps
   */
  // eslint-disable-next-line @typescript-eslint/ban-types
  ComposedProps extends {},
  /**
   * The attributes for the final rendered DOM element. e.g. for an input: React.InputHTMLAttributes<HTMLInputAttributes>
   */
  /**
   * This is needed to add dom-specific attributes to the component props.
   */
  T extends React.HTMLAttributes<any> = React.HTMLAttributes<HTMLDivElement>,
  /**
   *  The reference element type. If passed the component props will have a ref prop with Ref type.
   */
  Ref extends any = undefined
> = React.PropsWithChildren<
  ComposedProps &
    CommonStyledComponentProps &
    /**
     *  Discard from T props already added by styled-components and styled-system to avoid type conflicts.
     */
    Omit<T, keyof ComposedProps> &
    (Ref extends undefined ? Record<string, unknown> : { ref?: React.Ref<Ref> })
>;
