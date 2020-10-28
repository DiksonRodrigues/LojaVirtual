import React from 'react';
import { View, Text, Button } from 'react-native';
import {useNavigation} from '@react-navigation/native;'

export default function Contatos() {
  const navigation = useNavigation();
 return (
   <View>
     <Text>Olá</Text>
     <Button
      titlle= "Voltar para Loja!"
      onPress={ () => navigation.goBack() }
     />
   </View>

  );
}