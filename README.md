# React UI library

![](https://github.com/sergiogc9/react-ui/workflows/Github%20Pipeline/badge.svg?branch=master)

This repository contains a React UI library divided in some packages. The UI library is based on a **design system** using `React`, `styled-components`, `styled-system`, `storybook`, `lerna`, `typescript` and more.

ℹ️ The library is still in a beta stage as I am still migrating many components here.

ℹ️ This library has been implemented by me and for me, hence it is highly opinionated.

Packages:

- [`@sergiogc9/react-ui-theme`](/packages/theme):

  The theme source used in components inside this library. The theme provided by this package should be passed to the `styled-components` provider. The theme can be used as is or can be partially modified keeping the same structure (i.e. only changing values).

  ![](https://badgen.net/npm/v/@sergiogc9/react-ui-theme?icon=npm&label)
  ![](https://badgen.net//bundlephobia/minzip/@sergiogc9/react-ui-theme)

- [`@sergiogc9/react-ui`](/packages/components):

  A set of components ready to be used together with `styled-components`.

  ![](https://badgen.net/npm/v/@sergiogc9/react-ui?icon=npm&label)
  ![](https://badgen.net//bundlephobia/minzip/@sergiogc9/react-ui)

- [`@sergiogc9/react-ui-collections`](/packages/collections):

  A set of components built with many components from the `@sergiogc9/react-ui` package.

  ![](https://badgen.net/npm/v/@sergiogc9/react-ui-collections?icon=npm&label)
  ![](https://badgen.net//bundlephobia/minzip/@sergiogc9/react-ui-collections)

## Demo

See the Storybook running live in:

[http://react-ui.sergiogcosgaya.rocks](http://react-ui.sergiogcosgaya.rocks)

## Usage

#### Installation

Install both packages from npm or github packages:

```
yarn add -S @sergiogc9/react-ui @sergiogc9/react-ui-theme
```

Add the provider to your app, customizing the `theme` if wanted and using `reset` config provided by the theme:

```tsx
import { createGlobalStyle } from 'styled-components';
import theme, { ReactUIProvider } from '@sergiogc9/react-ui-theme';

const GlobalStyle = createGlobalStyle`
	${reset}
	// add other custom global styles here
`;

const App = () => {
   const finalTheme = merge(theme, {...}); // Customize theme if wanted

   return (
      <ReactUIProvider theme={finalTheme}>
	  	<GlobalStyle />
        {...}
      </ReactUIProvider>
   )
}
```

Finally use any component from the UI library. These components must be used wrapped with the styled-components provider as shown above:

```tsx
import { Box, Button,  Flex, Grid,Text, Title } from '@sergiogc9/react-ui';

const Page = () => {
	return (
		<Flex flexDirection="column">
			<Box as="header">
				<Title aspectSize="xl">This page is awesome</Title>
			</Box>
			<Grid>
				<Grid.Box columns={4}>
					<Text>The UI Library rocks!</Text>
				</Grid.Box>
				<Grid.Box columns={8}>
					<Text>You should learn about styled-components and styled-system before :)</Text>
				</Grid.Box>
				<Grid.Row>
					<Button aspectSize="l" variant="primary">
						Click me!
					</Button>
				</Grid.Row>
			</Grid>
		</Flex>
	);
};
```

## Development

You can start the project to see the Storybook and test all the components as well as looking into their documentation:

1. First, install the suggested NodeJS version. You can check the version in `.nvmrc` file.

2. Install the necessary packages and dependencies:

   `yarn install`

3. Start the storybook in a development server listening in port 6006:

   `yarn start`

#### Using the packages locally in other projects

If you need to test the changes outside this project (e.g. inside an application which uses some package), you can follow these steps:

1. Uninstall peer dependencies if installed:

   `yarn install`

2. Create links to the packages:

   `yarn link:all`

   ℹ️ This should only be done once. You can remove the links executing `yarn unlink:all`

3. Go to the other project and execute:

   `yarn link @sergiogc9/react-ui @sergiogc9/react-ui-theme`

4. To stop using the link and use the remote package again, unlink them and reinstall the dependencies:

   `yarn unlink @sergiogc9/react-ui @sergiogc9/react-ui-theme && yarn install --force`

5. ℹ️ **Tip for WEBPACK bundled apps**

   For NPM link to work in an app bundled via webpack, please add this alias to your webpack config

   ```
   resolve: {
   	alias: {
   		'react': path.resolve('./node_modules/react')
   	}
   }
   ```

   This npm link process can cause your app to have more than one react instance running, which will cause breaking errors. This doesn't happen with `Parcel` and it's related with how `Webpack` resolves imported packages.

#### Publishing a new version

New final versions are published automatically by the pipeline, never manually! To create and publish a new version, follow these steps:

1. Create a new branch from `master`.
2. Perform your changes.

3. Execute the script to add a new version (see script info below) or use the `lerna version`:

   `yarn bump:version:[patch | minor | major]`

   Once version is confirmed, this script creates a new commit and adds a tag with the selected version.

4. Create a PR to merge changes including the version upgrade.
5. Once PR is merged, the pipeline will handle the new version publishing the new version.

#### Available scripts

##### `yarn start`

Runs the storybook in a development server.<br />
Open [http://localhost:6006](http://localhost:6006) to view it in the browser.

The page will reload if you edit the source files as it works in watch mode.

##### `yarn link:all`

Creates a link inside yarn to use this project packages in other projects locally without needing to publish anything.

This only has to be done once.

##### `yarn unlink:all`

Removes the links created using the previous script.

##### `yarn test`

Runs all unitary tests from components. It also checks the coverage of the code.<br>

It can be executed only for desired tests, using a pattern: `yarn test user.test.ts`

##### `yarn test:local`

Runs all unitary tests from components in watch mode. It does not check the code coverage.<br>

It can be executed only for desired tests, using a pattern: `yarn test:local user.test.ts`

##### `yarn test:local:file $file`

Runs `yarn test:local` including all tests in the repo that matches `$file` pattern.

The goal of this script is to only run tests you are modifying or developing.

Example to only execute tests for Focus component:<br/>
`yarn test:local:file Button.test.tsx` <br/>

🛈 You can force doing the coverage check by adding `--coverage` at the end of the command.

##### `yarn bootstrap`

Builds all packages using rollup.<br>
The builds are generated inside a `dist` folder on each package.

##### `yarn bump:version:[patch | minor | major]`

In order to bump the package's version. previously to push the latests change, it is necessary to run one of this commands

`yarn bump:version:patch` increases the patch version based on semantic versioning x.x.1
`yarn bump:version:minor` increases the minor version based on semantic versioning x.1.x
`yarn bump:version:major` increases the major version based on semantic versioning 1.x.x.

The script will always ask for a confirmation before performing the changes.

🚫 **REMEMBER THAT PUBLISHING LOCALLY IS FORBIDDEN, IT MUST BE DONE BY THE PIPELINE** 🚫
