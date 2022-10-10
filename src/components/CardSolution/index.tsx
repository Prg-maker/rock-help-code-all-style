import { ClipboardText } from 'phosphor-react-native';
import React from 'react';
import { Text, View } from 'react-native';
import theme from '../../styles/theme';

import { styles } from './styles';

export function CardSolution() {
  return (
    <View style={styles.container}>
    <View style={styles.header}>
      <ClipboardText size={22} weight="light" color={theme.colors.primary} />
      <Text style={styles.textHeader}>descrição do problema</Text>
    </View>

    <View style={styles.content}>
      <Text style={styles.textContent}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla quidem
        optio ab cumque rem cum harum repellendus eos perspiciatis deleniti
        facere, ad, autem illum est? Ut reiciendis unde consequuntur suscipit?
      </Text>
    </View>

    <View style={styles.separete}/>

    <View style={styles.containerDate}>
      <Text style={styles.date}>Registrado em 20/11/2022 às 14:30</Text>
    </View>
  </View>
  );
}