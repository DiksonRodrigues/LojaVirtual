import React from 'react';
import { View, StyleSheet, ImageBackground, Text } from 'react-native';

export default function Dicas() {
 return (
   <ImageBackground 
   source={require('../../assets/hotel.jpg')}
   style={styles.container}
   blurRadius={2}
   >

      <Text style={styles.Dica} >
        Hospedagem
      </Text>    

      <Text style={styles.text} >
        25% OFF
      </Text>   

   </ImageBackground>
  );
}

const styles = StyleSheet.create({
container:{
  height: 130,
  width: 230,
  marginRight: 20,
  borderRadius: 10,
  marginBottom: 40,
  opacity: 0.8,
  backgroundColor: "#000",
  marginLeft: 3,
  padding: 12,
  marginTop: 20,
},
Dica:{
  
}
});