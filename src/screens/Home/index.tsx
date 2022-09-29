import React from 'react';
import { Button, Text, TextInput, TouchableOpacity, View } from 'react-native';
import LogoImgSvg from '../../assets/Logo.svg'
import { styles } from './styles';

export function Home() {
  return (
    <View style={styles.container}>
      <LogoImgSvg/>

      <View>
        <Text>
          Accesse sua conta
        </Text>

        <View>
          <TextInput placeholder='E-mail'>

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