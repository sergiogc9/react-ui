# React UI Form

![](https://github.com/sergiogc9/react-ui/workflows/Github%20Pipeline/badge.svg?branch=master)
![](https://badgen.net/npm/v/@sergiogc9/react-ui-form?icon=npm&label)
![](https://badgen.net//bundlephobia/minzip/@sergiogc9/react-ui-form)

This package exports a form wrapper for some UI components from this library using `react-hook-form` and `yup`.

See more info about the library [HERE](https://github.com/sergiogc9/react-ui).

ℹ️ This library has been implemented by me and for me, hence it is highly opinionated.

## Usage

#### Installation

Install the package from npm or github packages:

```
yarn add -S @sergiogc9/react-ui-form
```

#### Documentation

This package basically exports some utilities as util components or custom hooks.

Exported components:

- `Form`: Wrapper combining form UI components from this library and `react-hook-forms` and `yup` with automatic validation and much more.

Exported custom hooks:

- `useAnimatedFieldArray`: Custom hook that improves Form components when used together with animated components where the behavior was buggy after removing elements from the field array.

Exported custom high order components:

- `withFormField`: Creates a component ready to be used inside a react-hook-form form
