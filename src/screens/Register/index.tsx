import { Chat } from 'phosphor-react-native';
import React from 'react';
import { View } from 'react-native';
import { Button } from '../../components/Button';
import { HeaderSolicitation } from '../../components/HeaderSolicitation';
import { Input } from '../../components/Input';
import { TextArea } from '../../components/TextArea';

import { styles } from './styles';

export function Register() {
  return (
    <View style={styles.container}>
      <HeaderSolicitation/>

      <View style={styles.form}>
        <Input
          placeholder='Número do Patrimônio'
        />
        <TextArea/>

        

      </View>

      <View style={styles.containerButton}>
        <Button
          title='Cadastrar'
        />
      </View>
      
    </View>
  );
}