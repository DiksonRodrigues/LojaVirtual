import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";


export default function Contatos() {
  

  return (
  <View style={styles.container}>
      <View style={styles.text}>
      </View>
       <Text>Mais </Text>
  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#aaaa", 
    alignItems: 'center',
  },
  text: {
    flex: 1,
    color: '#ffab',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  }
});
