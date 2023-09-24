/* eslint-disable react-hooks/rules-of-hooks */
import type { Meta, StoryObj } from '@storybook/react';
import {
	TabList,
	TabPanels,
	Wrapper,
} from '../../components/layouts/Tab/Tab.styles';
import TabButton from '../../components/layouts/Tab/TabButton';
import TabPanel from '../../components/layouts/Tab/TabPanel';
import useChangeTab from '../../components/layouts/Tab/useChangeTab';

const meta = {
	title: 'Layout/Tab',
	component: Wrapper,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
} satisfies Meta<typeof Wrapper>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		customCss: {
			width: 520,
		},
	},
	render: (args) => {
		const { customCss } = args;
		const tabs = ['1번탭', '2번탭', '3번탭'];
		const { ids, current, handleClick } = useChangeTab({ tabs });

		const tabMenu = tabs.map((content, index) => (
			<TabButton
				label={content}
				selected={ids[index] === current}
				order={ids[index]}
			/>
		));

		return (
			<Wrapper customCss={customCss}>
				<TabList onClick={handleClick}>{tabMenu}</TabList>
				<TabPanels>
					<TabPanel value={current} order={ids[0]}>
						1번 탭
					</TabPanel>
					<TabPanel value={current} order={ids[1]}>
						2번 탭
					</TabPanel>
					<TabPanel value={current} order={ids[2]}>
						3번 탭
					</TabPanel>
				</TabPanels>
			</Wrapper>
		);
	},
};
