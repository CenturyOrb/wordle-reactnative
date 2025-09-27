import { useState, useContext } from 'react'
import { Text, Pressable, StyleSheet } from 'react-native'
import { AppContext } from './AppContext.js'
import { textWhite, green_color, greenDark_color } from './constants.js'

export default function LargeCap({ children }) {
	const [backgroundColor, setBackgroundColor] = useState({backgroundColor: green_color});	
	const { wordleGrid, finishedRow, wordle } = useContext(AppContext);
    
    const handleKeyPressIn = () => {
    	setBackgroundColor({backgroundColor: greenDark_color});
    }
    
    const handleKeyPressOut = () => {
    	setBackgroundColor({backgroundColor: green_color});
		// check if the row is full, if so then incremeent row
		const wordleGridCopy = structuredClone(wordleGrid);
		const currentRow = wordleGridCopy[finishedRow.current+1];
		const isEmpty = currentRow.findIndex(boxObj => boxObj.value === ' ') !== -1;
		if (isEmpty) return;
		// full row check if the word is correct, otherwise go to next row
		const word = currentRow.map(boxObj => boxObj.value).join('');
		if (word === wordle.current) {
			// end the game here
			console.log('end game here');
		} else { 
			// change colors of current row
			console.log('next line');
			finishedRow.current++;
		}
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
		justifyContent: 'center'
	},
	letter: {
    	textAlign: 'center',
    	fontWeight: 500,
    	fontSize: 18 
    }
});
