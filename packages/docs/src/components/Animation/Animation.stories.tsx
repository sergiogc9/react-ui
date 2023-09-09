import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { keyframes } from 'styled-components';
import { Button } from '@sergiogc9/react-ui';

import Animation from 'components/Animation';
import AnimationDecorator, { AnimationListDecorator } from 'storybook/decorators/Animation';
import { getExcludedArgTypes } from 'storybook/parameters';

type Story = StoryObj<typeof Animation>;

const meta: Meta<typeof Animation.Animate> = {
	title: 'Components/Animation',
	component: Animation.Animate,
	argTypes: getExcludedArgTypes()
};

export default meta;

const CustomAnimation = keyframes`
  from {
    transform: scale(1) translateX(0);
  }

  50% {
    transform: scale(1.5) translateX(75px);
  }

  to {
    transform: scale(1) translateX(150px);
  }
`;

const AnimatedButton = Animation.withBaseAnimation(Button, Animation.FadeInAnimation);

const CustomAnimatedButton = Animation.withBaseAnimation(Button, CustomAnimation);

const ButtonAnimate = Animation.withAnimate(Button);

export const Playground: Story = {
	decorators: [AnimationDecorator],
	render: args => {
		return <Animation.FadeIn {...args}>Awesome title</Animation.FadeIn>;
	}
};

export const PlaygroundMultiple: Story = {
	decorators: [AnimationDecorator],
	render: args => {
		return (
			<Animation.Animate
				{...args}
				animation={[Animation.FadeInAnimation, CustomAnimation, Animation.FadeOutAnimation, Animation.FadeInAnimation]}
				duration={['2s', '1s', '1s', '2s']}
			>
				This library rocks!
			</Animation.Animate>
		);
	}
};

export const FadeIn: Story = {
	decorators: [AnimationDecorator],
	render: args => {
		return (
			<Animation.FadeIn {...args} duration="2s">
				This library rocks!
			</Animation.FadeIn>
		);
	},
	parameters: {
		docs: {
			source: {
				code: `<Animation.FadeIn duration="2s">This library rocks!</Animation.FadeIn>`
			}
		}
	}
};

export const FadeOut: Story = {
	decorators: [AnimationDecorator],
	render: args => {
		return (
			<Animation.FadeOut {...args} duration="2s">
				This library rocks!
			</Animation.FadeOut>
		);
	}
};

export const SlideDown: Story = {
	decorators: [AnimationDecorator],
	render: args => {
		return (
			<Animation.SlideDown {...args} duration="2s">
				This library rocks!
			</Animation.SlideDown>
		);
	}
};

export const SlideUp: Story = {
	decorators: [AnimationDecorator],
	render: args => {
		return (
			<Animation.SlideUp {...args} duration="2s">
				This library rocks!
			</Animation.SlideUp>
		);
	}
};

export const WithCustomComponent: Story = {
	decorators: [AnimationDecorator],
	render: args => {
		return (
			<AnimatedButton {...args} duration="2s">
				This library rocks!
			</AnimatedButton>
		);
	},
	parameters: {
		docs: {
			source: {
				code: `
import { Animation, Button } from '@sergiogc9/react-ui';

const AnimatedButton = Animation.withBaseAnimation(
	Button,
	Animation.FadeInAnimation
);

<AnimatedButton duration="2s">This library rocks!</AnimatedButton>`
			}
		}
	}
};

export const WithCustomAnimation: Story = {
	decorators: [AnimationDecorator],
	render: args => {
		return (
			<CustomAnimatedButton {...args} duration="2s">
				This library rocks!
			</CustomAnimatedButton>
		);
	},
	parameters: {
		docs: {
			source: {
				code: `
import { keyframes } from 'styled-components';
import { Animation, Button } from '@sergiogc9/react-ui';

const CustomAnimation = keyframes\`
  from {
		transform: scale(.5) translateX(0);
  }
  50% {
		transform: scale(1.5) translateX(75px);
  }
  to {
		transform: scale(1) translateX(150px);
  }
\`;

const CustomAnimatedButton = Animation.withBaseAnimation(
	Button,
	CustomAnimation
);

<CustomAnimatedButton duration="2s">This library rocks!</CustomAnimatedButton>`
			}
		}
	}
};

export const WithMultipleAnimations: Story = {
	decorators: [AnimationDecorator],
	render: args => {
		return (
			<Animation.Animate
				{...args}
				animation={[CustomAnimation, CustomAnimation, Animation.FadeOutAnimation, Animation.FadeInAnimation]}
				direction={['normal', 'reverse', 'normal', 'normal']}
				duration={['1s', '2000ms', '2.5s', '2s']}
			>
				This library rocks!
			</Animation.Animate>
		);
	},
	parameters: {
		docs: {
			source: {
				code: `
import { keyframes } from 'styled-components';
import { Animation, Button } from '@sergiogc9/react-ui';

const CustomAnimation = keyframes\`
  from {
		transform: scale(.5) translateX(0);
  }
  50% {
		transform: scale(1.5) translateX(75px);
  }
  to {
		transform: scale(1) translateX(150px);
  }
\`;

<Animation.Animate
  animation={[
		CustomAnimation,
		CustomAnimation,
		Animation.FadeOutAnimation,
		Animation.FadeInAnimation
  ]}
  direction={['normal', 'reverse', 'normal', 'normal']}
  duration={['1s', '2000ms', '2.5s', '2s']}
>
  This library rocks!
</Animation.Animate>`
			}
		}
	}
};

export const WithExistingComponentWithMultipleAnimations: Story = {
	decorators: [AnimationDecorator],
	render: args => {
		return (
			<ButtonAnimate
				{...args}
				animation={[CustomAnimation, CustomAnimation, Animation.FadeOutAnimation, Animation.FadeInAnimation]}
				direction={['normal', 'reverse', 'normal', 'normal']}
				duration={['1s', '2000ms', '2.5s', '2s']}
			>
				This library rocks!
			</ButtonAnimate>
		);
	},
	parameters: {
		docs: {
			source: {
				code: `
import { keyframes } from 'styled-components';
import { Animation, Button } from '@sergiogc9/react-ui';

const CustomAnimation = keyframes\`
  from {
	transform: scale(.5) translateX(0);
  }
  50% {
	transform: scale(1.5) translateX(75px);
  }
  to {
	transform: scale(1) translateX(150px);
  }
\`;

const ButtonAnimate = Animation.withAnimate(Button);

<ButtonAnimate
  animation={[
	CustomAnimation,
	CustomAnimation,
	Animation.FadeOutAnimation,
	Animation.FadeInAnimation
  ]}
  direction={['normal', 'reverse', 'normal', 'normal']}
  duration={['1s', '2000ms', '2.5s', '2s']}
>
  This library rocks!
</ButtonAnimate>`
			}
		}
	}
};

type AnimationListStory = StoryObj<typeof Animation.List>;

export const AnimationList: AnimationListStory = {
	decorators: [AnimationListDecorator],
	render: args => {
		return <Animation.List {...args} />;
	},
	parameters: {
		docs: {
			source: {
				code: `
import { keyframes } from 'styled-components';
import { Animation, Button } from '@sergiogc9/react-ui';

const appearAnimation = keyframes\`
  from {
		  max-height:0;
		  opacity: 0;
  }
  to {
		  max-height: 50px;
		  opacity: 1;
  }
\`;

<Animation.List>
  {items.map((item) => (
			<Animation.BaseAnimation
			  animation={appearAnimation}
			  key={item.key}
			>
			  <Text color="primary.500">{item.name}</Text>
		</Animation.BaseAnimation>
	  ))}
</Animation.List>`
			}
		}
	}
};
