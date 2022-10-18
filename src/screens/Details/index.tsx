import { CircleWavyCheck } from 'phosphor-react-native';
import React from 'react';
import { Text, View } from 'react-native';
import { DetailCards } from '../../components/DetailCards';
import { HeaderDetails } from '../../components/HeaderDetails';
import theme from '../../styles/theme';

import { styles } from './styles';

export function Details() {
  return (
    <View style={styles.container}>
        <HeaderDetails/>

      

      <DetailCards/>

    </View>
  );
}