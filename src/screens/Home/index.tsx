import React, { useState } from 'react';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import { Heading } from '../../components/Heading';
import { MessageAlternative } from '../../components/MessageAlternative';
import { Order , OrderProps } from '../../components/Order';
import theme from '../../styles/theme';

import { styles } from './styles';

interface PropsOrderHome extends OrderProps{
  orderId:string
}

export function Details() {

  const [orders , setOrders] = useState<PropsOrderHome[]>([
    {
      orderId:'1',
      patrimony: 123,
      date: '12/04/2021',
      status: 'Finished'  ,
      hours: '12'
    },
    {
      orderId:'2',
      patrimony: 123,
      date: '12/04/2021',
      status: 'inProgress'  ,
      hours: '12'
    }
  ])

  const [isSelected ,seIstSelected] = useState(true)

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
          {
            orders.length
          }
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

        


      {isSelected? 
          <FlatList
          data={orders.filter(order=> order.status === 'inProgress')}
          keyExtractor={item => item.orderId}
          renderItem={({item})=> {
            return(
              <>
                {
                  item.status =='inProgress' &&
                  <Order
                  date={item.date}
                  hours={item.hours}
                  patrimony={item.patrimony}
                  status={item.status}
                  /> 
                }
              
              </>
            )
          }} 
          contentContainerStyle={styles.contentContainerStyle}
          showsVerticalScrollIndicator={false}

          ListEmptyComponent={()=> {
            return(
              <MessageAlternative/>
            )
          }}
        />
      : <FlatList
          data={orders.filter(order=> order.status === 'Finished')}
          keyExtractor={item => item.orderId}
          renderItem={({item})=> {
            return(
              <>
                {
                  item.status =='Finished' &&
                  <Order
                  date={item.date}
                  hours={item.hours}
                  patrimony={item.patrimony}
                  status={item.status}
                  /> 
                }
              
              </>
            )
          }} 
          contentContainerStyle={styles.contentContainerStyle}
          showsVerticalScrollIndicator={false}

      ListEmptyComponent={()=> {
        return(
          <>
            <MessageAlternative/>
          </>

        )
      }}
    />}
     

    </View>
  );
}