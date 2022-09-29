import {ActivityIndicator, View, StyleSheet} from 'react-native'
import theme from '../../styles/theme'

export function AppLoading(){
  return(
    <View style={styles.container}>
      <ActivityIndicator size={32} color={theme.colors.green[300]}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    height:'100%',
    backgroundColor:'#202024',
    justifyContent:'center',
    alignItems:'center'
  }
})