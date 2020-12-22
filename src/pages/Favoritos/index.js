import React from "react";
import {
  View,
  Text,
  StyleSheet,
} from "react-native";

export default function Favoritos() {
 return (
  <View style={styles.container}>
  <View style={styles.text}>
  </View>
   <Text>Favoritos</Text>
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