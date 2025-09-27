import { useState, useContext } from 'react'
import { Text, Pressable, StyleSheet } from 'react-native'
import { AppContext } from './AppContext.js'
import { textWhite, green_color, greenDark_color } from './constants.js'

export default function LargeCap({ children }) {
	const [backgroundColor, setBackgroundColor] = useState({backgroundColor: green_color});	
	const { wordleGrid, setWordleGrid, finishedRow } = useContext(AppContext);
    
    const handleKeyPressIn = () => {
    	setBackgroundColor({backgroundColor: greenDark_color});
    }
    
    const handleKeyPressOut = () => {
    	setBackgroundColor({backgroundColor: green_color});
		// check if the row is full, if so then incremeent row
		const wordleGridCopy = structuredClone(wordleGrid);
		const currentRow = wordleGridCopy[finishedRow.current+1];
		console.log(currentRow);
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
