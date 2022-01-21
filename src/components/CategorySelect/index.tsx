import React from "react";
import { ScrollView, ScrollViewBase } from 'react-native';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler'

import { styles } from './styles';
import { categories } from '../../utils/categories';

export function CategorySelect() {
    return (
        <ScrollViewBase
            horizontal
            style={styles.container}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingRight: 40 }}
        >
            {
                categories.map(category => (
                    <Category
                    />
                ))

            }

        </ScrollViewBase>
    );
}