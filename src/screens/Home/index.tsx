import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import LogoImgSvg from '../../assets/Logo.svg'
import { styles } from './styles';
import { Input } from '../../components/Input';

export function Home() {
  return (
    <View style={styles.container}>
      <LogoImgSvg/>

      <View style={styles.content}>
        <Text style={styles.title}>
          Accesse sua conta
        </Text>

        <View >

          <Input/>

          <TextInput placeholder='Senha'>

          </TextInput>


          <TouchableOpacity>
            <Text>Entrar</Text>
          </TouchableOpacity>


        </View>


      </View>
    </View>
  );
}