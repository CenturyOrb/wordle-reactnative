import { useContext, useEffect } from 'react'
import { View, Text, Pressable, StyleSheet } from 'react-native'
import { AppContext } from './AppContext.js'
import { textWhite, green_color , testBox } from './constants.js'

// displays the game ending display and resets onReplay
export default function GameDisplay() {
	const { wordle, setWordleGuessed } = useContext(AppContext);

	const handleReplay = () => { 
		setWordleGuessed(prev => ({
  			...prev,
  			end: false,
  			correct: false,
		}));
	}
	
	useEffect(() => { 
		console.log('mounted GameDisplay');
	
		return () => { console.log('unmounted GameDisplay') }
	}, []);	

	// shows correect word and replay button
	return (
		<View style={styles.gameDisplay}>
			<Text style={[textWhite, styles.wordleWord]}>{wordle.current}</Text>
			<Pressable 
				onPress={handleReplay}
				style={styles.retryPressable}> 
				<Text 
					style={[textWhite, styles.retryText]}
				>Replay</Text>
			</Pressable>
		</View>	
	);	
}

const styles = StyleSheet.create({
	gameDisplay: { 
		marginTop: 50,
		width: '77%',
		height: '25%',
		alignItems: 'center',
		justifyContent: 'space-evenly'
	}, 
	wordleWord: {
		textAlign: 'center',
		fontSize: 30,
		fontWeight: 600
	},
	retryPressable: { 
		width: '45%',           	
        aspectRatio: '1 / 0.4',
        borderRadius: 6,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: green_color
	},
	retryText: { 
		fontSize: 20,
		fontWeight: 600
	}
});
