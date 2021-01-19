import React from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";

export default function MaisLugares(props) {
  //Função para quebrar dar limite ao tamanho da descrição do item da loja
  function filterDesc(desc) {
    if (desc.length < 20) {
      return desc;
    }

    return `${desc.substring(0, 22)}...`;
  }

  return (
    <TouchableOpacity style={styles.container} onPress={props.onClick}>
      <Image source={props.img} style={styles.MaisLugaresImg} />
      <Text style={styles.MaisLugaresText}>{filterDesc(props.children)}</Text>
      <View opacity={0.4}>
        <Text style={styles.MaisLugaresText}> {props.cost} </Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: "1%",
    alignItems: "center",
    justifyContent: "center",
  },
  MaisLugaresImg: {
    width: 175,
    height: 175,
    borderRadius: 20,
    borderWidth: 3,
    borderColor: "#C0C0C0",
  },
  MaisLugaresText: {
    fontSize: 20,
  },
});
