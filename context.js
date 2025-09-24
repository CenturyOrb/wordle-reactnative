import { createContext, useState, useEffect } from 'react'

export const GridContext = createContext(null);

export function GridProvider({ children }) {
	const [wordleGrid, setWordleGrid] = useState(
		Array(6)
  			.fill(null)
  			.map(() => Array(5).fill(' '))
	);

	useEffect(() => {
		console.log(wordleGrid);
	}, [wordleGrid]);
		
	return (
		<GridContext.Provider value={{wordleGrid, setWordleGrid}}>
			{children}
		</GridContext.Provider>	
	);
}
