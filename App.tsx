import { StyleSheet, Text, View , Image } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { AppLoading } from './src/components/AppLoading';
import {Roboto_400Regular, Roboto_700Bold , useFonts} from '@expo-google-fonts/roboto'
import { Home } from './src/screens/SingIn';
import { Details } from './src/screens/Home';

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold
  })

  return (
   <> 
    <StatusBar style='light' translucent backgroundColor='transparent'/>
    {
      !fontsLoaded ? <AppLoading/> :<Details/>
    }
   </>

  );
}


