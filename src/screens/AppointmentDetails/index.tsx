// Detalhes do compromisso, irá puxar o header para aparecer no cabeçalho

import React from "react";

import { View } from "react-native";
import { Background } from "../../components/Background";
import { Header } from "../../components/Header";

export function AppointmentDetails(){
    return(
        <Background>
            <Header
                title="Detalhes"
            />
        </Background>
    );
}