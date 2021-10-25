import { StatusBar } from 'expo-status-bar';
import React from 'react';
import * as reactNative from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

//Pages import
import Cadastro from './src/pages/Cadastro'
import Index from './src/pages/Index'
import Principal from './src/pages/TelaPrincipal'


const Drawer = createDrawerNavigator();

export default function App() {
  return (
      <NavigationContainer>
        <Drawer.Navigator>
          <Drawer.Screen 
            name="Menu" 
            component={Index} 
            options={{
              headerTitle: "Login",
            }}
          />
          <Drawer.Screen
            name="Registro" 
            component={Cadastro}
          />
          <Drawer.Screen
            name="Tela Principal"
            component={Principal}
          />
        </Drawer.Navigator>
      </NavigationContainer>
  );
}

const styles = reactNative.StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
