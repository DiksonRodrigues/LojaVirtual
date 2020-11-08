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

import Button from "../../component/Button/zapdetail6";



export default function Detail({ navigation }) {
  navigation.setOptions({
    headerTitle: "Chinntz",
  });
  
  const handleInstagramPress = async () => {
    await Linking.openURL("https://www.instagram.com/chinntz/");
  };

   const zapdetail6 = {}
   
  return (

    <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>

      <View>
       <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>

        <Image
        source={require("../../assets/chinntz2.jpg")}
        resizeMode= "cover"
        />

        <Image
        source={require("../../assets/chinntz3.jpg")}
        resizeMode= "cover"
        />

        <Image
        source={require("../../assets/chinntz4.jpg")}
        resizeMode= "cover"
        />

        <Image
        source={require("../../assets/chinntz5.jpg")}
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
          <Text style={[styles.title, { fontSize: 24 }]}> Á Combinar </Text>
        </View>
        <View opacity={0.4}>
          <Text style={[styles.title, { fontSize: 30 }]}>
            Tecidos Variados
          </Text>
        </View>

        <View style={{ flexDirection: "row", width: "100%" }}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <SizeButton bgColor="#17181a" color="#fff">
             Tamanho único 
            </SizeButton>
            
          </ScrollView>
        </View>
        <View style={styles.textContent}>

         <View style={{ flexDirection: "row", width: "100%"}}>
           <AntDesign name="checksquare" size={34} color="#00FF00" />
           <Text style={{ width: 100, fontWeight: "bold" }}>Vendedor Verificado</Text>
        </View>

          <Text style={styles.textContent}>
            A loja Chinntz vem ao mercado trazendo tudo que a inovação
            no mercado da moda. Com preços especiais no atacado e varejo,
            estamos esperando por você...
          </Text>
          <Text>_____________________________________________</Text>
          <Text style={styles.textList}>- Categoria: Feminina</Text>

          <Text style={styles.textList}>- Produto: Jeans</Text>

          <Text style={styles.textList}>- Local da Loja: Fortaleza - CE Showroon (Rua Dr. Oswaldo Rizzato, 1184B, Pajuçara, Maracanaú)</Text>
        </View> 
        
         <TouchableOpacity style={styles.btnContainer} 
             onPress={handleInstagramPress}>
            
             <AntDesign name="instagram" size={34} color="white" />
             <Text style={styles.titleInsta} >Instagram</Text>
         </TouchableOpacity>

         
         <Button onClick={zapdetail6}/>


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
    marginHorizontal: '5%'
  },
  titleInsta: {
    marginHorizontal: '5%',
    fontSize: 16,
    color: '#fff'
  }
});