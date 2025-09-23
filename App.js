import { useState} from 'react'
import { StyleSheet, Text, View, SafeAreaView, StatusBar } from 'react-native';
import Row from './Row.js'

export const main_color= '#928374';
export const bg_color= '#282828';
export const green_color= '#b8bb26';
export const yellow_color= '#fabd2f';

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
		<SafeAreaView style={{backgroundColor: bg_color, flex: 1 }}> 
			<StatusBar hidden/>
			<View style={appStyles.container}>
				<Text style={[appStyles.text, {textAlign: 'center'}]}>Wordle!</Text>
				<View style={appStyles.wordle}>
					{wordleGrid.map((row, index) => (
						<Row 
							key={index}
							letters={row}
						/>
					))}
				</View>					
			</View>
		</SafeAreaView>
  	);
}

function test() { 
	
}

export const appStyles = StyleSheet.create({
	container: {
  		flex: 1,
  	  	backgroundColor: bg_color,
		alignItems: 'center',
		padding: 50
  	},
	text: {
		color: '#fff',
		fontWeight: 'bold',
		fontSize: 31
	},
	wordle: {
		marginTop: '25%',
		gap: 7,
		width: '100%',
	},
});

const fetchWord = () => {
	return 'blaze';
}
