/* eslint-disable react-hooks/rules-of-hooks */
import type { Meta, StoryObj } from '@storybook/react';
import { TabPanels, Wrapper } from '../../components/layouts/Tab/Tab.styles';
import TabButton from '../../components/layouts/Tab/TabButton';
import TabPanel from '../../components/layouts/Tab/TabPanel';
import useChangeTab from '../../components/layouts/Tab/hooks/useChangeTab';
import { JUSTIFIES } from '../../models/FlexTypes';
import TabList from '../../components/layouts/Tab/TabList';

const meta = {
	title: 'Layout/Tab',
	component: TabList,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
	argTypes: {
		justify: {
			control: { type: 'select' },
			options: JUSTIFIES,
			description: 'tab list의 위치',
		},
	},
} satisfies Meta<typeof TabList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	render: (args) => {
		const tabs = ['1번탭', '2번탭', '3번탭'];
		const { ids, current, handleClick } = useChangeTab({ tabs });

		const tabMenu = tabs.map((content, index) => (
			<TabButton label={content} order={ids[index]} value={current} />
		));

		return (
			<Wrapper customCss={{ width: 520 }}>
				<TabList {...args} onClick={handleClick}>
					{tabMenu}
				</TabList>
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

export const Disable: Story = {
	render: (args) => {
		const tabs = ['Active', 'Disable', 'Active'];
		const { ids, current, handleClick } = useChangeTab({ tabs });

		// TODO: tabMenu가 disable일 때 selected 되게 하지 않기
		// current가 disable인지 확인이 필요함..
		const tabMenu = tabs.map((content, index) => (
			<TabButton
				label={content}
				order={ids[index]}
				disabled={index === 1}
				value={current}
			/>
		));

		return (
			<Wrapper customCss={{ width: 520 }}>
				<TabList {...args} onClick={handleClick}>
					{tabMenu}
				</TabList>
			</Wrapper>
		);
	},
};

export const JustifyTab: Story = {
	args: {
		justify: 'center',
	},
	render: (args) => {
		const tabs = ['1번탭', '2번탭', '3번탭'];
		const { ids, current, handleClick } = useChangeTab({ tabs });

		const tabMenu = tabs.map((content, index) => (
			<TabButton label={content} order={ids[index]} value={current} />
		));

		return (
			<Wrapper customCss={{ width: 520 }}>
				<TabList {...args} onClick={handleClick}>
					{tabMenu}
				</TabList>
			</Wrapper>
		);
	},
};

export const TabOverFLow: Story = {
	render: (args) => {
		const tabs = Array.from({ length: 20 }).map(
			(_, index) => `${index + 1}번 탭`
		);
		const { ids, current, handleClick } = useChangeTab({ tabs });

		const tabMenu = tabs.map((content, index) => (
			<TabButton label={content} order={ids[index]} value={current} />
		));

		return (
			<Wrapper customCss={{ width: 520 }}>
				<TabList {...args} onClick={handleClick}>
					{tabMenu}
				</TabList>
			</Wrapper>
		);
	},
};
