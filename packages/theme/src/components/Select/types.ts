import { ComponentLocales } from 'theme/utils';

type SelectSizes = 's' | 'm' | 'l';
type SelectVariant = 'neutral' | 'primary';
type SelectOptionColors = Record<
  'default' | 'hover' | 'active' | 'bgHover' | 'bgActive',
  string
>;

type SelectLocaleKeys = 'remove_all_btn' | 'save_btn' | 'no_results';
export interface Select extends ComponentLocales<SelectLocaleKeys> {
  defaultFontColor: string;
  option: {
    color: Record<SelectVariant, SelectOptionColors>;
    height: Record<SelectSizes, string | number>;
  };
}
