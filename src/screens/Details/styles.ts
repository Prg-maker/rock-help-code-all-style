import { StyleSheet } from 'react-native';
import theme from '../../styles/theme';

export const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:theme.colors.gray[700],

  },
  header:{
    backgroundColor:theme.colors.gray[600],
    paddingBottom:35
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
  textStatus:{
    color:theme.colors.green[300],
    fontSize:theme.fontSizes.sm,
    fontFamily:theme.fonts.heading
  }
});