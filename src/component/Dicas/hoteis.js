import React from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";

export default function Hoteis(props) {
  //Função para quebrar dar limite ao tamanho da descrição do item da loja
  function filterDesc(desc) {
    if (desc.length < 20) {
      return desc;
    }

    return `${desc.substring(0, 22)}...`;
  }

  return (
    <TouchableOpacity style={styles.container} onPress={props.onClick}>
      <Image source={props.img} style={styles.hoteisImg} />
      <Text style={styles.hoteisText}>{filterDesc(props.children)}</Text>
      <View opacity={0.4}>
        <Text style={styles.hoteisText}> {props.cost} </Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: "2%",
    alignItems: "center",
    justifyContent: "center",
  },
  hoteisImg: {
    width: 175,
    height: 175,
    borderRadius: 20,
    borderWidth: 3,
    borderColor: "#C0C0C0",
  },
  hoteisText: {
    fontSize: 13,
  },
});
