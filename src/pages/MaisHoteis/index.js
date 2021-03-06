import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';

import SwiperCost from "./swiper.hoteis";
import SwiperMartin from "./HotelMartin/swipermartin";
import SwiperStudio from "./HotelStudio/swiper.studio";
import SwiperCosteira from './HotelCosteira/swiper.costeira';


export default function MaisExcursao({navigation}) {
  navigation.setOptions({
    headerTitle: "Mais Hoteis",
  });

 return (
   
   <ScrollView style={styles.container} >
   
    <View style={{flexDirection: 'row', justifyContent: "space-around"}}>
      <Text style={styles.title} >Flat Yacht Coast</Text>
      <Text style={styles.descripionvalor} > R$105/dia </Text>
    </View>
      <View style={styles.swiper}> 
        <SwiperCost/>
      </View>
    <Text style={styles.descripion} >* Casa inteira
     Você terá a acomodação do tipo apartamento só para você.</Text>
    <Text style={styles.descripion} >* Limpo e arrumado.</Text>
    <Text style={styles.descripion} >* Ótima localização, 100% dos hóspedes recentes deram 5 estrelas à localização.</Text>
    <Text style={styles.descripion} >* Contato (85) 98651-5553</Text>


    <View style={{flexDirection: 'row', justifyContent: "space-around"}}>
      <Text style={styles.title} >Saint Martin</Text>
      <Text style={styles.descripionvalor} > R$86,00/dia </Text>
    </View>
      <View style={styles.swiper}>
        <SwiperMartin/>
      </View>
    <Text style={styles.descripion} >* Casa inteira,
     você terá a acomodação do tipo flat só para você.</Text>
    <Text style={styles.descripion} >* 2 hóspedes · 1 quarto · 1 cama · 1 banheiro. Limpo e higienizado</Text>
    <Text style={styles.descripion} >* Este anfitrião não permite animais de estimação.</Text>
    <Text style={styles.descripion} >* Contato (85) 99111-5897</Text>
     


    <View style={{flexDirection: 'row', justifyContent: "space-around"}}>
      <Text style={styles.title} >Studio Beira Mar</Text>
      <Text style={styles.descripionvalor} > R$60,00/dia </Text>
    </View>
      <View style={styles.swiper}>
        <SwiperStudio/>
      </View>
    <Text style={styles.descripion} >* Casa inteira,
     Você terá a acomodação do tipo loft só para você.</Text>
    <Text style={styles.descripion} >* Ótima localização
     90% dos hóspedes recentes deram 5 estrelas à localização.</Text>
    <Text style={styles.descripion} >* Excelente experiência de check-in
     90% dos hóspedes recentes deram 5 estrelas ao processo de check-in.</Text>
    <Text style={styles.descripion} >* Contato (85) 98890-1899</Text>

   

    <View style={{flexDirection: 'row', justifyContent: "space-around"}}>
      <Text style={styles.title} >Villa Costeira</Text>
      <Text style={styles.descripionvalor} > R$83,00/dia </Text>
    </View>
      <View style={styles.swiper}>
        <SwiperCosteira/>
      </View>
    <Text style={styles.descripion} >* Casa inteira,
     Você terá a acomodação do tipo flat só para você.</Text>
    <Text style={styles.descripion} >* Ótima localização
     100% dos hóspedes recentes deram 5 estrelas à localização.</Text>
    <Text style={styles.descripion} >* Limpo e arrumado, 5 hóspedes recentes disseram que a limpeza deste lugar estava impecável..</Text>
    <Text style={styles.descripion} >* Contato (85) 99944-2514</Text>





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
    marginTop: "10%",
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
    color: '#8B8989'
  },
  descripionvalor:{
    fontSize: 20,
    marginHorizontal: "6%",
    marginTop: 45,
    marginLeft: 50,
    backgroundColor: "#00FF00" 
  }
})