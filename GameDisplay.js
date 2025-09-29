import { useContext } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { AppContext } from './AppContext.js'
import { textWhite, testBox } from './constants.js'

export default function GameDisplay() {
	const { wordleGuessed } = useContext(AppContext);

	if (!wordleGuessed) return null;

	return (
		<View style={testBox}>
			<Text style={textWhite}>Game display here</Text>
		</View>	
	);	
}

const styles = StyleSheet.create({
});
