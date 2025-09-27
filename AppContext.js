import { createContext, useState, useRef } from 'react'
import { bg_color } from './constants.js'

const AppContext = createContext(null);

const AppProvider = ({ children }) => {
	const [wordleGrid, setWordleGrid] = useState(Array(6).fill(null).map(() => Array(5).fill({value: ' ', color: bg_color})));	
	const [lastEntry, setLastEntry] = useState(null);
	const finishedRow = useRef(-1);
	const wordle = useRef(null);

	return(
		<AppContext.Provider
			value={{wordleGrid, setWordleGrid, finishedRow, wordle}}
		> 
			{children}
		</AppContext.Provider>
	);
}

export { AppContext, AppProvider } 
