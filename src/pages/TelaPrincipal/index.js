import React from 'react';
import * as reactNative from 'react-native';
import { useFonts } from 'expo-font';

export default function Index({ navigation, route}) {

  const [loaded] = useFonts({
		Poppins: require('../../../assets/fonts/Poppins-Regular.ttf'),
		Roboto: require('../../../assets/fonts/Roboto-Regular.ttf')
	});
  if(!loaded) {
    return null
  }
  return (
		<reactNative.View style={styles.container}>

			<reactNative.Text style={styles.title} adjustsFontSizeToFit={true} numberOfLines={1}>
				Blackk<reactNative.Text style={styles.blue}>App</reactNative.Text>
			</reactNative.Text>

      <reactNative.Text style={styles.greeting}>
        Olá, {route.params?.nome}.
      </reactNative.Text>

      <reactNative.View style={styles.wrapper}>
        <reactNative.Text style={styles.fontFith}>Suas informações</reactNative.Text>
        <reactNative.Text style={styles.label2}><reactNative.Text style={styles.label}>Nome: </reactNative.Text>{route.params?.nome}</reactNative.Text>
        <reactNative.Text style={styles.label2}><reactNative.Text style={styles.label}>Senha: </reactNative.Text>{route.params?.senha}</reactNative.Text>
        <reactNative.Text style={styles.label2}><reactNative.Text style={styles.label}>Telefone: </reactNative.Text>{route.params?.phone}</reactNative.Text>
        <reactNative.Text style={styles.label2}><reactNative.Text style={styles.label}>Profissão: </reactNative.Text>{route.params?.job}</reactNative.Text>
        <reactNative.Text style={styles.label2}><reactNative.Text style={styles.label}>Endereço: </reactNative.Text>{route.params?.address}</reactNative.Text>
      </reactNative.View>

      <reactNative.View style={styles.wrapper}>
        <reactNative.Text style={styles.fontFith}>Outras informações</reactNative.Text>
        <reactNative.Text style={styles.label2}><reactNative.Text style={styles.label}>Nome: </reactNative.Text>{route.params?.nome}</reactNative.Text>
        <reactNative.Text style={styles.label2}><reactNative.Text style={styles.label}>Senha: </reactNative.Text>{route.params?.senha}</reactNative.Text>
        <reactNative.Text style={styles.label2}><reactNative.Text style={styles.label}>Telefone: </reactNative.Text>{route.params?.phone}</reactNative.Text>
        <reactNative.Text style={styles.label2}><reactNative.Text style={styles.label}>Profissão: </reactNative.Text>{route.params?.job}</reactNative.Text>
        <reactNative.Text style={styles.label2}><reactNative.Text style={styles.label}>Endereço: </reactNative.Text>{route.params?.address}</reactNative.Text>
      </reactNative.View>

      <reactNative.Pressable 
        style={styles.sair}
        onPress={()=> navigation.navigate('Menu')}>
          <reactNative.Text 
            style={styles.sairText}>
              Sair
          </reactNative.Text>
      </reactNative.Pressable>

    </reactNative.View>
  );
}

const styles = reactNative.StyleSheet.create({
	container: {
		height: '100%',
		backgroundColor: 'white'
	},
	title: {
		justifyContent: 'center',
		fontWeight: "700",
		fontSize: 40,
		fontFamily: 'Poppins',
		textAlign: 'center',
		marginTop: 10
	},
	blue: {
		color: '#0085FF'
	},
  fontFith: {
    fontSize: 15,
    fontWeight: 'bold',
		fontFamily: 'Roboto',
		textAlign: 'left',
    
  },
	label: {
    fontSize: 12,
    fontWeight: 'bold',
		fontFamily: 'Roboto',
		textAlign: 'left',
    color: '#000'
	},
	label2: {
    marginTop: 8,
		fontSize: 12,
		fontFamily: 'Roboto',
		textAlign: 'left',
    color: 'rgba(0, 0, 0, 0.4)'
  },
  greeting: {
    alignSelf: 'center',
    marginTop: 30,
    opacity: 0.6,
    fontFamily: 'Roboto',
    fontSize: 30,
    fontWeight: 'bold'
  },
  wrapper: {
    marginHorizontal: 35,
    marginTop: 31
  },
  sair: {
    fontFamily: 'Roboto',
    width: "80%",
    backgroundColor: '#FF4A4A',
    borderRadius: 6,
    marginTop: 90,
		padding: 10,
    alignSelf: 'center',
  },
  sairText: {
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
    fontFamily: 'Roboto',
  }
})