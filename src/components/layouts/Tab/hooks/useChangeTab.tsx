import { SyntheticEvent, useId, useState } from 'react';

interface useChangeTabProps {
	tabs: string[];
	changeCallback?: () => void;
}

const useChangeTab = ({ tabs, changeCallback }: useChangeTabProps) => {
	const length = tabs.length;

	const id = useId();
	const orders = Array.from({ length }).map((_, index) => id + index + 1);

	const ids = [...orders] as const;

	const [current, setCurrent] = useState(ids[0]);

	const handleClick = (event: SyntheticEvent<HTMLDivElement, MouseEvent>) => {
		if (event.target instanceof HTMLButtonElement) {
			const { dataset } = event.target;
			const order = dataset['order'];
			if (order) {
				setCurrent(order);
				changeCallback && changeCallback();
			}
		}
	};

	return { ids, handleClick, current };
};

export default useChangeTab;
