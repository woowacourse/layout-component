import { CSSObject } from '@emotion/react';
import { Wrapper } from './Container.styles';

type TagType = Pick<
	HTMLElementTagNameMap,
	'div' | 'section' | 'main' | 'header'
>;

interface ContainerProps extends React.PropsWithChildren {
	tag?: keyof TagType;
	minWidth: number;
	maxWidth: number;
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
