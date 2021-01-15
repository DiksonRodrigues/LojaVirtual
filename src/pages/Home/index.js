import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";

import { useNavigation } from "@react-navigation/native";

import { AntDesign } from '@expo/vector-icons'; 

import Lojas from "../../component/Lojas";
import Dicas from "../../component/Dicas";
import Sobre from "../../component/Sobre";
import SwiperComponent from "../../component/Swiper";
import OutrasLojas from "../../component/OutrasLojas";

export default function Home() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.textContainer}>
          <Text style={styles.text}>Aplicativo Zé Avelino</Text>
          
          <TouchableOpacity
            style={{ position: "absolute", right: 0, alignSelf: "center" }}
          >
            <AntDesign name="mobile1" size={24} color="darkgray" />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.line} />

      <ScrollView>
        <View style={styles.swiperContent} >
          <SwiperComponent/>
        </View>
        <Text style={styles.textDestaque}>Destaques</Text>

        <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
          <Lojas
            img={require("../../assets/dumbo1.jpg")}
            cost="R$15,00"
            onClick={() => navigation.navigate("Detail")}
          >
            DUMBO T-SHIRTS
          </Lojas>

          <Lojas
            img={require("../../assets/cljeans1.jpg")}
            cost="R$35,00"
            onClick={() => navigation.navigate("Detail2")}
          >
            CL JEANS
          </Lojas>
        </View>

        <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
          <Lojas
            img={require("../../assets/brilho1.jpg")}
            cost="R$ Á Combinar"
            onClick={() => navigation.navigate("Detail3")}
          >
            BRILHO DO MAR
          </Lojas>
          
          <Lojas
            img={require("../../assets/feminice1.jpg")}
            cost="R$28.00"
            onClick={() => navigation.navigate("Detail4")}
          >
            Loja Feminice 
          </Lojas>
        </View>

        <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
          <Lojas
            img={require("../../assets/ramira1.jpg")}
            cost="R$ Á Combinar"
            onClick={() => navigation.navigate("Detail5")}
          >
            Ramira Moda Fitness
          </Lojas>
          
          <Lojas
            img={require("../../assets/chitzc.jpg")}
            cost="R$ Á Combinar"
            onClick={() => navigation.navigate("Detail6")}
          >
           Chinntz
          </Lojas>
          
        </View> 
       
        <Text style= {[styles.textDestaque, { marginTop: 20 } ]}>
       Dica do Dia
      </Text>
      
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{paddingHorizontal: 15  }}>
       
       <Dicas
        cover={require('../../assets/hotel.jpg')}
        Dica="Hotel"
        offer="Com até 20% de DESCONTO"
        onClick={() => navigation.navigate("Mais")}
       />

      <Dicas
        cover={require('../../assets/onibus.jpg')}
        Dica="Excursões"
        offer="Encontre as melhores Excursões, de Fortaleza para todo o Brasil."
        onClick={() => navigation.navigate("Mais")}
       />

      <Dicas
        cover={require('../../assets/dicadumbo.jpeg')}
        Dica="Loja Dumbo"
        offer="30% de desconto"
        onClick={() => navigation.navigate("Detail")}
       />

      </ScrollView>
  
      <Text style= {[styles.textDestaque, { marginTop: 5 } ]}>
       Outras Lojas
      </Text>

      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{paddingHorizontal: 15  }} >
       
           <OutrasLojas
            cover={require('../../assets/masculino.png')}
            OutrasLojas="MASCULINO"
            offer="Clique Aqui"
            onClick={() => navigation.navigate("Masculino")}
            />

           <OutrasLojas
            cover={require('../../assets/feminina.png')}
            OutrasLojas="Feminina"
            offer="Clique Aqui"
            onClick={() => navigation.navigate("Feminina")}
            />
   
           <OutrasLojas
            cover={require('../../assets/infantil.png')}
            OutrasLojas="INFANTIL"
            offer="Clique Aqui"
            onClick={() => navigation.navigate("Infantil")}
            />

           <OutrasLojas
            cover={require('../../assets/acessorios.png')}
            OutrasLojas="ACESSÓRIOS"
            offer="Clique Aqui"
            onClick={() => navigation.navigate("Acessorios")}
            />

      </ScrollView>
    
      <ScrollView style={{paddingHorizontal: 15  }} >
            <Sobre
              cover={require('../../assets/sobre.jpg')}
              Sobre="Sobre Nós"
              offer="Saiba Mais Sobre Nós Clicando aqui..."
              onClick={() => navigation.navigate("Nos")}
            />
      </ScrollView>

      </ScrollView>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8F8FF",
  },
  header: {
    backgroundColor: "#F0f0f0", 
  },
  textContainer: {
    flexDirection: "row",
    marginVertical: "2%",
    marginHorizontal: "5%",
    marginEnd: 30,
    marginTop: 30,
    left: 20,
    right: 20
  },
  text: {
    fontFamily: "Anton_400Regular",
    color: '#000',
    fontSize: 26,
    marginHorizontal: "6%",
    marginVertical: "3%",
    right: 50,
  },
  textDestaque:{
    color: '#000',
    fontFamily: "Anton_400Regular",
    fontSize: 26,
    marginHorizontal: "6%",
    marginVertical: "3%",
    right: 10,
  },
  line: {
    borderBottomColor: "#fff",
    borderBottomWidth: 2,
  },
  swiperContent:{
    flexDirection: 'row',
    height: 180,
    width: '100%',
    resizeMode: 'contain'
  }

});