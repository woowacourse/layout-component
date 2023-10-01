import {
	CSSProperties,
	Dispatch,
	ReactNode,
	SetStateAction,
	createContext,
	useState,
} from 'react';
import { Direction } from '../../../../models/TabTypes';

interface CurrentStyleProps {
	color?: CSSProperties['color'];
	direction?: Direction;
}

type TabsStyleProps = {
	currentStyle: CurrentStyleProps;
	setCurrentStyle: Dispatch<SetStateAction<CurrentStyleProps>>;
};

type TabsIndexProps = {
	currentIndex: number;
	setCurrentIndex: Dispatch<SetStateAction<number>>;
};

type TabsProviderProps = {
	children: ReactNode;
	direction?: Direction;
};

export type TabsContextProps = TabsIndexProps & TabsStyleProps;

export const TabsContext = createContext<TabsContextProps | null>(null);

const TabsProvider = ({
	children,
	direction = 'horizon',
}: TabsProviderProps) => {
	const [currentIndex, setCurrentIndex] = useState<number>(0);
	const [currentStyle, setCurrentStyle] = useState<CurrentStyleProps>({
		color: 'green',
		direction,
	});

	return (
		<TabsContext.Provider
			value={{ currentIndex, setCurrentIndex, currentStyle, setCurrentStyle }}
		>
			{children}
		</TabsContext.Provider>
	);
};

export default TabsProvider;
