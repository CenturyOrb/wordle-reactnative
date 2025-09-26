import { useContext } from 'react'
import { StyleSheet, View } from 'react-native'
import AppContext from '../context/AppContext.js'
import Row from './Row.js'

export default function WordleGrid() {
	const { wordleGrid, setWordleGrid } = useContext(AppContext);

	return (
		<View style={appStyles.wordle}>            		
        	{wordleGrid.map((row, index) => 
        		(<Row key={index} letters={row}/> )
        	)}
        </View>					
	);
}

const styles = StyleSheet.create({
	wordle: {         	
    	marginTop: 75,
    	gap: 7,
    	width: '77%',
    }
});
