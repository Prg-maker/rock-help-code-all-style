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

      <View style={styles.status}>
        <CircleWavyCheck  style={styles.icon} size={32} color={theme.colors.green[300]} />
        <Text style={styles.textStatus}>
          FINALIZADO
        </Text>
      </View>

      <DetailCards/>

    </View>
  );
}