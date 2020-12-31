import React from 'react';
import { View, StyleSheet, ImageBackground, Text } from 'react-native';

export default function Dicas({cover, Dica, offer}) {
 return (
   <ImageBackground 
   source={cover}
   style={styles.container}
   blurRadius={3}
   >

      <Text style={[ styles.Dica, styles.shadow ]} >
        {Dica}
      </Text>    

      <Text style={[ styles.text, styles.shadow ]} >
        {offer}
      </Text>   

   </ImageBackground>
  );
}

const styles = StyleSheet.create({
container:{
  height: 130,
  width: 230,
  marginRight: 10,
  marginBottom: 40,
  opacity: 0.9,
  backgroundColor: "#000",
  padding: 5,
  marginTop: 2,
},
Dica:{
  fontSize: 25,
  fontFamily: "Anton_400Regular",
  color: "#fff"
},
text:{
  fontSize: 15,
  fontFamily: "Anton_400Regular",
  color: "#fff"
},
shadow:{
  textShadowOffset: { width: 1, height: 2 },
  textShadowRadius: 3,
  textShadowColor: "#000"
}
});