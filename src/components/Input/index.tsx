import { EnvelopeSimple } from 'phosphor-react-native';
import React from 'react';
import { TextInput, View } from 'react-native';
import theme from '../../styles/theme';

import { styles } from './styles';

export function Input() {
  return (
    <View style={styles.container}>
      <EnvelopeSimple size={24} color={theme.colors.gray[300]} style={styles.icon}/>
      <TextInput  style={styles.input} placeholder='E-mail' placeholderTextColor={theme.colors.gray[300]}/>


    </View>
  );
}