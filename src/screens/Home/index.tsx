import React, { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { Heading } from '../../components/Heading';
import theme from '../../styles/theme';

import { styles } from './styles';

export function Details() {

  const [isSelected ,seIstSelected] = useState(false)

  function toggleIsSelectedForTrue(){
    seIstSelected(true)
  }

  function toggleIsSelectedForFalse(){
    seIstSelected(false)

  }
  return (
    <View style={styles.container}>
      <Heading/>

      <View style={styles.contentSolicitation}>

        <Text style={styles.text}>
          Solicitações
        </Text>


        <Text style={styles.numberSolicitation}>
          2
        </Text>


      </View>

      <View style={styles.containerButtons}>

        <TouchableOpacity onPress={toggleIsSelectedForTrue} style={[styles.button , isSelected&& {
          borderWidth:1,
          borderColor:theme.colors.secondary,
        }]}>


          <Text style={[styles.textButton , isSelected&&{
            color:theme.colors.secondary
          }]}>
            EM ADAMENTO
          </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={toggleIsSelectedForFalse}  style={[styles.button , !isSelected&&{
          borderWidth:1,
          borderColor:theme.colors.green[300],
        }]}>
          <Text style={[styles.textButton , !isSelected && {
            color:theme.colors.green[300]
          }]}>
            FINALIZADOS
          </Text>
        </TouchableOpacity>

      </View>
    </View>
  );
}