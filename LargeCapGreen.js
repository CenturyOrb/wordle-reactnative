import { useState } from 'react'
import { Text, Pressable, StyleSheet } from 'react-native'
import { textWhite, green_color, greenDark_color } from './constants.js'

export default function LargeCap({ children }) {
	const [backgroundColor, setBackgroundColor] = useState({backgroundColor: green_color});	
    
    const handleKeyPressIn = () => {
    	setBackgroundColor({backgroundColor: greenDark_color});
    }
    
    const handleKeyPressOut = () => {
    	setBackgroundColor({backgroundColor: green_color});
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
