// caixa de texto para digitar numeros

import React from "react";
import { TextInput, TextInputProps, View } from 'react-native';

import { styles } from './styles';

export function SmallInput({ ...rest }: TextInputProps) {  // {...rest}: TextInputProps) pega todas as propriedades que estao no TextInputProps
    return (
        <TextInput
            style={styles.container}
            keyboardType="numeric"
            {...rest}
        />
    );
}