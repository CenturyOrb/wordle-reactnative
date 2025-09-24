import { useState, useRef, useEffect, createContext } from 'react'
import { main_color, bg_color, green_color, yellow_color } from './constants.js'
import { StyleSheet, 
		Text, 
		View, 
		SafeAreaView, 
		StatusBar, 
		TextInput, 
		Button,
} from 'react-native';
import Row from './Row.js'
import WordleKeyboard from './WordleKeyboard.js'
import { GridProvider } from './context.js'

export default function App() {

	const [wordleGrid, setWordleGrid] = useState([
		'     '.split(''),
		'     '.split(''),
		'     '.split(''),
		'     '.split(''),
		'     '.split(''),
		'     '.split('')
	]);

	// map each row to a Row Component
	return (
		<>
		<StatusBar hidden/>
		<SafeAreaView style={{backgroundColor: bg_color, flex: 1 }}> 
			<View style={appStyles.container}>
				<Text style={[appStyles.text, {textAlign: 'center', fontSize: 40}]}>Wordle</Text>
				{/*in the future make this into a WordleGrid component itself*/}
				<GridProvider>
				<View style={appStyles.wordle}>
					{wordleGrid.map((row, index) => 
						(<Row key={index} letters={row}/> )
					)}
				</View>					
				<WordleKeyboard/>
				</GridProvider>
			</View>
		</SafeAreaView>
		</>
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
	},
	wordle: {
		marginTop: 75,
		gap: 7,
		width: '77%',
	},
});

const fetchWord = () => {
	return 'blaze';
}
