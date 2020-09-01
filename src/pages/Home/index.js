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
        <Image
          source={require("../../assets/banner.png")}
          style={styles.image}
        />

        <View style={styles.textContainer}>
          <Text style={styles.text}>TÊNIS</Text>
          <Text style={[styles.text, { color: "#cececf" }]}> - </Text>
          <Text style={[styles.text, { color: "#cececf" }]}> MASCULINO </Text>
          <TouchableOpacity
            style={{ position: "absolute", right: 0, alignSelf: "center" }}
          >
            <MaterialIcons name="filter-list" size={24} color="#000" />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.line} />

      <ScrollView>
        <Text style={styles.text}>LANÇAMENTOS </Text>

        <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
          <Shoes
            img={require("../../assets/1.png")}
            cost="R$199,99"
            onClick={() => navigation.navigate("Detail")}
          >
            Nike AIR FORCE (NOVO)
          </Shoes>
          <Shoes
            img={require("../../assets/2.png")}
            cost="R$299,99"
            onClick={() => navigation.navigate("Detail")}
          >
            Nike AIR MAX MASCULINO (NOVO)
          </Shoes>
        </View>

        <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
          <Shoes
            img={require("../../assets/3.png")}
            cost="R$599,99"
            onClick={() => alert("Clicou")}
          >
            Nike ROSHE ONE (NOVO)
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
  image: {
    width: "100%",
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
