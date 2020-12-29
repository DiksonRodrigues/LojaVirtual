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


import Shoes from "../../component/Shoes";


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
        <Text style={styles.textDestaque}>Destaques</Text>

        <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
          <Shoes
            img={require("../../assets/dumbo1.jpg")}
            cost="R$13,00"
            onClick={() => navigation.navigate("Detail")}
          >
            DUMBO T-SHIRTS
          </Shoes>

          <Shoes
            img={require("../../assets/cljeans1.jpg")}
            cost="R$35,00"
            onClick={() => navigation.navigate("Detail2")}
          >
            CL JEANS
          </Shoes>
        </View>

        <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
          <Shoes
            img={require("../../assets/brilho1.jpg")}
            cost="R$ Á Combinar"
            onClick={() => navigation.navigate("Detail3")}
          >
            BRILHO DO MAR
          </Shoes>
          
          <Shoes
            img={require("../../assets/feminice1.jpg")}
            cost="R$28.00"
            onClick={() => navigation.navigate("Detail4")}
          >
            Loja Feminice 
          </Shoes>
        </View>

        <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
          <Shoes
            img={require("../../assets/ramira1.jpg")}
            cost="R$ Á Combinar"
            onClick={() => navigation.navigate("Detail5")}
          >
            Ramira Moda Fitness
          </Shoes>
          <Shoes
            img={require("../../assets/chitzc.jpg")}
            cost="R$ Á Combinar"
            onClick={() => navigation.navigate("Detail6")}
          >
           Chinntz
          </Shoes>
          
        </View> 
      </ScrollView>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
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
});
