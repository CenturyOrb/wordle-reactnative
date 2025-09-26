import { createContext, useState } from 'react'

const AppContext = createContext(null);

const AppProvider = ({ children }) => {
	const [wordleGrid, setWordleGrid] = useState(Array(6).fill(null).map(() => Array(5).fill(' ')));	

	return(
		<AppContext.Provider
			value={{wordleGrid, setWordleGrid}}
		> 
			{children}
		</AppContext.Provider>
	);
}

export { AppContext, AppProvider } 
