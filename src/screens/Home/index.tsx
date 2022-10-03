import React from 'react';
import { Button, Text, TextInput, TouchableOpacity, View } from 'react-native';
import LogoImgSvg from '../../assets/Logo.svg'
import theme from '../../styles/theme';
import { styles } from './styles';


export function Home() {
  return (
    <View style={styles.container}>
      <LogoImgSvg/>

      <View style={styles.content}>
        <Text style={styles.title}>
          Accesse sua conta
        </Text>

        <View >
          <TextInput  style={styles.input} placeholder='E-mail' placeholderTextColor={theme.colors.gray[300]}>

          </TextInput>

          <TextInput placeholder='Senha'>

          </TextInput>


          <TouchableOpacity>
            <Text>Entrar</Text>
          </TouchableOpacity>


        </View>


      </View>
    </View>
  );
}