import React from 'react';
import { StoryProps as SBStoryProps } from '@storybook/addon-docs/blocks';

type CustomProps = { include: string[]; exclude: [] };

export type ArgsTableProps = CustomProps & { of: React.ComponentType };
export type StoryProps = SBStoryProps & CustomProps & { isPlayground?: boolean };
