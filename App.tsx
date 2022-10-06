import { StatusBar } from 'expo-status-bar';
import { AppLoading } from './src/components/AppLoading';
import {Roboto_400Regular, Roboto_700Bold , useFonts} from '@expo-google-fonts/roboto'
import { SingIn } from './src/screens/SingIn';
import { Home } from './src/screens/Home';
import { Register } from './src/screens/Register';

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold
  })

  return (
   <> 
    <StatusBar style='light' translucent backgroundColor='transparent'/>
    {
      !fontsLoaded ? <AppLoading/> :<Register/>
    }
   </>

  );
}


