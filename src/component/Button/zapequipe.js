import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Linking } from 'react-native';

import { FontAwesome} from '@expo/vector-icons';


export default function Button() {
  const handleWhatsAppPress = async () => {
    await Linking.openURL("https://wa.me/+5585986654636?text= Vim pelo Aplicativo Zé Avelino, quero anunciar !!!");
  };
 return (
   <View style={styles.container}>
     <TouchableOpacity 
      style={styles.btnContainer} 
      onPress={handleWhatsAppPress}>

        <FontAwesome name="whatsapp" size={44} color="#fff" />
        <Text style={styles.title} >WhatsApp</Text>
     </TouchableOpacity>
   </View>
  );
}

const styles = StyleSheet.create({
  container:{
    alignItems: 'center',
    justifyContent: 'center'
  },
  btnContainer:{
    flexDirection: 'row',
    width:'100%',
    height: 50,
    borderRadius: 35,
    marginVertical: '5%',
    backgroundColor: '#00FF00'
  },
  title: {
    marginHorizontal: '5%',
    fontSize: 25,
    color: '#fff',
    fontFamily: "Anton_400Regular",
  }

});