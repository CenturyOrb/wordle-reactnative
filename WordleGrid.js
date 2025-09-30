import { useContext, useEffect } from 'react'
import { StyleSheet, View } from 'react-native'
import axios from 'axios'
import { AppContext } from './AppContext.js'
import Row from './Row.js'

export default function WordleGrid() {
	const { wordleGuessed, wordleGrid, wordle } = useContext(AppContext);
	
	// on mount fetch for word
	useEffect(() => {
		const fetchWordle = async () => {
			try { 
				//const response = await axios.get('https://random-word-api.herokuapp.com/word',
				//	{params: {length: 5}}
				//);
				//wordle.current = response.data[0].toUpperCase();
				wordle.current = 'BLAZE';
				console.log(wordle.current);
			} catch (error) { console.error(error) } 
		}
		fetchWordle();
	}, []);	

		

	return (
		<View style={styles.wordle}>            		
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
