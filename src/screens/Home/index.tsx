import React, { useState } from 'react';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import { Button } from '../../components/Button';
import { Heading } from '../../components/Heading';
import { MessageAlternative } from '../../components/MessageAlternative';
import { Order , OrderProps } from '../../components/Order';
import theme from '../../styles/theme';

import { styles } from './styles';

interface PropsOrderHome extends OrderProps{
  orderId:string
}

interface Verification{
  validation: 'inProgress' | 'Finished';
}

export function Home() {

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
    },
    {
      orderId:'3',
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

  function handleVerification(data:Verification){
    if(data.validation == 'inProgress'){
      return orders.filter(order=> order.status === 'inProgress')
    }
    return  orders.filter(order=> order.status === 'Finished')
  }


  return (
    <View style={styles.container}>
      <Heading/>

      <View style={styles.contentSolicitation}>

        <Text style={styles.text}>
          Solicitações
        </Text>


        {
          isSelected ? 
          <Text style={styles.numberSolicitation}>
            {
              handleVerification({validation:'inProgress'}).length
            }
          </Text> 
          : 
          <Text style={styles.numberSolicitation}>
            {
              handleVerification({validation:'Finished'}).length
            }
          </Text> 
        }


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
          data={handleVerification({validation:'inProgress'})}
          keyExtractor={item => item.orderId}
          renderItem={({item})=> {
            return(
              <>
                <Order
                date={item.date}
                hours={item.hours}
                patrimony={item.patrimony}
                status={item.status}
                /> 
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
          data={handleVerification({validation:'Finished'})}
          keyExtractor={item => item.orderId}
          renderItem={({item})=> {
            return(
              <>
                  
                <Order
                date={item.date}
                hours={item.hours}
                patrimony={item.patrimony}
                status={item.status}
                /> 
              
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



      <View
        style={styles.containerButton}
      >
        <Button
          title='Nova solicitação'
        />
      </View>
    

    </View>
  );
}