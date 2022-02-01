// são as rotas que o usuário tem depois de autenticado

import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { theme } from '../global/styles/theme';

import { Home } from '../screens/Home';
import { SignIn } from '../screens/SignIn';
import { AppointmentDetails } from '../screens/AppointmentDetails';
import { AppointmentCreate } from '../screens/AppointmentCreate';

const { Navigator, Screen } = createStackNavigator();

export function AuthRoutes() {
    return (
        <Navigator
            headerMode="none"
            screenOptions={{
                cardStyle: {
                    backgroundColor: theme.colors.secondary100
                }
            }}
        >
            <Screen
                name="SignIn"  // tela de entrar
                component={SignIn}
            />
            <Screen
                name="Home"  // home
                component={Home}
            />
            <Screen
                name="AppointmentDetails"  //tela de detalhes
                component={AppointmentDetails}
            />
            <Screen
                name="AppointmentCreate"  //tela de Agendar partida
                component={AppointmentCreate}
            />
        </Navigator>
    )
}