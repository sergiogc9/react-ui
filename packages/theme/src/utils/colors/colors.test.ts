import theme from 'theme/theme';

import { getColorFromTheme } from './colors';

describe('Theme colors utils', () => {
  it('should return correct color from theme', () => {
    expect(getColorFromTheme(theme, 'primary.500')).toBe('#00A9E0');
  });

  it('should return fallback value if key not exists', () => {
    expect(getColorFromTheme(theme, 'primary.wrong')).toBe('primary.wrong');
  });

  it('should return fallback value if any css color', () => {
    expect(getColorFromTheme(theme, '#45P9H0')).toBe('#45P9H0');
  });
});
