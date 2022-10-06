import { StyleSheet } from 'react-native';
import theme from '../../styles/theme';

export const styles = StyleSheet.create({
  container: {
    alignItems:'center',
    marginTop:33
  },
  text:{
    color:theme.colors.gray[300],
    fontSize:theme.fontSizes.lg,
    fontFamily:theme.fonts.body,
    marginTop:10,
    textAlign:'center'
  }
});