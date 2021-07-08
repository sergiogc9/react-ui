type ContentAspectSizes = 's' | 'xs' | 'm' | 'l' | 'xl';
type ContentFontWeights = Record<ContentAspectSizes, string | string[]>;
type ContentFontSizes = Record<ContentAspectSizes, number | number[]>;
type ContentLineHeights = Record<ContentAspectSizes, number | number[]>;

export interface Content {
  readonly fontWeights: ContentFontWeights;
  readonly fontSizes: ContentFontSizes;
  readonly lineHeights: ContentLineHeights;
}
