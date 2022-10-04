import { EnvelopeSimple } from 'phosphor-react-native';
import React from 'react';
import { TextInput, View } from 'react-native';
import theme from '../../styles/theme';

import { styles } from './styles';

interface InputProps{
  children?: React.ReactNode,
  placeholder:string;
}


export function Input({children , placeholder}:InputProps) {
  return (
    <View style={styles.container}>

      {
        children
      }
      <TextInput  style={styles.input} placeholder={placeholder} placeholderTextColor={theme.colors.gray[300]}/>


    </View>
  );
}