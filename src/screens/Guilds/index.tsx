// cria as opções de seleção da guilda em selecione um servidor

import React from "react";
import { View, FlatList } from "react-native";
import { GuildProps } from "../../components/Guild";

import { Guild } from "../../components/Guild";
import { ListDivider } from "../../components/ListDivider";

import { styles } from './styles';

type Props = {
    handleGuildSelect: (guild: GuildProps) => void;
}

export function Guilds({ handleGuildSelect }: Props) {
    const guilds = [
        {
            id: '1',
            name: 'Lendários',
            icon: 'image.png',
            owner: true
        },
        {
            id: '2',
            name: 'Master',
            icon: 'image.png',
            owner: true
        },
        {
            id: '3',
            name: 'Master',
            icon: 'image.png',
            owner: true
        },
        {
            id: '4',
            name: 'Master',
            icon: 'image.png',
            owner: true
        },
        {
            id: '5',
            name: 'Master',
            icon: 'image.png',
            owner: true
        },
        {
            id: '6',
            name: 'Master',
            icon: 'image.png',
            owner: true
        },
        {
            id: '2',
            name: 'Master',
            icon: 'image.png',
            owner: true
        },
    ];

    return (
        <View style={styles.container}>
            <FlatList
                data={guilds}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    <Guild
                        data={item}
                        onPress={() => handleGuildSelect(item)}
                        />
                )}
                showsHorizontalScrollIndicator={false}
                ItemSeparatorComponent={() => <ListDivider isCentered />}
                contentContainerStyle={{ paddingBottom: 68, paddingTop: 103 }}
                ListHeaderComponent={() => <ListDivider isCentered />}  // adiciona uma linha acima
                style={styles.guilds}
            />
        </View>
    );
}