import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Linking } from 'react-native';

/*Tenho que aprender como colocar as props para não ter que criar 
um botão para cada destaque. Tenho que Assistir algumas aulas de como fazer isso...
*/


export default function Button() {
  const handleWhatsAppPress = async () => {
    await Linking.openURL("https://wa.me/+5585998306311?text= Vim pelo Aplicativo");
  };
 return (
   <View style={styles.container}>
     <TouchableOpacity 
      style={styles.btnContainer} 
      onPress={handleWhatsAppPress}>
        <Text style={styles.title} >Chamar no WhatsApp</Text>
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
    width:'90%',
    height: 50,
    backgroundColor: '#66CDAA',
    borderRadius: 5,
    marginVertical: '5%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  title:{
    fontSize: 17,
    color:'#fff'
  }

});