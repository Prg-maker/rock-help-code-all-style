import React from 'react';
import { Text, View } from 'react-native';
import { CardNumberPatrimony } from '../CardNumberPatrimony';

import { styles } from './styles';

export function DetailCards() {
  return (
    <View style={styles.container}>

     <CardNumberPatrimony/>

    </View>
  );
}