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

export default function Destaques() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.textContainer}>
          <Text style={styles.text}>Lojas em Destaque</Text>
          
          <TouchableOpacity
            style={{ position: "absolute", right: 0, alignSelf: "center", flexDirection: "row"}}
          >
            <AntDesign name="star" size={24} color="gold" />
            <AntDesign name="star" size={24} color="gold" />
            <AntDesign name="star" size={24} color="gold" />
            <AntDesign name="star" size={24} color="gold" />
            <AntDesign name="star" size={24} color="gold" />
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView>

        <View style={{ flexDirection: "row", justifyContent: "space-around" }}>

          <Lojas
            img={require("../../assets/dumbo1.jpg")}
            
            onClick={() => navigation.navigate("Detail")}
          >
            DUMBO T-SHIRTS
          </Lojas>


          <Lojas
            img={require("../../assets/cljeans1.jpg")}
            
            onClick={() => navigation.navigate("Detail2")}
          >
            CL JEANS
          </Lojas>
        </View>

        <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
          <Lojas
            img={require("../../assets/brilho1.jpg")}
            
            onClick={() => navigation.navigate("Detail3")}
          >
            BRILHO DO MAR
           </Lojas>
          
           <Lojas
            img={require("../../assets/feminice1.jpg")}
            
            onClick={() => navigation.navigate("Detail4")}
          >
            Loja Feminice 
            </Lojas>
        </View>

        <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
           <Lojas
            img={require("../../assets/ramira1.jpg")}
            
            onClick={() => navigation.navigate("Detail5")}
          >
            Ramira Moda Fitness
            </Lojas>
            <Lojas
            img={require("../../assets/chitzc.jpg")}
            
            onClick={() => navigation.navigate("Detail6")}
          >
           Chinntz
           </Lojas>
          
        </View> 

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
    backgroundColor: "#F8F8FF", 
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
