import { useState, useContext } from 'react'
import { View, 
		StyleSheet,
		Text
} from 'react-native'
import { AppContext } from './AppContext.js'
import KeyCap from './KeyCap.js'
import LargeCapRed from './LargeCapRed.js'
import LargeCapGreen from './LargeCapGreen.js'
import { testBox, flexDirectionRow, width100p, Status } from './constants.js'

const qwertyKeys = [
  'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P',
  'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L',
  'Z', 'X', 'C', 'V', 'B', 'N', 'M'
];

export default function WordleKeyboard() {
	
	const [keyStatus, setKeyStatus] = useState(
		qwertyKeys.map(letter => ({
			key: letter,
	   		status: Status.neutral
	  	}))
	);
	
	const {wordleGuessed, setWordleGuessed} = useContext(AppContext);
	
	if (wordleGuessed) return null;

	return (
		<View style={[styles.wordleKeyboard, width100p, {paddingHorizontal: 5}]}> 
			<View style={[styles.keyboardRow, flexDirectionRow]}>
				{keyStatus.slice(0, 10).map((k, index) => (
					<KeyCap 
						key={index} 
						status={keyStatus}
						pos={index}
						changeStatus={setKeyStatus}
					>{k.key}</KeyCap>	
				))}
			</View>
			<View style={[styles.keyboardRow, flexDirectionRow]}>
				{keyStatus.slice(10, 19).map((k, index) => (                 				
					<KeyCap 
                    	key={index} 
                    	status={keyStatus}
                    	pos={index+10}
                    	changeStatus={setKeyStatus}
                    >{k.key}</KeyCap>	
                ))}
			</View>
			<View style={[styles.keyboardRow, flexDirectionRow]}>
		    	<LargeCapGreen 
					status={keyStatus} 
					changeStatus={setKeyStatus}
					onGuessComplete={() => setWordleGuessed(true)}
				>Enter</LargeCapGreen>
				{keyStatus.slice(19).map((k, index) => (                 					
					<KeyCap 
                    	key={index} 
                    	status={keyStatus}
                    	pos={index+19}
                    	changeStatus={setKeyStatus}
                    >{k.key}</KeyCap>	
                ))}
				<LargeCapRed>{'<'}</LargeCapRed>
			</View>
		</View>					
	);
}

const styles = StyleSheet.create({
	wordleKeyboard: {
		marginTop: 70,
		gap: 10,
	},
	keyboardRow: {
		gap: 5,
		justifyContent: 'center',
	},
});
