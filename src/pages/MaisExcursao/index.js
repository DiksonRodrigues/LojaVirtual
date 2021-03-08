import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';

export default function MaisExcursoes({navigation}) {
  navigation.setOptions({
    headerTitle: "Mais Excursões",
  });

 return (
   <ScrollView style={styles.container} >
     <Image style={styles.image}
      source={require("./images/onibus.jpg")}
      resizeMode= "cover"
     />
     <Text style={styles.text} > Desculpe, ainda não temos Excursões de praia para mostrar... </Text>
   </ScrollView>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: "#fff"
  },
  text:{
    color: '#000',
    fontFamily: "Anton_400Regular",
    fontSize: 25,
    marginHorizontal: "6%",
  },
  image:{
    height: 300,
    backgroundColor: "#fff",
    width: 400,
  }
})