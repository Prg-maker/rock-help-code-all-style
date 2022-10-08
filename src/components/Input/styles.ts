import { StyleSheet } from 'react-native';
import theme from '../../styles/theme';

export const styles = StyleSheet.create({
  container: {
    maxWidth:362,
    height:56,
    backgroundColor:theme.colors.gray[700],
    flexDirection:'row',
    alignItems:'center',
    borderRadius:6,
    paddingLeft:18,
    marginTop:16,
    borderWidth:1,
    borderColor:theme.colors.primary
  },
  input:{
    width:'100%',
    height:'100%',
    paddingLeft:18,
    fontSize:theme.fontSizes.md,
    fontFamily:theme.fonts.body,
    color: theme.colors.gray[300],
    borderRadius: 6,
    

  },
  
});