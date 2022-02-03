// campo de descrição da tela de agendamento de partida

import React from "react";
import { TextInput, TextInputProps, View } from 'react-native';

import { styles } from './styles';

export function TextArea({ ...rest }: TextInputProps) {  // {...rest}: TextInputProps) pega todas as propriedades que estao no TextInputProps
    return (
        <TextInput
            style={styles.container}
            {...rest}
        />
    );
}