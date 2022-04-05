import styled from 'styled-components';

import Flex from 'components/Flex';
import aspectSize from './variants/aspectSize';
import variant from './variants/variant';
import { AvatarProps } from './types';

const StyledAvatar: React.FC<AvatarProps> = styled(Flex)<AvatarProps>`
	overflow: hidden;
	position: relative;
	flex-shrink: 0;
	display: flex;
	justify-content: center;
	align-items: center;

	> img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		object-position: 50% 50%;
	}

	> span {
		color: #fff;
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100%;
		font-weight: bold;
	}

	> svg {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100%;
	}

	${props => aspectSize(props)};
	${({ theme }) => variant(theme)};
`;

export default StyledAvatar;
