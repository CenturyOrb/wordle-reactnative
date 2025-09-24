import { Text, Pressable, StyleSheet } from 'react-native'
import { testBox, textWhite } from './constants.js'

export default function LargeCap({ children }) {
	return (
		<Pressable style={[testBox, styles.keycap]}>		
			<Text style={textWhite}>{children}</Text>
		</Pressable>
	);
}

const styles = StyleSheet.create({
	keycap: { 
		flex: 1
	}
});
