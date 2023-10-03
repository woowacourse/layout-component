import { useLayoutEffect, useRef, useState } from 'react';
import { MIN_TAB_LENGTH } from '../../../../constants';
import useTabsContext from './useTabContext';

interface useTabButtonProps {
	children: JSX.Element[];
	moveButton: boolean;
}

const useTabButton = ({ children, moveButton }: useTabButtonProps) => {
	const tabContainerRef = useRef<HTMLDivElement>(null);
	const tabListRef = useRef<HTMLDivElement>(null);

	const [showButton, setShowButton] = useState(false);
	const countArray = children.length;

	const {
		currentStyle: { direction = 'horizon' },
	} = useTabsContext();

	useLayoutEffect(() => {
		if (!tabContainerRef.current) return;
		const { width } = tabContainerRef.current.getBoundingClientRect();
		const isOverFlow = moveButton && width <= countArray * MIN_TAB_LENGTH;

		setShowButton(isOverFlow);
	}, [countArray, moveButton]);

	const scrollTabHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
		const tabList = tabListRef.current;
		const containerRect = tabContainerRef.current?.getBoundingClientRect();

		if (!showButton || !tabList || !containerRect) return;
		const { dataset } = event.currentTarget;

		if (dataset['direction'] === 'prev') {
			if (direction === 'horizon') {
				tabList.scrollLeft -= containerRect.width;
			} else {
				tabList.scrollTop -= containerRect.height;
			}
			return;
		}

		if (dataset['direction'] === 'next') {
			if (direction === 'horizon') {
				tabList.scrollLeft += containerRect.width;
			} else {
				tabList.scrollTop += containerRect.height;
			}
			return;
		}
	};

	return { tabContainerRef, tabListRef, scrollTabHandler, showButton };
};

export default useTabButton;
