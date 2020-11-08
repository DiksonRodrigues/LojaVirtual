import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Linking } from 'react-native';

import { FontAwesome} from '@expo/vector-icons';


export default function Button() {
  const handleWhatsAppPress = async () => {
    await Linking.openURL("https://wa.me/+55859998016418?text= Vim pelo Aplicativo Zé Avelino");
  };
 return (
   <View style={styles.container}>
     <TouchableOpacity 
      style={styles.btnContainer} 
      onPress={handleWhatsAppPress}>
        
        <FontAwesome name="whatsapp" size={34} color="#fff" />
        <Text style={styles.title} >WhatsApp</Text>
     </TouchableOpacity>
   </View>
  );
}

const styles = StyleSheet.create({
  container:{
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnContainer:{
    flexDirection: 'row',
    width:'90%',
    height: 50,
    backgroundColor: '#66CDAA',
    borderRadius: 5,
    marginVertical: '5%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    marginHorizontal: '5%',
    fontSize: 16,
    color: '#fff'
  }
});