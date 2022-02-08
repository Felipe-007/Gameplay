// faz o efeito de carregar um pagina em cima da outra

import React, { ReactNode } from "react";
import {
    View,
    Modal,
    ModalProps,
    TouchableWithoutFeedback,  // ao tocar em qualquer parte fora, sairá da opção de seleção de servidor
} from 'react-native';

import { styles } from "./styles";

import { Background } from "../Background";

type Props = ModalProps & {
    children: ReactNode;
    closeModal: () => void;
}

export function ModalView({ 
    children, 
    closeModal,
    ...rest
 }: Props) {
    return (
        <Modal
            transparent
            animationType="slide"
            {...rest}
        >
            <TouchableWithoutFeedback onPress={closeModal}>
                <View style={styles.overlay}>
                    <View style={styles.container}>
                        <Background>
                            <View style={styles.bar} />
                            {children}
                        </Background>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        </Modal>
    )
}