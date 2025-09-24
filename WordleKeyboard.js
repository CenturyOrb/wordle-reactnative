import { View, 
		StyleSheet,
		Text
} from 'react-native'
import { testBox, flexDirectionRow } from './constants.js'

export default function WordleKeyboard() {
	return (
		<View style={[testBox, styles.wordleKeyboard,]}> 
			<View style={[flexDirectionRow]}>
				<Text>Filler</Text>
			</View>
			<View style={[flexDirectionRow]}>
				<Text>Filler</Text>
			</View>
			<View style={[flexDirectionRow]}>
				<Text>Filler</Text>
			</View>
		</View>					
	);
}

const styles = StyleSheet.create({
	wordleKeyboard: {
		marginTop: 60,
		gap: 10
	},
});
