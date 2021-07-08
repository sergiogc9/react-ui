import { DefaultTheme } from 'styled-components';
import { InputProps } from '../types';

export default class StatusColor {
  constructor(private props: InputProps, private theme: DefaultTheme) {
    this.theme = theme;
    this.props = props;
  }

  get color() {
    return this.theme.components.input.color;
  }

  public getStatusColorWithFallback(
    fallback: keyof DefaultTheme['components']['input']['color']
  ) {
    const { isError, isDisabled, isSuccess } = this.props;

    if (isDisabled) return this.color.disabled;
    if (isError) return this.color.error;
    if (isSuccess) return this.color.success;
    return this.color[fallback];
  }
}
