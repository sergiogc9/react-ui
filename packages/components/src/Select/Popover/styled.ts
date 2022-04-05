import React from 'react';
import styled from 'styled-components';

import Popover from 'components/Popover';
import Flex from 'components/Flex';

import { SelectPopoverProps } from './types';

const StyledSelectPopover: React.FC<SelectPopoverProps> = styled(Popover.Content)<SelectPopoverProps>`
	&[data-placement='top'] {
		margin-top: 10px;
	}
	&[data-placement='bottom'] {
		margin-bottom: 10px;
	}
`;

StyledSelectPopover.defaultProps = {
	flexDirection: 'column',
	height: 'auto',
	paddingX: 0,
	paddingY: 0
};

const StyledSelectPopoverFooter: React.FC<SelectPopoverProps> = styled(Flex)<SelectPopoverProps>``;

StyledSelectPopoverFooter.defaultProps = {
	alignItems: 'center',
	padding: 3,
	justifyContent: 'space-between',
	height: 64
};

const StyledSelectPopoverEmptyBox: React.FC<SelectPopoverProps> = styled(Flex)<SelectPopoverProps>``;

StyledSelectPopoverEmptyBox.defaultProps = {
	alignItems: 'center',
	fontSize: 2,
	justifyContent: 'center',
	height: 64
};

const StyledPopoverListBox: React.FC<SelectPopoverProps> = styled(Flex)<SelectPopoverProps>``;

StyledPopoverListBox.defaultProps = {
	as: 'ul',
	flexDirection: 'column',
	maxHeight: 200,
	overflowY: 'auto'
};

export { StyledSelectPopover, StyledSelectPopoverEmptyBox, StyledSelectPopoverFooter, StyledPopoverListBox };
