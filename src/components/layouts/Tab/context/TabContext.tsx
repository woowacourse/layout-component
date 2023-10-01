import {
	Dispatch,
	ReactNode,
	SetStateAction,
	createContext,
	useState,
} from 'react';

export type TabsContextProps = {
	currentIndex: number;
	setCurrentIndex: Dispatch<SetStateAction<number>>;
};

type TabsProviderProps = {
	children: ReactNode;
};

const initialContext: TabsContextProps = {
	currentIndex: 0,
	setCurrentIndex: () => {},
};

export const TabsContext = createContext<TabsContextProps>(initialContext);

const TabsProvider = ({ children }: TabsProviderProps) => {
	const [currentIndex, setCurrentIndex] = useState<number>(0);

	return (
		<TabsContext.Provider value={{ currentIndex, setCurrentIndex }}>
			{children}
		</TabsContext.Provider>
	);
};

export default TabsProvider;
