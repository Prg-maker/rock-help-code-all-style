import { CircleWavyCheck } from 'phosphor-react-native';
import React, { useState } from 'react';
import { Text, View , FlatList, ScrollView } from 'react-native';
import theme from '../../styles/theme';
import { CardDescription } from '../CardDescription';
import { CardNumberPatrimony } from '../CardNumberPatrimony';
import { CardSolution } from '../CardSolution';

import { styles } from './styles';


export function DetailCards() {
  
  const [order, setOrder] = useState(
    {
      id:'1',
      patrimony: {
        number:12345,
        wasSolved:true,
        problem:{
          text:'Oi meu nome é Daniel, Problema resolvido',
          date: '20/11/2022',
          hours: '14:30'
        },
        solution:{
          text:'Oi meu nome é Daniel, Problema resolvido',
          date: '20/11/2022',
          hours: '14:35'
        }
      },
    }
)

  return (
    <View style={styles.container}>

      <View style={styles.status}>
        <CircleWavyCheck  style={styles.icon} size={32} color={theme.colors.green[300]} />
        <Text style={styles.textStatus}>
          {
            order.patrimony.wasSolved? 'Finalizado': <Text></Text>
          }
        </Text>
      </View>


    <View style={styles.containerContent}>
      
     <CardNumberPatrimony/>

      <ScrollView style={styles.scrollViewContainer}>
        <CardDescription/>
        <CardSolution/>
      </ScrollView>
    </View>

 
 
   


    </View>
  );
}