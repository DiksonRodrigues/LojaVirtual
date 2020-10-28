import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";

import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

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
            <MaterialIcons name="filter-list" size={24} color="#000" />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.line} />

      <ScrollView>
        <Text style={styles.text}>Destaques</Text>

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
            img={require("../../assets/4.png")}
            cost="R$399,99"
            onClick={() => alert("Clicou")}
          >
            Nike Air Max Advantage (NOVO)
          </Shoes>
        </View>

        <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
          <Shoes
            img={require("../../assets/5.png")}
            cost="R$799,99"
            onClick={() => alert("Clicou")}
          >
            Nike Air Max Sequent 3(NOVO)
          </Shoes>
          <Shoes
            img={require("../../assets/6.png")}
            cost="R$499,99"
            onClick={() => alert("Clicou")}
          >
            Nike Structure 21 (NOVO)
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
    backgroundColor: "#fff",
  },
  textContainer: {
    flexDirection: "row",
    marginVertical: "5%",
    marginHorizontal: "5%",
  },
  text: {
    fontFamily: "Anton_400Regular",
    fontSize: 26,
    marginHorizontal: "1%",
  },
  line: {
    borderBottomColor: "#d8d8d8",
    borderBottomWidth: 2,
  },
});
