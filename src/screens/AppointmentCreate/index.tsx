// Agendar partida, irá puxar o header para aparecer no cabeçalho

import React, { useState } from "react";
import { Text, View } from "react-native";
import { theme } from "../../global/styles/theme";
import { styles } from "./styles";
import { CategorySelect } from "../../components/CategorySelect";
import { Background } from "../../components/Background";
import { Header } from "../../components/Header";

export function AppointmentCreate() {
    const [category, setCategory] = useState('');

    return (
        <Background>
            <Header
                title="Agendar partida"
            />

            <Text style={styles.label}>
                Categoria
            </Text>

            <CategorySelect
                hasCheckBox
                setCategory={setCategory}
                categorySelected={category}
            />
        </Background>
    );
}