import { StyleSheet } from 'react-native';
import theme from '../../styles/theme';

export const styles = StyleSheet.create({
  container: {
  },

  status:{
    backgroundColor:theme.colors.gray[500],
    justifyContent:'center',
    alignItems:'center',
    paddingVertical:10,
    flexDirection:'row'
  },
  icon:{
    marginRight:14
  },
  containerContent:{
    paddingHorizontal:24,
    marginTop:20

  },

  textStatus:{
    color:theme.colors.green[300],
    fontSize:theme.fontSizes.md,
    fontFamily:theme.fonts.heading
  },
  scrollViewContainer:{
    marginBottom:450,
    marginTop: 10
    
  }
  
});