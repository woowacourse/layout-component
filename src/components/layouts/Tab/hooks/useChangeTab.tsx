import { SyntheticEvent, useId, useRef, useState } from 'react';

interface useChangeTabProps {
	tabs: string[];
	changeCallback?: () => void;
}

const useChangeTab = ({ tabs, changeCallback }: useChangeTabProps) => {
	const length = tabs.length;

	const id = useId();
	const orders = Array.from({ length }).map((_, index) => id + index + 1);

	const selectedRef = useRef<HTMLButtonElement | null>(null);

	const ids = [...orders] as const;

	const [current, setCurrent] = useState<(typeof ids)[number]>(ids[0]);

	const handleClick = (event: SyntheticEvent<HTMLDivElement, MouseEvent>) => {
		if (!(event.target instanceof HTMLButtonElement)) return;
		const { dataset } = event.target;

		const order = dataset['order'];

		if (order) {
			setCurrent(order);

			selectedRef.current = event.target;

			selectedRef.current.scrollIntoView({
				behavior: 'smooth',
				block: 'end',
				inline: 'nearest',
			});

			changeCallback && changeCallback();
		}
	};

	return { ids, handleClick, current };
};

export default useChangeTab;
