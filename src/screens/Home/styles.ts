import { StyleSheet } from 'react-native';
import theme from '../../styles/theme';

export const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:theme.colors.gray[700]
  },
  contentSolicitation:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    paddingHorizontal:21,
    marginTop:38
  },

  text:{
    color:theme.colors.gray[100],
    fontFamily:theme.fonts.heading,
    fontSize:theme.fontSizes.lg,
  },
  numberSolicitation:{
    color:theme.colors.gray[200],
    fontFamily:theme.fonts.body,
    fontSize:theme.fontSizes.md,
  },

  containerButtons:{
    flexDirection:'row',
    justifyContent:'space-between',
    paddingHorizontal:15,
    marginTop:13
  },
  button:{
    width:184,
    height:35,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:theme.colors.gray[600],
    borderRadius:4,
    
  },
  textButton:{
    color:theme.colors.gray[300],
    fontSize:theme.fontSizes.xs,

  },
  contentContainerStyle:{
    paddingBottom:25,
  },
  containerButton:{
    justifyContent:'center',
    alignItems:'center',
    paddingBottom:20
  }
});