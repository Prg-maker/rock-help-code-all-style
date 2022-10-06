import { ChatTeardropText } from 'phosphor-react-native';
import React from 'react';
import {  Text, View } from 'react-native';
import theme from '../../styles/theme';

import { styles } from './styles';

export function MessageAlternative() {
  return (
    <View style={styles.container}>
      <ChatTeardropText size={54} weight="light" color={theme.colors.gray[400]} />
      <Text style={styles.text}>
        Você ainda não tem{'\n'}solicitações criados
      </Text>
    </View>
  );
}