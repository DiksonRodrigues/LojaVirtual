import React from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

import Dot from "../../component/Dot";
import SizeButton from "../../component/SizeButton";
import Button from "../../component/Button";

export default function Detail({ navigation }) {
  navigation.setOptions({
    headerTitle: "Nike AIR MAX MASCULINO",
  });

  return (
    <ScrollView style={styles.container}>
      <Image
        source={require("../../assets/detail.png")}
        style={styles.image}
        resizeMode="cover"
      />

      <View>
        <View>
          <Text style={[styles.title, { fontSize: 24 }]}>R$ 299,99</Text>
        </View>
        <View opacity={0.4}>
          <Text style={[styles.title, { fontSize: 30 }]}>
            Nike AIR MAX MASCULINO
          </Text>
        </View>

        <View style={styles.dotContainer}>
          <Dot color="#2379f4" />
          <Dot color="#fb6e53" />
          <Dot color="#ddd" />
          <Dot color="#000" />
        </View>

        <View style={{ flexDirection: "row", width: "100%" }}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <SizeButton bgColor="#17181a" color="#fff">
              40
            </SizeButton>
            <SizeButton>37</SizeButton>
            <SizeButton>39</SizeButton>
            <SizeButton>42</SizeButton>
          </ScrollView>
        </View>
        <View style={styles.textContent}>
          <Text style={styles.textTitle}>Nike AIR MAX MASCULINO</Text>

          <Text style={styles.textContent}>
            Um tênis para correr muito buscado , o Nike Air Max Advantage faz
            parte da linha AirMax, uma das mais conhecidas da Nike pela
            excelente absorção de impactos.
          </Text>
          <Text style={styles.textList}>- Categoria: Amortecimento</Text>

          <Text style={styles.textList}>- Material: Mesh</Text>
        </View>

        <Button />
      </View>
    </ScrollView>
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
  title: {
    fontFamily: "Anton_400Regular",
    paddingHorizontal: "2%",
  },
  dotContainer: {
    flexDirection: "row",
    marginVertical: "7%",
  },
  textContent: {
    fontSize: 16,
    lineHeight: 25,
    marginVertical: "2%",
    paddingHorizontal: "2%",
  },
  textTitle: {
    fontSize: 22,
    marginVertical: "5%",
  },
  textlist: {
    fontSize: 16,
    lineHeight: 25,
  },
});
