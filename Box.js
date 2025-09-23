import { View, Text, StyleSheet } from 'react-native'
import { main_color } from './App.js'

const Box = ({ children }) => {
	return (
		<View style={styles.box}>	
			<Text style={styles.text}>{children}</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	text: {
		color: 'white',
		fontWeight: 'bold',
		fontSize: 25 
	},
	box: { 
		borderWidth: 2,
		borderColor: main_color,
		flex: 1,
		aspectRatio: '1/1',
		justifyContent: 'center',
		alignItems: 'center'
	}
});

export default Box
