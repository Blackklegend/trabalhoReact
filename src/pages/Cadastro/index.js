import React, { useState } from 'react';
import * as reactNative from 'react-native';
import { useFonts } from 'expo-font';

const Cadastro = ({navigation}) => {

    const loaded = useFonts({
		Poppins: require('../../../assets/fonts/Poppins-Regular.ttf'),
		Roboto: require('../../../assets/fonts/Roboto-Regular.ttf')
	});
    if(!loaded) {
        return null
    }
    
        const [nome, setNome] = useState('');
        const [email, setEmail] = useState('');
        const [senha, setSenha] = useState('');
        const [job, setProfissao] = useState('');
        const [phone, setTelefone] = useState('');
        const [address, setEndereco] = useState('');

        const [ValidacaoSenha, setValidacaoSenha] = useState('');
        
        const [ErrorMessage, setErrorMessage] = useState(false);

        function ValidateData() {
            if(ValidacaoSenha === senha){
                navigation.navigate('Tela Principal', {
                    nome,
                    email,
                    senha,
                    job,
                    phone,
                    address,
                });

            setErrorMessage(false);
            }else{
            setErrorMessage(true);
            }
        }

    return (
        <reactNative.View style={styles.container}>
            <reactNative.View style={styles.wrapper}>

                <reactNative.Text style={styles.texto}>Nome</reactNative.Text>
                <reactNative.TextInput style={styles.input} placeholder="Digite seu nome completo" onChangeText={nome => setNome(nome)} />

                <reactNative.Text style={styles.texto}>Email</reactNative.Text>
                <reactNative.TextInput style={styles.input} placeholder="email@provedor.com" onChangeText={email => setEmail(email)} />

                <reactNative.Text style={styles.texto}>Senha</reactNative.Text>
                <reactNative.TextInput style={styles.input} secureTextEntry={true} placeholder="Digite sua senha" onChangeText={senha => setSenha(senha)}/>

                <reactNative.Text style={styles.texto}>Confirmar Senha</reactNative.Text>
                <reactNative.TextInput style={styles.input} secureTextEntry={true} placeholder="Confirme sua senha" onChangeText={ValidacaoSenha => setValidacaoSenha(ValidacaoSenha)} />

                <reactNative.Text style={styles.texto}>Profissão</reactNative.Text>
                <reactNative.TextInput style={styles.input} placeholder="Ex: Programador" onChangeText={profissao => setProfissao(profissao)} />

                <reactNative.Text style={styles.texto}>Telefone</reactNative.Text>
                <reactNative.TextInput style={styles.input} keyboardType="numeric" placeholder="(00) 0 0000-0000" onChangeText={telefone => setTelefone(telefone)}/>

                <reactNative.Text style={styles.texto}>Endereço</reactNative.Text>
                <reactNative.TextInput style={styles.input} placeholder="Rua e número" onChangeText={endereco => setEndereco(endereco)} />

                <reactNative.Pressable style={styles.button} onPress={()=>ValidateData()}>
                    <reactNative.Text style={styles.buttonText}>Cadastrar</reactNative.Text>
                </reactNative.Pressable>
            </reactNative.View>
            { ErrorMessage && <ErrorMessageText>A senhas precisam ser a mesma</ErrorMessageText> }
        </reactNative.View>
    );
}

const styles = reactNative.StyleSheet.create({
	container: {
		height: '100%',
		backgroundColor: '#FFFFFF'
	},
    wrapper: {
        margin: 30
    },
    texto: {
        color: 'rgba(0, 0, 0, 0.4)',
        fontFamily: 'Roboto',
        fontSize: 14,
        fontWeight: 'bold',
        marginTop: 10,
    },
    input: {
        height: 45,
        borderRadius: 6,
        marginTop: 6,
        backgroundColor: '#F5F4F7',
        color: 'black',
        padding: 10,
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
})

export default Cadastro;