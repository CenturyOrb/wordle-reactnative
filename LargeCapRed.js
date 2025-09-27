import { useState, useContext } from 'react'
import { Text, Pressable, StyleSheet } from 'react-native'
import { AppContext } from './AppContext.js'
import { textWhite, red_color, redDark_color } from './constants.js'

export default function LargeCap({ children }) {
	const [backgroundColor, setBackgroundColor] = useState({backgroundColor: red_color});		
	const { wordleGrid, setWordleGrid, finishedRow } = useContext(AppContext);
    
    const handleKeyPressIn = () => {
    	setBackgroundColor({backgroundColor: redDark_color});
		// find the current row, last letter
		const wordleGridCopy = structuredClone(wordleGrid);            				
		// currentRow is the current unEntered Row 
        const currentRow = wordleGridCopy[finishedRow.current+1];
        if (!currentRow) { 
        	console.log('all rows filled');
      	}
		// index of the last letter
		// will return -1 if there are no letters left in the currentRow
        const index = currentRow.findLastIndex(boxObj => boxObj.value !== ' ' );	
		if (index !== -1) { currentRow[index].value = ' ' }
        setWordleGrid(wordleGridCopy);
    }
    
    const handleKeyPressOut = () => {
    	setBackgroundColor({backgroundColor: red_color});
    }

	return (
		<Pressable 
			style={[styles.keycap, backgroundColor]}
			onPressIn={handleKeyPressIn}
			onPressOut={handleKeyPressOut}
		>
			<Text style={[textWhite, styles.letter]}>{children}</Text>
		</Pressable>
	);
}

const styles = StyleSheet.create({
	keycap: { 
		flex: 1,
		borderRadius: 5,
		justifyContent: 'center',
	},
	letter: {
    	textAlign: 'center',
    	fontWeight: 500,
    	fontSize: 18 
    }
});
