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


import MaisContatos from "../../component/MaisContatos";



export default function Home() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.textContainer}>
          <Text style={styles.text}>Mais Lojas</Text>
        </View>
      </View>

      <ScrollView>

        <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
        <MaisContatos
            img={require("../../assets/masculino.png")}
            onClick={() => navigation.navigate("Masculino")}
          >
            MASCULINO
        </MaisContatos>

        <MaisContatos
            img={require("../../assets/feminina.png")}
            onClick={() => navigation.navigate("Detail2")}
          >
            FEMININA
        </MaisContatos>
        </View>

        <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
        <MaisContatos
            img={require("../../assets/infantil.png")}
            onClick={() => navigation.navigate("Detail3")}
           >
            INFANTIL
        </MaisContatos>
          
         <MaisContatos
            img={require("../../assets/acessorios.png")}
            onClick={() => navigation.navigate("Detail4")}
          >
            ACESSÓRIOS
        </MaisContatos>
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
