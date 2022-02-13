//Ponto de partida do APP

import React from "react";
import { StatusBar, LogBox } from "react-native";
import { Inter_400Regular, Inter_500Medium } from '@expo-google-fonts/inter';
import { Rajdhani_500Medium, Rajdhani_700Bold } from '@expo-google-fonts/rajdhani';
import AppLoading from "expo-app-loading";
import { useFonts } from 'expo-font';

LogBox.ignoreLogs(['You are not currently signed in to Expo on your development machine.']);  // ignora o erro, um log especifico

import { AuthProvider } from './src/hooks/auth';

import { Routes } from './src/routes';
import { Background } from "./src/components/Background";

export default function App() {
  const [fontsLoaded] = useFonts({  //cria a const fontsLoaded, fontes customizadas
    Inter_400Regular,
    Inter_500Medium,
    Rajdhani_500Medium,
    Rajdhani_700Bold,
  });

  if (!fontsLoaded) {  // enquando ocorrer a splash screen (tela de carregamento) o app não abre
    return <AppLoading />
  }

  return (  // cria um fragment, onde será replicado em todas as telas
    <Background>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </Background>
    // AuthProvider define que todas as rotas podem acessar o contexto 'hooks'
  );
}