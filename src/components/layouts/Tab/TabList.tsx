import styled from '@emotion/styled';
import { Justify } from '../../../models/FlexTypes';
import {
	Children,
	PropsWithChildren,
	useLayoutEffect,
	useRef,
	useState,
} from 'react';
import { MIN_TAB_LENGTH } from '../../../constants';

export interface TableListProps extends PropsWithChildren {
	justify?: Justify;
	onClick: (event: React.SyntheticEvent<HTMLDivElement, MouseEvent>) => void;
}

const TabList = (props: TableListProps) => {
	const { justify = 'left', onClick, children } = props;

	const tabContainerRef = useRef<HTMLDivElement>(null);
	const tabListRef = useRef<HTMLDivElement>(null);

	const [showButton, setShowButton] = useState(false);
	const countArray = Children.toArray(children).length;

	useLayoutEffect(() => {
		if (!tabContainerRef.current) return;
		const { width } = tabContainerRef.current.getBoundingClientRect();
		const isOverFlow = width <= countArray * MIN_TAB_LENGTH;

		setShowButton(isOverFlow);
	}, [countArray]);

	const scrollTabHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
		const tabList = tabListRef.current;
		const containerRect = tabContainerRef.current?.getBoundingClientRect();

		if (!showButton || !tabList || !containerRect) return;
		const { dataset } = event.currentTarget;

		if (dataset['direction'] === 'prev') {
			tabList.scrollLeft -= containerRect.width;
			return;
		}

		if (dataset['direction'] === 'next') {
			tabList.scrollLeft += containerRect.width;
			return;
		}
	};

	return (
		<Wrapper ref={tabContainerRef} onClick={onClick} justify={justify}>
			<Button
				type='button'
				onClick={scrollTabHandler}
				data-direction='prev'
				show={showButton}
			>{`<`}</Button>
			<TabContainer ref={tabListRef}>{children}</TabContainer>
			<Button
				type='button'
				onClick={scrollTabHandler}
				data-direction='next'
				show={showButton}
			>{`>`}</Button>
		</Wrapper>
	);
};

export default TabList;

const Wrapper = styled.div<{
	justify: Justify;
}>`
	position: relative;

	display: flex;
	gap: 4px;
	justify-content: ${({ justify }) => justify && justify};

	height: 100%;
	padding: 0;

	border-bottom: solid 0.5px rgba(0, 0, 0, 0.7);
`;

const Button = styled.button<{ show: boolean }>`
	cursor: pointer;

	display: ${({ show }) => (show ? 'inline-flex' : 'none')};
	align-items: center;

	width: 20px;

	background: transparent;
	border: none;
`;

const TabContainer = styled.div`
	scroll-behavior: smooth;

	position: relative;

	overflow: auto hidden;
	display: inline-flex;
	flex: 1 1 auto;

	max-width: calc(100%-40px);

	white-space: nowrap;

	::-webkit-scrollbar {
		display: none;
	}
`;
