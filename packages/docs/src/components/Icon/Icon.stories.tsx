import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { faHeart, faImage } from '@fortawesome/free-solid-svg-icons';

import Flex from 'components/Flex';
import Icon, { IconProps } from 'components/Icon';
import icons from 'components/Icon/icons';
import { Icon as IconType, IconStyling } from 'components/Icon/types';
import { getExcludedArgTypes } from 'storybook/parameters';
import { IconContainer, IconName, IconsDecorator } from 'storybook/decorators/Icon';

type Story = StoryObj<typeof Icon>;

const meta: Meta<typeof Icon> = {
	title: 'Components/Icon',
	component: Icon,
	argTypes: getExcludedArgTypes(['fill']),
	args: {
		aspectSize: 'l',
		icon: 'add-a-photo',
		styling: 'filled',
		fill: 'primary.500'
	}
};

export default meta;

export const Playground: Story = {
	decorators: [IconsDecorator],
	render: args => {
		return <Icon {...args} />;
	}
};

const sizes: Array<NonNullable<IconProps['aspectSize']>> = ['xs', 's', 'm', 'l', 'xl'];

export const Sizes: Story = {
	argTypes: {
		aspectSize: { table: { disable: true } }
	},
	render: args => {
		return (
			<Flex alignItems="center" gap={3}>
				{sizes.map(size => (
					<Icon {...args} key={size} aspectSize={size} />
				))}
			</Flex>
		);
	}
};

export const WithThemeColor: Story = {
	args: { fill: 'primary.500' },
	decorators: [IconsDecorator],
	render: args => {
		return <Icon {...args} />;
	}
};

export const WithCustomColor: Story = {
	args: { fill: '#FFA500' },
	decorators: [IconsDecorator],
	render: args => {
		return <Icon {...args} />;
	}
};

const renderIcon = (icon: IconType, styling: IconStyling, props: IconProps) => {
	if (!icons[styling][icon]) return null;
	return (
		<IconContainer key={icon}>
			<Icon {...props} styling={styling} icon={icon} />
			<IconName>{icon}</IconName>
		</IconContainer>
	);
};

export const FilledSample: Story = {
	argTypes: { styling: { table: { disable: true } } },
	args: { styling: 'filled' },
	decorators: [IconsDecorator],
	render: args => {
		return <Icon {...args} />;
	}
};

export const FilledIcons: Story = {
	argTypes: { icon: { table: { disable: true } }, styling: { table: { disable: true } } },
	args: { styling: 'filled' },
	render: args => {
		return (
			<Flex flexWrap="wrap">{Object.keys(icons.filled).map((icon: any) => renderIcon(icon, 'filled', args))}</Flex>
		);
	}
};

export const OutlinedSample: Story = {
	argTypes: { styling: { table: { disable: true } } },
	args: { styling: 'outlined' },
	decorators: [IconsDecorator],
	render: args => {
		return <Icon {...args} />;
	}
};

export const OutlinedIcons: Story = {
	argTypes: { icon: { table: { disable: true } }, styling: { table: { disable: true } } },
	args: { styling: 'outlined' },
	render: args => {
		return (
			<Flex flexWrap="wrap">{Object.keys(icons.outlined).map((icon: any) => renderIcon(icon, 'outlined', args))}</Flex>
		);
	}
};

export const CustomIcon: Story = {
	argTypes: { icon: { table: { disable: true } } },
	args: {
		content: (
			<path d="M23,12l-2.44-2.79l0.34-3.69l-3.61-0.82L15.4,1.5L12,2.96L8.6,1.5L6.71,4.69L3.1,5.5L3.44,9.2L1,12l2.44,2.79l-0.34,3.7 l3.61,0.82L8.6,22.5l3.4-1.47l3.4,1.46l1.89-3.19l3.61-0.82l-0.34-3.69L23,12z M10.09,16.72l-3.8-3.81l1.48-1.48l2.32,2.33 l5.85-5.87l1.48,1.48L10.09,16.72z" />
		),
		fill: 'green.500',
		icon: undefined,
		styling: undefined
	},
	render: args => {
		return <Icon {...args} />;
	}
};

export const SizesFontAwesome: Story = {
	args: { styling: undefined },
	argTypes: {
		aspectSize: { table: { disable: true } },
		icon: { table: { disable: true } },
		styling: { table: { disable: true } }
	},
	render: args => {
		return (
			<Flex alignItems="center" gap={5}>
				{sizes.map(size => (
					<Icon.FontAwesome {...(args as any)} key={size} aspectSize={size} icon={faImage} />
				))}
			</Flex>
		);
	}
};

export const FontAwesomeThemeColor: Story = {
	args: {
		fill: 'green.500',
		styling: undefined
	},
	argTypes: {
		icon: { table: { disable: true } },
		styling: { table: { disable: true } }
	},
	render: args => {
		return <Icon.FontAwesome {...(args as any)} icon={faImage} />;
	}
};

export const FontAwesomeCustomColor: Story = {
	args: {
		fill: '#FFA500',
		styling: undefined
	},
	argTypes: {
		icon: { table: { disable: true } },
		styling: { table: { disable: true } }
	},
	render: args => {
		return <Icon.FontAwesome {...(args as any)} icon={faImage} />;
	}
};

export const FontAwesomeRotation: Story = {
	args: {
		fill: 'red.400',
		styling: undefined
	},
	argTypes: {
		icon: { table: { disable: true } },
		styling: { table: { disable: true } }
	},
	render: args => {
		return <Icon.FontAwesome fill="red.400" {...(args as any)} icon={faHeart} rotation={90} />;
	}
};

export const FontAwesomeFlip: Story = {
	args: {
		fill: 'red.400',
		styling: undefined
	},
	argTypes: {
		icon: { table: { disable: true } },
		styling: { table: { disable: true } }
	},
	render: args => {
		return <Icon.FontAwesome fill="red.400" {...(args as any)} icon={faHeart} flip="vertical" />;
	}
};

export const FontAwesomeBeatAnimation: Story = {
	args: {
		fill: 'red.400',
		styling: undefined
	},
	argTypes: {
		icon: { table: { disable: true } },
		styling: { table: { disable: true } }
	},
	render: args => {
		return <Icon.FontAwesome fill="red.400" {...(args as any)} icon={faHeart} beat />;
	}
};

export const FontAwesomeBounceAnimation: Story = {
	args: {
		fill: 'red.400',
		styling: undefined
	},
	argTypes: {
		icon: { table: { disable: true } },
		styling: { table: { disable: true } }
	},
	render: args => {
		return <Icon.FontAwesome fill="red.400" {...(args as any)} icon={faHeart} bounce />;
	}
};

export const FontAwesomeFadeAnimation: Story = {
	args: {
		fill: 'red.400',
		styling: undefined
	},
	argTypes: {
		icon: { table: { disable: true } },
		styling: { table: { disable: true } }
	},
	render: args => {
		return <Icon.FontAwesome fill="red.400" {...(args as any)} icon={faHeart} fade />;
	}
};

export const FontAwesomeShakeAnimation: Story = {
	args: {
		fill: 'red.400',
		styling: undefined
	},
	argTypes: {
		icon: { table: { disable: true } },
		styling: { table: { disable: true } }
	},
	render: args => {
		return <Icon.FontAwesome fill="red.400" {...(args as any)} icon={faHeart} shake />;
	}
};

export const FontAwesomeSpinAnimation: Story = {
	args: {
		fill: 'red.400',
		styling: undefined
	},
	argTypes: {
		icon: { table: { disable: true } },
		styling: { table: { disable: true } }
	},
	render: args => {
		return <Icon.FontAwesome fill="red.400" {...(args as any)} icon={faHeart} spin />;
	}
};

export const FontAwesomeWithBorder: Story = {
	args: {
		fill: 'red.400',
		styling: undefined
	},
	argTypes: {
		icon: { table: { disable: true } },
		styling: { table: { disable: true } }
	},
	render: args => {
		return (
			<Icon.FontAwesome
				fill="red.400"
				{...(args as any)}
				icon={faHeart}
				border
				style={{ '--fa-border-color': '#FF6D6C' }}
			/>
		);
	}
};
