import { Text, Pressable, StyleSheet } from 'react-native'
import { testBox, textWhite } from './constants.js'

export default function KeyCap({ children }) {
	return (
		<Pressable style={[testBox, styles.keycap]}>		
			<Text style={textWhite}>{children}</Text>
		</Pressable>
	);
}

const styles = StyleSheet.create({
	keycap: { 
		width: 38,
		aspectRatio: '1 / 1.17'
	}
});
