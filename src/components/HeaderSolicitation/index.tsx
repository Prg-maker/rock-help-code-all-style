import { CaretLeft } from 'phosphor-react-native';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import theme from '../../styles/theme';

import { styles } from './styles';

export function HeaderSolicitation() {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.icon}>
        <CaretLeft  size={32} weight="bold" color={theme.colors.gray[200]}/>
      </TouchableOpacity>
      <Text style={styles.text}>Solicitação</Text>
    </View>
  );
}