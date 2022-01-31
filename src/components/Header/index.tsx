import React, { ReactNode } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { BorderlessButton } from "react-native-gesture-handler";
import { useNavigation } from '@react-navigation/native';
import { Text, View } from "react-native";
import { theme } from '../../global/styles/theme';
import { styles } from "./styles";
import { Feather } from '@expo/vector-icons';

type Props = {
    title: string;
    action?: ReactNode;
}

export function Header({ title, action }: Props) {
    const { secondary100, secondary40, heading } = theme.colors;

    const navigation = useNavigation();  // ação de voltar

    function handleGoBack(){  // ação de voltar
        navigation.goBack();
    }

    return (
        <LinearGradient
            style={styles.container}
            colors={[secondary100, secondary40]}
        >
            <BorderlessButton onPress={handleGoBack}>
                <Feather
                    name="arrow-left"
                    size={24}
                    color={heading}
                />
            </BorderlessButton>

            <Text style={styles.title}>
                {title}
            </Text>

            {
                action &&  //caso tenho o botão para compartilhamento, será mostrado
                <View>
                    { action }
                </View>
            }

        </LinearGradient>
    );
}