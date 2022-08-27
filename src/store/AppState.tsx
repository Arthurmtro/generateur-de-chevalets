import { useState, createContext, useMemo, useContext } from 'react';

type AppState = {
	isLoading: boolean;
	csvFile?: File;
	logo?: File;
	nameList: {
		firstName: string;
		lastName: string;
	}[];
	footer?: string;
};

type AppStateContextProps = {
	state: AppState;
	dispatch: React.Dispatch<React.SetStateAction<AppState>>;
};

type AppStateProviderProps = {
	children: React.ReactNode;
};

const DEFAULT_VALUE: AppState = {
	isLoading: false,
	nameList: [{ firstName: '', lastName: '' }],
};

export const AppStateContext = createContext<AppStateContextProps>({
	state: DEFAULT_VALUE,
	dispatch: () => {},
} as AppStateContextProps);

export const AppStateProvider = ({ children }: AppStateProviderProps) => {
	const [appState, setAppState] = useState<AppState>(DEFAULT_VALUE);

	const value = useMemo<AppStateContextProps>(
		() => ({
			state: appState,
			dispatch: setAppState,
		}),
		[appState]
	);

	return (
		<AppStateContext.Provider value={value}>
			{children}
		</AppStateContext.Provider>
	);
};

const useAppState = () => useContext(AppStateContext);

export default useAppState;
