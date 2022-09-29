import { StyleSheet } from 'react-native';
import theme from '../../styles/theme';
import {getBottomSpace} from 'react-native-iphone-x-helper'

export const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: theme.colors.gray[600],
    alignItems:'center',
    paddingTop:getBottomSpace() + 68
  },
  
});