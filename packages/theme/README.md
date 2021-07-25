# React UI Theme

![](https://github.com/sergiogc9/react-ui/workflows/Github%20Pipeline/badge.svg?branch=master)
![](https://badgen.net/npm/v/@sergiogc9/react-ui-theme?icon=npm&label)
![](https://badgen.net//bundlephobia/minzip/@sergiogc9/react-ui-theme)

This package exports the necessary theme to work with my React UI library based on a design system using `React`, `styled-components`, `styled-system` and more.

See more info about the library [HERE](https://github.com/sergiogc9/react-ui).

ℹ️ The library is still in a beta stage as I am still migrating many components here.

ℹ️ This library has been implemented by me and for me, hence it is highly opinionated.

## Usage

#### Installation

Install the package from npm or github packages:

```
yarn add -S @sergiogc9/react-ui-theme
```

Then import the provided theme and use it together with the styled-components provider at a higher app level:

```tsx
import { ThemeProvider } from 'styled-components';
import theme from '@sergiogc9/react-ui-theme';

const App = () => {
   const finalTheme = merge(theme, {...}); // Customize theme if wanted

   return (
      <ThemeProvider theme={finalTheme}>
         {...}
      </Theme>
   )
}
```

#### Documentation

This package basically exports the theme and its types. The theme is exported by default as seen in the example above.

The exported items are:

- `theme` (default export): The theme itself. It should be passed to the styled-components provider.
- `Theme`: The Theme typescript typing.
- `reset`: A set of common CSS rules to be used globally in the app if wanted. It should be used together with `createGlobalStyle` provided by styled-components.
- `getColorFromTheme` and `getColorFromThemeWithOpacity`: Returns the color value defined in the theme. Using directly the color values using styled-system approach is preferred.
