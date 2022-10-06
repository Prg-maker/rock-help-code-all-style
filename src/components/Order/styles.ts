import { StyleSheet } from 'react-native';
import theme from '../../styles/theme';

export const styles = StyleSheet.create({
  container: {
    width:'92.5%',
    height:88,
    borderRadius:5,
    backgroundColor:theme.colors.gray[600],
    marginLeft:15,
    marginTop:20/*tirar esse margin top*/,
    flexDirection:'row',
    alignItems:'center'
  },
  bar:{
    width:7,
    height:'100%',
    
    borderTopLeftRadius:5,
    borderBottomLeftRadius:5,
  },
  content:{
    marginLeft:20,
  },
  pratrimonio:{
    color: theme.colors.white,
    
    fontFamily:theme.fonts.heading,
    fontSize:theme.fontSizes.md,
  },
  date:{
    flexDirection:'row',
    alignItems:'center',
    marginTop:5
  },
  dateText:{
    color:theme.colors.gray[300],
    paddingLeft:5
  },
  icon:{
    backgroundColor:theme.colors.gray[500],
    height:48,
    width:48,
    alignItems:'center',
    justifyContent:'center',
    borderRadius:100,
    marginLeft:'30%'

  },
  
});