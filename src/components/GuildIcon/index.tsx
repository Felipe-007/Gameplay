//mostra os servidores que o usuario participa

import React from "react";
import { Image, View } from 'react-native';

import { styles } from "./styles";
import DiscordSvg from '../../assets/discord.svg';

const { CDN_IMAGE } = process.env;

type Props = {
    guidId: string;
    iconId: string | null;
}

export function GuildIcon({ guidId, iconId }: Props) {
    const uri = `${CDN_IMAGE}/icons/${guidId}/${iconId}.png`

    return (
        <View style={styles.container}>
            {
                iconId ?  //caso tenha o icone mostrará a imagem
                    <Image
                        source={{ uri }}
                        style={styles.image}
                        resizeMode="cover"
                    />
                    :
                    <DiscordSvg
                        width={40}
                        height={40}
                    />  // caso nao tenha, mostrará essa
            }
        </View>
    )
}