import { CSSObject } from '@emotion/react';
import { ContainerTagType } from '../../../models/TagTypes';
import { Wrapper } from './Flex.styles';
import { Align, Direction, Justify, Wrap } from '../../../models/FlexTypes';
import { ValueUnit } from '../../../models/utils';

export interface FlexProps extends React.PropsWithChildren {
	tag?: keyof ContainerTagType;
	direction: Direction;
	justify: Justify;
	align: Align;
	wrap: Wrap;
	gap?: ValueUnit;
	customCss?: CSSObject;
}

const Flex = (props: FlexProps) => {
	const {
		children,
		tag = 'div',
		direction,
		justify,
		align,
		wrap,
		gap = '0px',
		customCss,
	} = props;
	return (
		<Wrapper
			as={tag}
			direction={direction}
			justify={justify}
			align={align}
			wrap={wrap}
			gap={gap}
			customCss={customCss}
		>
			{children}
		</Wrapper>
	);
};

export default Flex;
