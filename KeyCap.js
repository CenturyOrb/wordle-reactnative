import { useState } from 'react'
import { Text, Pressable, StyleSheet } from 'react-native'
import { testBox, textWhite } from './constants.js'
import { main_color, mainDark_color } from './constants.js'

export default function KeyCap({ children }) {
	const [backgroundColor, setBackgroundColor] = useState({backgroundColor: main_color});
	
	const handleKeyPressIn = () => {
		setBackgroundColor({backgroundColor: mainDark_color});
	}
	
	const handleKeyPressOut = () => {
		setBackgroundColor({backgroundColor: main_color});
	}

	return (
		<Pressable 
			style={[styles.keycap, backgroundColor]}
			onPressIn={handleKeyPressIn}
			onPressOut={handleKeyPressOut}
		>
			<Text style={[textWhite, styles.letter]}>{children}</Text>
		</Pressable>
	);
}

const styles = StyleSheet.create({
	keycap: { 
		width: '8.8%',
		aspectRatio: '1 / 1.28',
		borderRadius: 6,
		justifyContent: 'center',
	},
	letter: {
		textAlign: 'center',
		fontWeight: 600,
		fontSize: 20
	}
});
