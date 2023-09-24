import { Children, useState } from 'react';
import { MouseEventHandler, PropsWithChildren, useCallback } from 'react';
import { ContainerTagType } from '../../../models/TagTypes';

export interface TabProps extends PropsWithChildren {
	tag?: keyof ContainerTagType;
	tabs: string[];
}
// tabs의 순서와 children의 순서가 일치할 것

const TabLayout = (props: TabProps) => {
	const { tabs, children } = props;
	const childrenArray = Children.toArray(children);

	const [selected, setSelected] = useState(0);

	const tabData = tabs.map((title, index) => {
		if (Array.isArray(childrenArray) && childrenArray.length > 0) {
			return {
				title,
				content: childrenArray[index],
			};
		}

		return {
			title,
			content: null,
		};
	});

	const tabHandler: MouseEventHandler<HTMLButtonElement> = useCallback(
		(event) => {
			const { dataset } = event.currentTarget;
			const currentSelected = Number(dataset['order']);
			setSelected(currentSelected);
		},
		[setSelected]
	);

	const head = tabs.map((content, index) => (
		<button type='button' onClick={tabHandler} data-order={index}>
			{content}
		</button>
	));

	return (
		<div>
			<header>{head}</header>
			{tabData[selected].content}
		</div>
	);
};

export default TabLayout;
