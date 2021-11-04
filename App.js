import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer'

//Pages import
import Cadastro from './src/pages/Cadastro'
import Index from './src/pages/Index'
import Principal from './src/pages/TelaPrincipal'


const Drawer = createDrawerNavigator();

export default function App() {
  return (
      <NavigationContainer>
        <Drawer.Navigator 
          initialRouteName={"Menu"}>
            <Drawer.Screen 
              name="Menu" 
              component={Index} 
              options={{
                headerTitle: "Login",
              }}/>
            <Drawer.Screen
              name="Registro" 
              component={Cadastro}/>
            <Drawer.Screen
              name="Tela Principal"
              component={Principal}/>
        </Drawer.Navigator>
      </NavigationContainer>
  );
}