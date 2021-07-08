type AvatarAspectSizes = 's' | 'm' | 'l';
type AvatarVariants = 'circle' | 'rounded';
type AvatarSizes = Record<AvatarAspectSizes, number | number[]>;
type AvatarIconSizes = Record<AvatarAspectSizes, number | number[]>;
type AvatarFontSizes = Record<AvatarAspectSizes, number | number[]>;
type AvatarRadii = Omit<Record<AvatarVariants, string | string[]>, 'circle'>;

export interface Avatar {
  readonly iconSizes: AvatarIconSizes;
  readonly fontSizes: AvatarFontSizes;
  readonly radii: AvatarRadii;
  readonly sizes: AvatarSizes;
}
