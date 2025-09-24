import { Text, Pressable, StyleSheet } from 'react-native'
import { textWhite } from './constants.js'
import { main_color, mainDark_color } from './constants.js'

export default function LargeCap({ children }) {
	return (
		<Pressable style={styles.keycap}>		
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
