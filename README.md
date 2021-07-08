## Getting started

1. First, install the suggested NodeJS version. You can check the version in `.nvmrc` file.

2. Install the necessary packages and dependencies:

   `yarn install`

3. Start the storybook in a development server listening in port 6006:

   `yarn start`

## Using the packages locally in other projects

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

## Publishing a new version

New final versions are published automatically by the pipeline, never manually! To create and publish a new version, follow these steps:

1. Create a new branch from `master` or use a previous created release branch with changes related to the new version to be added. The branch can't have pending changes and must exist in remote.

2. Execute the script to add a new version (see script info below):

   `yarn bump:version:[patch | minor | major]` or `yarn version:change x.x.x`

   This script creates a new commit and adds a tag with the selected version.

3. Once PR is merged, the pipeline will handle the new version creating and publishing the new version.

## Available scripts

### `yarn start`

Runs the storybook in a development server.<br />
Open [http://localhost:6006](http://localhost:6006) to view it in the browser.

The page will reload if you edit the source files.<br />

⚠️ You need to install peer dependencies to run the storybook locally.

### `yarn link:all`

Creates a link inside yarn to use this project packages in other projects without needing to publish anything.

This only has to be done once.

### `yarn unlink:all`

Removes the links created using the previous script.

### `npm test`

Runs all unitary tests from components. It also checks the coverage of the code.<br>

It can be executed only for desired tests, using a pattern: `npm test user.test.ts`

### `yarn test:local`

Runs all unitary tests from components in watch mode (i.e. testing again automatically when editing the code). It does not check the code coverage.<br>

It can be executed only for desired tests, using a pattern: `npm test:local user.test.ts`

### `yarn test:local:file $file`

Runs `yarn test:local` including all tests in the repo. Running without the `file` parameter, will run all tests including the puppeteer ones making the test to fail.<br>

The goal of this script is to only run tests matching the `file` parameter pattern.

Example to only execute tests for Focus component:<br/>
`yarn test:local:file Focus.test.tsx` <br/>

If pattern matches any puppeteer test, run including the `__tests__` directory:<br/>
`yarn test:local:file __tests__/.*/Focus.test.tsx`

🛈 You can force doing the coverage check by adding `--coverage` at the end of the command.

### `yarn bootstrap`

Builds all packages using rollup.<br>
The builds are generated inside a `dist` folder on each package.

### `yarn bump:version:[patch | minor | major]`

In order to bump the package's version. previously to push the latests change, it is necessary to run one of this commands

```
yarn bump:version:patch // -> increases the patch version based on semantic versioning x.x.1
yarn bump:version:minor // -> increases the minor version based on semantic versioning x.1.x
yarn bump:version:major // -> increases the major version based on semantic versioning 1.x.x.
```

🚫🚫🚫 **NEVER PUBLISH TO THE PACKAGE NEITHER FROM LOCAL MACHINE NOR ANOTHER BRANCH THAT'S NOT MASTER**🚫🚫🚫
