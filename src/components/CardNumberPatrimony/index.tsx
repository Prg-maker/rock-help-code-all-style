import { DesktopTower } from 'phosphor-react-native';
import React from 'react';
import { Text, View } from 'react-native';
import theme from '../../styles/theme';

import { styles } from './styles';

export function CardNumberPatrimony() {
  return (
    <View style={styles.container}>

      <View style={styles.headerCard}>
        <DesktopTower size={20} weight="light" color={theme.colors.primary} />
        <Text style={styles.text}>EQUIPAMENTO</Text>
      </View>

      <Text style={styles.textPatrimony}>Patrimônio 123456</Text>
        
    </View>
  );
}