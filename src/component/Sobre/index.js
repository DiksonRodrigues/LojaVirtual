 import React from 'react';
import { View, StyleSheet, ImageBackground, Text, TouchableOpacity  } from 'react-native';

export default function Sobre({cover, Sobre, offer, onClick}) {
 return (
   <TouchableOpacity onPress={onClick} >
        <ImageBackground 
        source={cover}
        style={styles.container}
        
        >

            <Text style={[ styles.Sobre, styles.shadow ]} >
              {Sobre}
            </Text>    

            <Text style={[ styles.text, styles.shadow ]} >
              {offer}
            </Text>   


        </ImageBackground>
   </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
container:{
  height: 230,
  width: 530,
  marginRight: 10,
  marginBottom: 40,
  opacity: 0.9,
  backgroundColor: "#000",
  padding: 5,
  marginTop: 2,
},
Sobre:{
  fontSize: 45,
  fontFamily: "Anton_400Regular",
  color: "#000"
},
text:{
  fontSize: 20,
  fontFamily: "Anton_400Regular",
  color: "#fff"
},
shadow:{
  textShadowOffset: { width: 1, height: 2 },
  textShadowRadius: 3,
  textShadowColor: "#000"
}
});