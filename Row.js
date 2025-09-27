import { useContext } from 'react'
import { View, StyleSheet } from 'react-native'
import { AppContext } from './AppContext.js'
import Box from './Box.js'
	
export default function Row({ letters }) {
	const { wordleGrid } = useContext(AppContext);

	// using map to make boxes
	return (
		<View style={styles.row}> 
			{letters.map((boxObject, index) => (
				<Box key={index} color={boxObject.color}>{boxObject.value}</Box>	
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
