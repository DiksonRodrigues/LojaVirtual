import React from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Linking
} from "react-native";

import { AntDesign } from '@expo/vector-icons'; 

import SizeButton from "../../component/SizeButton";

import Button from "../../component/Button/zapdetail2";


export default function Detail({ navigation }) {
  navigation.setOptions({
    headerTitle: "CL Jeans",
  });
 
  const handleInstagramPress = async () => {
    await Linking.openURL("https://www.instagram.com/_cel_jeans/");
  };

   const zapdetail2 = {}
   
  return (

    <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>

      <View>
       <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <Image
        source={require("../../assets/cldetail.jpg")}
        resizeMode= "cover"
        />
        <Image
        source={require("../../assets/cldetail2.jpg")}
        resizeMode= "cover"
        />
        <Image
        source={require("../../assets/cldetail3.jpg")}
        resizeMode= "cover"
        />
        <Image
        source={require("../../assets/cldetail4.jpg")}
        resizeMode= "cover"
        />
        
    </ScrollView>

    <View style={{ flexDirection: "row",  right: 20, alignSelf: "flex-start" }}>
           <Text style={{ fontSize: 20, marginHorizontal: 20, color: 'gray' }}> ARRASTE PRO LADO </Text>
           <AntDesign name="doubleright" size={24} color="black" />
           <AntDesign name="doubleright" size={24} color="black" />
           <AntDesign name="doubleright" size={24} color="black" />
        </View>
      </View>

      <View>
        <View >
          <Text style={[styles.title, { fontSize: 24 }]}> A partir de R$ 35,00</Text>
        </View>
        <View opacity={0.4}>
          <Text style={[styles.title, { fontSize: 30 }]}>
            Jeans em Geral
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
            
          </ScrollView>
        </View>
        <View style={styles.textContent}>

         <View style={{ flexDirection: "row", width: "100%"}}>
           <AntDesign name="checksquare" size={34} color="#00FF00" />
           <Text style={{ width: 100, fontWeight: "bold" }}>Vendedor Verificado</Text>
        </View>

          <Text style={styles.textContent}>
            Cl Jeans Traz para os clientes o melhor Jeans do mercado.
            Com qualidade e preço justo a marca CL JEANS vem fazendo
            seu nome no mercado ao longo dos dias.
          </Text>
          <Text>_____________________________________________</Text>
          <Text style={styles.textList}>- Categoria: Feminina</Text>

          <Text style={styles.textList}>- Produto: Jeans</Text>

          <Text style={styles.textList}>- Local da Loja: Fortaleza - CE Rua Jose Avelino - Galpão Pop Shop, BOX 752/772 </Text>
        </View> 

        <TouchableOpacity style={styles.btnContainer} 
             onPress={handleInstagramPress}>
            
             <AntDesign name="instagram" size={34} color="white" />
             <Text style={styles.titleInsta} >Instagram</Text>
         </TouchableOpacity>
        
        <Button onClick={zapdetail2}/>
          
         
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
    marginVertical: "5%"
  },
  dotContainer: {
    flexDirection: "row",
    marginVertical: "7%",
  },
  textContent: {
    fontSize: 16,
    lineHeight: 25,
    marginVertical: "5%",
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
  btnContainer:{
    flexDirection: 'row',
    width:'90%',
    height: 50,
    backgroundColor: '#836FFF',
    borderRadius: 5,
    marginVertical: '5%',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: '5%',
  },
  titleInsta: {
    marginHorizontal: '5%',
    fontSize: 16,
    color: '#fff'
  }
});
