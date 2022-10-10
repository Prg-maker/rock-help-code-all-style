import { StyleSheet } from 'react-native';
import theme from '../../styles/theme';

export const styles = StyleSheet.create({
  container:{
    minHeight:96,
    backgroundColor:theme.colors.gray[600],
    borderRadius:5,
    paddingLeft:22

  },
  headerCard:{
    flexDirection:'row',
    alignItems:'center',
    marginTop:15  

  },
  text:{
    color:theme.colors.gray[300],
    fontSize: theme.fontSizes.sm,
    marginLeft:8,
  },
  textPatrimony:{
    color:theme.colors.gray[100],
    fontSize:theme.fontSizes.md,
    marginTop:8

  }
});