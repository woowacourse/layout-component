import { SyntheticEvent, useRef } from 'react';

interface useChangeTabProps {
	setCurrentIndex: React.Dispatch<React.SetStateAction<number>>;
	changeCallback?: () => void;
}

const useChangeTab = ({
	setCurrentIndex,
	changeCallback,
}: useChangeTabProps) => {
	const selectedRef = useRef<HTMLButtonElement | null>(null);

	const handleClick = (event: SyntheticEvent<HTMLDivElement, MouseEvent>) => {
		if (!(event.target instanceof HTMLButtonElement)) return;
		const { dataset } = event.target;

		const order = dataset['order'];

		if (order) {
			setCurrentIndex(Number(order));

			selectedRef.current = event.target;

			selectedRef.current.scrollIntoView({
				behavior: 'smooth',
				block: 'nearest',
				inline: 'nearest',
			});

			changeCallback && changeCallback();
		}
	};

	return { handleClick };
};

export default useChangeTab;
