import { StyleSheet } from 'react-native';
import {getBottomSpace} from 'react-native-iphone-x-helper'
import theme from '../../styles/theme';
export const styles = StyleSheet.create({
  container: {
    flexDirection:'row',
    paddingTop:getBottomSpace() + 92,
    alignItems:'center',
    justifyContent:'center',
  },
  text:{
    color:theme.colors.gray[100],
    fontFamily:theme.fonts.heading,
    fontSize: theme.fontSizes.lg,
  },
  icon:{
    position:'relative',
    right:108
  }
});