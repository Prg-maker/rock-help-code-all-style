import React from 'react';
import { TouchableOpacity, View,  } from 'react-native';

import { styles } from './styles';

import LogoHeader from '../../assets/LogoHeader.svg'
import {SignOut}  from 'phosphor-react-native'
import theme from '../../styles/theme';

export function Heading() {
  return (
    <View style={styles.container}>
      <LogoHeader/>

      <TouchableOpacity>
        <SignOut size={26} color={theme.colors.gray[300]}/>
      </TouchableOpacity>
    </View>
  );
}