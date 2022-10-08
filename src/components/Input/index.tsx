import React from 'react';
import { TextInput, View , TextInputProps } from 'react-native';
import theme from '../../styles/theme';

import { styles } from './styles';


interface InputProps extends  TextInputProps{
  children?: React.ReactNode,
  placeholder:string;
}


export function Input({children , placeholder, ...rest}:InputProps) {
  return (
    <View style={styles.container} {...rest}>

      {
        children
      }
      <TextInput focusable style={styles.input} placeholder={placeholder} placeholderTextColor={theme.colors.gray[300]}/>


    </View>
  );
}