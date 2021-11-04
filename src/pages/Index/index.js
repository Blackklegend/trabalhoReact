import React from 'react';
import * as reactNative from 'react-native';
import { useFonts } from 'expo-font';

export default function Index({navigation}) {

	const [loaded] = useFonts({
		Poppins: require('../../../assets/fonts/Poppins-Regular.ttf'),
		Roboto: require('../../../assets/fonts/Roboto-Regular.ttf')
	});

	if(!loaded) {
		return null;
	}

	return (
		<reactNative.View style={styles.container}>
			<reactNative.Text style={styles.title} adjustsFontSizeToFit={true} numberOfLines={1}>
				Blackk<reactNative.Text style={styles.blue}>App</reactNative.Text>
			</reactNative.Text>
			<reactNative.View style={styles.inputWrapper}>
				<reactNative.Text style={styles.label}>
					Email
				</reactNative.Text>
				<reactNative.TextInput
					style={styles.input}
				/>
				<reactNative.Text style={styles.label, styles.label2}>
					Senha
				</reactNative.Text>
				<reactNative.TextInput 
					secureTextEntry={true} 
					style={styles.input}
				/>
				
				<reactNative.Pressable style={styles.button}>  
					<reactNative.Text 
						style={styles.buttonText}
						onPress={()=> navigation.navigate('Tela Principal')}>
							Login
						</reactNative.Text>
				</reactNative.Pressable>
				<reactNative.Pressable style={styles.button2}>  
					<reactNative.Text 
						style={styles.buttonText} 
						onPress={() => navigation.navigate('Registro')}>
							Registrar
						</reactNative.Text>
				</reactNative.Pressable>
			</reactNative.View>
		</reactNative.View>
	);
}

const styles = reactNative.StyleSheet.create({
	container: {
		height: '100%',
		backgroundColor: '#FFFFFF'
	},
	title: {
		justifyContent: 'center',
		fontWeight: 'bold',
		fontSize: 40,
		fontFamily: 'Poppins',
		textAlign: 'center',
		marginTop: 10
	},
	blue: {
		color: '#0085FF'
	},
	label: {
		fontSize: 16,
		marginBottom: 15,
		fontFamily: 'Roboto',
		textAlign: 'left',
		color: 'gray'
	},
	inputWrapper: {
		marginTop: 80,
		alignSelf: 'center',
		width: '80%'
	},
	input: {
		height: 45,
		backgroundColor: '#F5F4F7',
		marginTop: 5,
		borderRadius: 6,
		padding: 10,
		color: 'black'
	},
	label2: {
		marginTop: 15,
		fontSize: 16,
		marginBottom: 15,
		fontFamily: 'Poppins',
		textAlign: 'left',
		color: 'gray'
	},
	button: {
		backgroundColor: '#0085FF',
		marginTop: 25,
		padding: 10,
		borderRadius: 10
	},
	buttonText: {
		fontFamily: 'Roboto',
		color: '#fff',
		textAlign: 'center',
		fontSize: 22,
		fontWeight: 'bold',
	},
	button2: {
		backgroundColor: 'rgba(0, 133, 255, 0.6)',
		marginTop: 10,
		padding: 10,
		borderRadius: 10
	}
})