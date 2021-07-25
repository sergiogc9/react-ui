# React UI Components

![](https://github.com/sergiogc9/nodejs-server/workflows/Github%20Pipeline/badge.svg?branch=master)
![](https://badgen.net/npm/v/@sergiogc9/react-ui?icon=npm&label)
![](https://badgen.net//bundlephobia/minzip/@sergiogc9/react-ui)

This package exports the components included in my React UI library based on a design system using `React`, `styled-components`, `styled-system` and more.

See more info about the library [HERE](https://github.com/sergiogc9/react-ui).

ℹ️ The library is still in a beta stage as I am still migrating many components here.

ℹ️ This library has been implemented by me and for me, hence it is highly opinionated.

## Usage

#### Installation

Install the package from npm or github packages:

```
yarn add -S @sergiogc9/react-ui
```

Finally use any component from the UI library. These components must be used wrapped with the styled-components provider as shown above:

```tsx
import { Box, Button, Content, Grid, Title } from '@sergiogc9/react-ui';

const Page = () => {
	return (
		<Box flexDirection="column">
			<Box as="header">
				<Title aspectSize="xl">This page is awesome</Title>
			</Box>
			<Grid>
				<Grid.Box columns={4}>
					<Content>The UI Library rocks!</Content>
				</Grid.Box>
				<Grid.Box columns={8}>
					<Content>You should learn about styled-components and styled-system before :)</Content>
				</Grid.Box>
				<Grid.Row>
					<Button aspectSize="l" variant="primary">
						Click me!
					</Button>
				</Grid.Row>
			</Grid>
		</Box>
	);
};
```

#### Documentation

This package basically exports all the components together with all their necessary types. For example, related to the `Skeleton` component, it exports the component itself and its related props types: `SkeletonProps`, `SkeletonRectProps` and `SkeletonCircleProps`.

In order to see the components docs, there is no public storybook available yet, but you can start it locally. All component are documented using the storybook.
