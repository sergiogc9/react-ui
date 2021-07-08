import { addDecorator, addParameters } from '@storybook/react';
import { DocsPage, DocsContainer } from '@storybook/addon-docs/blocks';

import ThemeDecorator from 'storybook/decorators/Theme';

addDecorator(ThemeDecorator);
addParameters({
  docs: {
    container: DocsContainer,
    page: DocsPage
  },
  controls: { expanded: true },
  layout: 'centered',
  options: {
    storySort: {
      order: ['Theme', 'Components']
    }
  }
});
