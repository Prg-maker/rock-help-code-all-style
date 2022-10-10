import { StyleSheet } from 'react-native';
import theme from '../../styles/theme';

export const styles = StyleSheet.create({
  container: {
    minHeight:233,
    backgroundColor:theme.colors.gray[600],
    marginTop:20,
    borderRadius:5
  },
  header:{
    flexDirection:'row',
    paddingTop:24,
    paddingLeft:26,
    alignItems:"center"
  },
  textHeader:{
    color:theme.colors.gray[300],
    textTransform: 'uppercase',
    marginLeft: 11,
  },
  content:{
    paddingHorizontal:26,
    marginTop:12,
  },
  textContent:{
    color:theme.colors.gray[100],
    fontSize:theme.fontSizes.md,

  },
  separete:{
    width:'90%',
    height:2,
    backgroundColor:theme.colors.gray[500],
    marginTop:12,
    marginHorizontal:20
  },
  containerDate:{
    paddingTop:12,
    paddingBottom:24,
    paddingHorizontal:25,

  },
  date:{
    color:theme.colors.gray[300],
    
  }
    
});