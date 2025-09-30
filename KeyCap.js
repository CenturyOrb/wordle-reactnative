import { useState, useContext } from 'react'
import { Text, Pressable, StyleSheet } from 'react-native'
import { AppContext } from './AppContext.js'
import { testBox, textWhite, main_color, mainDark_color, Status } from './constants.js'

export default function KeyCap({ children, status, pos, changeStatus }) {
	// on enter should change the keycap
	const { wordleGrid, setWordleGrid, finishedRow } = useContext(AppContext);
		
	const color = status[pos].status;
	
	const handleKeyPressIn = () => {
		const statusCopy = structuredClone(status);
		const currStatus = statusCopy[pos];
		// if already used do not run
		if (currStatus.status === Status.partial 
			|| currStatus.status === Status.correct 
			|| currStatus.status === Status.guessed) {
		} else {
			currStatus.status = Status.pressed;
            changeStatus(statusCopy);	
		}
	}
	
	const handleKeyPressOut = () => {
		const statusCopy = structuredClone(status);
        const currStatus = statusCopy[pos];
		if (currStatus.status === Status.partial      
        	|| currStatus.status === Status.correct 
        	|| currStatus.status === Status.guessed) {
        } else {
			currStatus.status = Status.neutral;
            changeStatus(statusCopy);	
		}
		// if applicable, the next line should add the current letter
		const wordleGridCopy = structuredClone(wordleGrid);
		const currentRow = wordleGridCopy[finishedRow.current+1];
		if (!currentRow) { 
			console.log('all rows filled'); 
		}
		// if there are spots left in the row, add, if not then do nothing
		const index = currentRow.findIndex(boxObj => boxObj.value === ' ');	// returns -1 if no spots left
		if (index !== -1) { currentRow[index].value = children }
		setWordleGrid(wordleGridCopy);
	}

	return (
		<Pressable 
			style={[styles.keycap, {backgroundColor: color}]}
			onPressIn={handleKeyPressIn}
			onPressOut={handleKeyPressOut}
		>
			<Text style={[textWhite, styles.letter]}>{children}</Text>
		</Pressable>
	);
}

const styles = StyleSheet.create({
	keycap: { 
		width: '8.8%',
		aspectRatio: '1 / 1.28',
		borderRadius: 6,
		justifyContent: 'center',
	},
	letter: {
		textAlign: 'center',
		fontWeight: 600,
		fontSize: 20,
	}
});
