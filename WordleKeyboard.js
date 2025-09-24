import { View, 
		StyleSheet,
		Text
} from 'react-native'
import KeyCap from './KeyCap.js'
import LargeCap from './LargeCap.js'
import { testBox, flexDirectionRow, width100p } from './constants.js'

export default function WordleKeyboard() {
	return (
		<View style={[styles.wordleKeyboard,]}> 
			<View style={[flexDirectionRow, styles.keyboardRow]}>
				<KeyCap>q</KeyCap>
				<KeyCap>w</KeyCap>
				<KeyCap>e</KeyCap>
				<KeyCap>r</KeyCap>
				<KeyCap>t</KeyCap>
                <KeyCap>y</KeyCap>
                <KeyCap>u</KeyCap>
                <KeyCap>i</KeyCap>
				<KeyCap>o</KeyCap>
                <KeyCap>p</KeyCap>
			</View>
			<View style={[flexDirectionRow, styles.keyboardRow]}>
				<KeyCap>a</KeyCap>	
                <KeyCap>s</KeyCap>
                <KeyCap>d</KeyCap>
                <KeyCap>f</KeyCap>
                <KeyCap>g</KeyCap>
                <KeyCap>h</KeyCap>
                <KeyCap>j</KeyCap>
                <KeyCap>k</KeyCap>
                <KeyCap>l</KeyCap>
			</View>
			<View style={[flexDirectionRow, styles.keyboardRow]}>
		    	<LargeCap>Enter</LargeCap>
				<KeyCap>z</KeyCap>	
                <KeyCap>x</KeyCap>
                <KeyCap>c</KeyCap>
                <KeyCap>v</KeyCap>
                <KeyCap>b</KeyCap>
                <KeyCap>n</KeyCap>
                <KeyCap>m</KeyCap>
				<LargeCap>{'<='}</LargeCap>
			</View>
		</View>					
	);
}

const styles = StyleSheet.create({
	wordleKeyboard: {
		marginTop: 60,
		gap: 10,
		alignItems: 'center',
		width: '100%'
	},
	keyboardRow: {
		gap: 5,
		width: '100%',
		justifyContent: 'center'	
	},
});
