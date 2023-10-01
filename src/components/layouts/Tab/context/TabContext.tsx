import {
	CSSProperties,
	Dispatch,
	ReactNode,
	SetStateAction,
	createContext,
	useState,
} from 'react';

interface CurrentStyleProps {
	color?: CSSProperties['color'];
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
};

export type TabsContextProps = TabsIndexProps & TabsStyleProps;

const initialContext: TabsContextProps = {
	currentIndex: 0,
	setCurrentIndex: () => {},
	currentStyle: { color: 'green' },
	setCurrentStyle: () => {},
};

export const TabsContext = createContext<TabsContextProps>(initialContext);

const TabsProvider = ({ children }: TabsProviderProps) => {
	const [currentIndex, setCurrentIndex] = useState<number>(0);
	const [currentStyle, setCurrentStyle] = useState<CurrentStyleProps>({
		color: 'green',
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
