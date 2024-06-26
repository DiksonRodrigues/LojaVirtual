import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export default function MaisTraslados({navigation}) {
  navigation.setOptions({
    headerTitle: "Mais Traslados",
  });

 return (
   <View style={styles.container} >
     <Image style={styles.image}
      source={require("../../assets/sobre.jpg")}
      resizeMode= "cover"
     />
     <Text style={styles.text} > Desculpe, ainda não temos Hoteis para mostrar... </Text>
   </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff"
  },
  text:{
    color: '#000',
    fontFamily: "Anton_400Regular",
    fontSize: 25,
    marginHorizontal: "6%",
    marginVertical: "3%",
    right: 10,
  },
  image:{
    height: 400,
    backgroundColor: "#fff"
  }
})