import { CSSObject } from '@emotion/react';
import { Wrapper } from './Container.styles';
import { ContainerTagType } from '../../../models/TagTypes';
import { ValueUnit } from '../../../models/utils';

export interface ContainerProps extends React.PropsWithChildren {
	tag?: keyof ContainerTagType;
	minWidth: ValueUnit;
	maxWidth: ValueUnit;
	customCss?: CSSObject;
}

const Container = (props: ContainerProps) => {
	const { tag = 'div', minWidth, maxWidth, customCss, children } = props;
	return (
		<Wrapper
			as={tag}
			minWidth={minWidth}
			maxWidth={maxWidth}
			customCss={customCss}
		>
			{children}
		</Wrapper>
	);
};

export default Container;
