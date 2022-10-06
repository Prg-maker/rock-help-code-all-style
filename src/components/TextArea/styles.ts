import { StyleSheet } from 'react-native';
import theme from '../../styles/theme';

export const styles = StyleSheet.create({
  container: {
    height:'80%',
    width:'89%',
    
    backgroundColor:theme.colors.gray[700],
    flexDirection:'row',
    alignItems:'center',
    borderRadius:6,
    paddingLeft:18,
    marginTop:16,
    color:theme.colors.white,

  }
});