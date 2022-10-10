import React, { useState } from 'react';
import { Text, View , FlatList, ScrollView } from 'react-native';
import { CardDescription } from '../CardDescription';
import { CardNumberPatrimony } from '../CardNumberPatrimony';
import { CardSolution } from '../CardSolution';

import { styles } from './styles';


export function DetailCards() {
  
  const [order, setOrder] = useState([{
    id:'1'
  }])

  return (
    <View style={styles.container}>

     <CardNumberPatrimony/>

    <ScrollView style={styles.scrollViewContainer}>
      <CardDescription/>
      <CardSolution/>
    </ScrollView>
     
 
   


    </View>
  );
}