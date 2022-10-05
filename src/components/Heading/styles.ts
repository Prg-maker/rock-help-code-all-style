import { StyleSheet } from 'react-native';
import theme from '../../styles/theme';

export const styles = StyleSheet.create({
  container: {
    width:'100%',
    height:136,
    backgroundColor:theme.colors.gray[600],
    flexDirection: 'row',
    justifyContent:'space-between',
    alignItems:'center',

    paddingLeft:27,
    paddingRight:31,
    paddingTop:40

  }
});