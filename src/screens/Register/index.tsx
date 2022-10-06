import React from 'react';
import { View } from 'react-native';
import { HeaderSolicitation } from '../../components/HeaderSolicitation';

import { styles } from './styles';

export function Register() {
  return (
    <View style={styles.container}>
      <HeaderSolicitation/>
    </View>
  );
}