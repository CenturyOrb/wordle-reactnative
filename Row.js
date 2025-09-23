import { View, StyleSheet } from 'react-native'
import Box from './Box.js'
	
export default function Row({ letters }) {
	// using map to make boxes
	return (
		<View style={styles.row}> 
			{letters.map((character, index) => (
				<Box key={index} letter={character}></Box>	
			))}
		</View> 
	);
}

const styles = StyleSheet.create({
	row: {
		flexDirection: 'row',	
		width: '100%',
		gap: 7,
	}
});
