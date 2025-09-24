import { View, 
		StyleSheet,
		Text
} from 'react-native'
import KeyCap from './KeyCap.js'
import LargeCap from './LargeCap.js'
import LargeCapRed from './LargeCapRed.js'
import LargeCapGreen from './LargeCapGreen.js'
import { testBox, flexDirectionRow, width100p } from './constants.js'

export default function WordleKeyboard() {
	return (
		<View style={[styles.wordleKeyboard, width100p, {paddingHorizontal: 5}]}> 
			<View style={[styles.keyboardRow, flexDirectionRow]}>
				<KeyCap>Q</KeyCap>
				<KeyCap>W</KeyCap>
				<KeyCap>E</KeyCap>
				<KeyCap>R</KeyCap>
				<KeyCap>T</KeyCap>
                <KeyCap>Y</KeyCap>
                <KeyCap>U</KeyCap>
                <KeyCap>I</KeyCap>
				<KeyCap>O</KeyCap>
                <KeyCap>P</KeyCap>
			</View>
			<View style={[styles.keyboardRow, flexDirectionRow]}>
				<KeyCap>A</KeyCap>	
                <KeyCap>S</KeyCap>
                <KeyCap>D</KeyCap>
                <KeyCap>F</KeyCap>
                <KeyCap>G</KeyCap>
                <KeyCap>H</KeyCap>
                <KeyCap>J</KeyCap>
                <KeyCap>K</KeyCap>
                <KeyCap>L</KeyCap>
			</View>
			<View style={[styles.keyboardRow, flexDirectionRow]}>
		    	<LargeCapGreen>Enter</LargeCapGreen>
				<KeyCap>Z</KeyCap>	
                <KeyCap>X</KeyCap>
                <KeyCap>C</KeyCap>
                <KeyCap>V</KeyCap>
                <KeyCap>B</KeyCap>
                <KeyCap>N</KeyCap>
                <KeyCap>M</KeyCap>
				<LargeCapRed>{'<'}</LargeCapRed>
			</View>
		</View>					
	);
}

const styles = StyleSheet.create({
	wordleKeyboard: {
		marginTop: 70,
		gap: 10,
	},
	keyboardRow: {
		gap: 5,
		justifyContent: 'center',
	},
});
