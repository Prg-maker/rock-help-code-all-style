import { Text, TouchableOpacity, View } from 'react-native';
import LogoImgSvg from '../../assets/Logo.svg'
import { styles } from './styles';
import { Input } from '../../components/Input';
import { EnvelopeSimple , Key} from 'phosphor-react-native';
import theme from '../../styles/theme';
import { Button } from '../../components/Button';

export function Home() {
  return (
    <View style={styles.container}>
      <LogoImgSvg/>

      <View style={styles.content}>
        <Text style={styles.title}>
          Accesse sua conta
        </Text>

        <View>

          <Input placeholder='E-mail'>
            <EnvelopeSimple size={24} color={theme.colors.gray[300]}/>
          </Input>

          <Input placeholder='Senha'>
            <Key size={24} color={theme.colors.gray[300]}/>
          </Input>


         
          <Button 
            title='Entrar'
          />


        </View>


      </View>
    </View>
  );
}