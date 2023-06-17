import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from'./screens/LoginScreen';
import CadastroScreen from'./screens/CadastroScreen';
import DashboardScreen from'./screens/DashboardScreen';
import RecuperacaoSenhaScreen from'./screens/RecuperacaoSenhaScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Dashboard" component={DashboardScreen} />
        <Stack.Screen name="Cadastro" component={CadastroScreen} />
        <Stack.Screen name="RecuperarSenha" component={RecuperacaoSenhaScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
