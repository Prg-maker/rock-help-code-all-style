import { StyleSheet } from 'react-native';
import theme from '../../styles/theme';

export const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: theme.colors.gray[600],
  },
  form:{
    flex:1,
    alignItems:'center',
  },
  containerButton:{
    alignItems:'center',
    paddingBottom:20
  }
});