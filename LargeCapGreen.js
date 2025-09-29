import { useState, useContext } from 'react'
import { Text, Pressable, StyleSheet } from 'react-native'
import { AppContext } from './AppContext.js'
import { textWhite, green_color, greenDark_color, gray_color, yellow_color, Status } from './constants.js'

export default function LargeCap({ children, status, changeStatus }) {
	const [backgroundColor, setBackgroundColor] = useState({backgroundColor: green_color});	
	const { wordleGrid, setWordleGrid, finishedRow, wordle, setWordleGuessed } = useContext(AppContext);
    
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
		const statusCopy = structuredClone(status);                                 				
        currentRow.forEach((boxObj, index) => {
        	// add letter included but not in right location
        	const keyObj = statusCopy.find(keyObj => keyObj.key === boxObj.value);	
        	if (wordle.current.includes(boxObj.value)) {					
            	boxObj.color = wordle.current.charAt(index) === boxObj.value
        			? green_color
        			: yellow_color;
        		keyObj.status = wordle.current.charAt(index) === boxObj.value
        			? Status.correct
        			: Status.partial
            } else { 
        		boxObj.color = gray_color;
        		keyObj.status =  Status.guessed;
        	}
        });
		// if won, update the grid but replace keyboard text displaying
		// hide the keyboard and display the ending winning component
		if (word === wordle.current) { 
			setWordleGuessed(true);
			console.log('guessed');
		}
        finishedRow.current++;
        setWordleGrid(wordleGridCopy);	
        changeStatus(statusCopy);
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
