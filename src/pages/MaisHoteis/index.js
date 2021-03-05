import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';

import SwiperVila from "./swiper.hoteis";

export default function MaisExcursao({navigation}) {
  navigation.setOptions({
    headerTitle: "Mais Hoteis",
  });

 return (
   
   <ScrollView style={styles.container} >
     <Text style={styles.title} > Hotel da Villa </Text>
    
    <View style={styles.swiper}> 
      <SwiperVila/>
    </View>
     <Text style={styles.descripion} > Hotel caro demais  </Text>

   </ScrollView>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: "#fff"
  },
  title:{
    color: '#000',
    fontFamily: "Anton_400Regular",
    fontSize: 25,
    marginHorizontal: "6%",
    marginVertical: "3%",
    right: 10,
  },
  swiper:{
    height: 300,
    padding: 10,
  },
  descripion:{
    fontSize: 20,
    marginHorizontal: "6%",
    right: 10,
  }
})