import { useState, useRef, useEffect, useContext } from 'react'
import { main_color, bg_color, green_color, yellow_color } from './constants.js'
import { StyleSheet, 
		Text, 
		View, 
		SafeAreaView, 
		StatusBar, 
		TextInput, 
		Button,
} from 'react-native';
import { AppProvider } from './AppContext.js'
import WordleGrid from './WordleGrid.js'
import WordleKeyboard from './WordleKeyboard.js'
import GameDisplay from './GameDisplay.js'

export default function App() {
		
	// map each row to a Row Component
	// TODO: Show keyboard if game hasnt guessed word, show gamedisplay if guessed 
	return (
		<AppProvider>
		<StatusBar hidden/>
		<SafeAreaView style={{backgroundColor: bg_color, flex: 1 }}> 
			<View style={appStyles.container}>
				<Text style={[appStyles.text, {textAlign: 'center', fontSize: 40}]}>Wordle</Text>
				<WordleGrid />
				<WordleKeyboard />
				<GameDisplay /> 
			</View>
		</SafeAreaView>
		</AppProvider>
  	);
}

export const appStyles = StyleSheet.create({
	container: {
  		flex: 1,
  	  	backgroundColor: bg_color,
		alignItems: 'center',
		paddingTop: 30,
  	},
	text: {
		color: '#fff',
		fontWeight: 'bold',
		fontSize: 31
	}
});
