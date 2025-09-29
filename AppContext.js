import { createContext, useState, useRef } from 'react'
import { bg_color, main_color } from './constants.js'

const AppContext = createContext(null);

const AppProvider = ({ children }) => {
	const [wordleGrid, setWordleGrid] = useState(
 		Array(6).fill().map(() =>
    		Array(5).fill().map(() => 
				({ value: ' ', color: bg_color })
			)
		)
	);

	const [lastEntry, setLastEntry] = useState(null);
	const finishedRow = useRef(-1);
	const wordle = useRef(null);
	const [wordleGuessed, setWordleGuessed] = useState(false);

	return(
		<AppContext.Provider
			value={
				{
				wordleGrid, setWordleGrid, 
				finishedRow, 
				wordle,
				wordleGuessed, setWordleGuessed
				}}
		> 
			{children}
		</AppContext.Provider>
	);
}

export { AppContext, AppProvider } 
