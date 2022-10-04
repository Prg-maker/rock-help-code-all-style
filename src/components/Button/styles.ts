import { StyleSheet } from 'react-native';
import theme from '../../styles/theme';

export const styles = StyleSheet.create({
  button:{
    width:364,
    height: 56,
    backgroundColor:theme.colors.green[700],
    justifyContent:'center',
    alignItems:'center',
    borderRadius:6,
    marginTop:32
  },
  titleButton:{
    color:theme.colors.white,
    fontSize:theme.fontSizes.md,
    fontFamily:theme.fonts.heading
  }
});