import React from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  
} from "react-native";

import { AntDesign } from '@expo/vector-icons'; 
import SizeButton from "../../component/SizeButton";


export default function Detail({ navigation }) {
  navigation.setOptions({
    headerTitle: "Brilho do Mar",
  });

  
  return (
    <ScrollView style={styles.container}>
      <Image
        source={require("../../assets/brilhodetail.jpg")}
        style={styles.image}
        resizeMode="cover"
      />

      <View>
        <View>
          <Text style={[styles.title, { fontSize: 24 }]}> Valores á combinar </Text>
        </View>
        <View opacity={0.4}>
          <Text style={[styles.title, { fontSize: 30 }]}>
            Biquínis
          </Text>
        </View>

        <View style={{ flexDirection: "row", width: "100%" }}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <SizeButton bgColor="#17181a" color="#fff">
              P
            </SizeButton>

            <SizeButton bgColor="#17181a" color="#fff">
              M
            </SizeButton>

            <SizeButton bgColor="#17181a" color="#fff">
              G
            </SizeButton>

            <SizeButton bgColor="#17181a" color="#fff">
              GG
            </SizeButton>

            <SizeButton bgColor="#17181a" color="#fff">
              INFANTIL
            </SizeButton>
            
          </ScrollView>
        </View>
        <View style={styles.textContent}>

         <View style={{ flexDirection: "row", width: "100%"}}>
           <AntDesign name="checksquare" size={34} color="#00FF00" />
           <Text style={{ width: 100, fontWeight: "bold" }}>Vendedor Verificado</Text>
         </View>

          <Text style={styles.textContent}>
            Brilho do Mar vem com Novidades para a nova coleção.
            Biquínis de alta qualidade e um preço super baixo
          </Text>

          <Text>______________________________________</Text>

          <Text style={styles.textList}>- Categoria: Masculina/Feminina</Text>

          <Text style={styles.textList}>- Produto: Biquínis</Text>

          <Text style={styles.textList}>- Local das Lojas: Fortaleza - CE Feirão Baturité Loja 01 a 06 | Santa Cruz - PE Moda Center - Setor Amarelo/Bloco 04, Loja 17</Text>
          
        </View>

        
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
