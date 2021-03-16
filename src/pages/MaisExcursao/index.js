import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';

export default function MaisExcursoes({navigation}) {
  navigation.setOptions({
    headerTitle: "Mais Excursões",
  });

 return (
   <ScrollView style={styles.container} >
     <Image style={styles.image}
      source={require("./images/onibus.jpg")}
      resizeMode= "cover"
     />
     <Text style={styles.text}>Gasparzinho</Text>
     <Text style={styles.description} >Transporte de encomendas 📦 🚛 Pernambuco, Goiania e Fortaleza
       Nossos contatos de WhatsApp 75 99147-9578 / 75 99186-1775</Text>


     <Text style={styles.text}>GREEW TURISMO</Text>
     <Text style={styles.description} >Transporte de encomendas 📦 🚛 Pernambuco/Goiania, Fortaleza/São Paulo/Belém/Macapá e Manaus. Nossos contatos de WhatsApp 91 98181-3312</Text>


     <Text style={styles.text}>PRINCIPE</Text>
     <Text style={styles.description} >Transporte de encomendas 📦 🚛 Pernambuco/Fortaleza e São Paulo.
       Nossos contatos de WhatsApp 71 98837-6933 / 71 98747-1011</Text>


     <Text style={styles.text}>OLIVEIRA</Text>
     <Text style={styles.description} >Transporte de encomendas 📦 🚛 Salvador/Simões Filho/Dias D'avila/Camaçari/Mata de São João/Pojuca/Catu/Candeias e Alagoinhas. Nossos contatos de WhatsApp 71 99154-4651 / 75 98148-2892 / 75 9923-2450 </Text>


     <Text style={styles.text}>IMPERATUR</Text>
     <Text style={styles.description} >Transporte de encomendas 📦 🚛 Pará/Maranhão/Fortaleza/Piauí. Nossos contatos de WhatsApp 94 99165-3642 </Text>


     <Text style={styles.text}>SOL e MAR</Text>
     <Text style={styles.description} >Transporte de encomendas 📦 🚛 Maranhão/Fortaleza/Piauí. Nossos contatos de WhatsApp 99 998274-5749</Text>

     <Text style={styles.text}>PAIANO</Text>
     <Text style={styles.description} >Transporte de encomendas 📦 🚛 Maranhão/Fortaleza/Piauí/Goiania/São Paulo/Tocantins. Nossos contatos de WhatsApp 99 99110-9024</Text>

     <Text style={styles.text}>NOVA JERUSALÉM</Text>
     <Text style={styles.description} >Transporte de encomendas 📦 🚛 Maranhão/Fortaleza/Piauí/Pernambuco/Trindade. Nossos contatos de WhatsApp 98 98703-1022</Text>

     <Text style={styles.text}>YVONE TUR</Text>
     <Text style={styles.description} >Transporte de encomendas 📦 🚛 Fortaleza/Piauí. Nossos contatos de WhatsApp 85 98812-6310</Text>

     <Text style={styles.text}>CARLOS TRANSPORTES</Text>
     <Text style={styles.description} >Transporte de encomendas 📦 🚛 Fortaleza/Bahia. Nossos contatos de WhatsApp 75 99146-2860 / 75 99139-2679</Text>

     <Text style={styles.text}>ALDENORA TURISMO</Text>
     <Text style={styles.description} >Transporte de encomendas 📦 🚛 Fortaleza/Maranhão/Piaui. Nossos contatos de WhatsApp 99 99129-6028</Text>

     <Text style={styles.text}>MARLY TURISMO</Text>
     <Text style={styles.description} >Transporte de encomendas 📦 🚛 Fortaleza/Maranhão/Pernambuco/Piaui. Nossos contatos de WhatsApp 98 98401-2796 / 98 98152-2232</Text>

     <Text style={styles.text}>TARGITUR</Text>
     <Text style={styles.description} >Transporte de encomendas 📦 🚛 Fortaleza/Paraiba/Natal. Nossos contatos de WhatsApp 83 99982-9676</Text>

     <Text style={styles.text}>BALEIA TURISMO</Text>
     <Text style={styles.description} >Transporte de encomendas 📦 🚛 Fortaleza(CIDADES DO INTERIOR). Nossos contatos de WhatsApp 88 98117-8570</Text>

     <Text style={styles.text}>R TUR</Text>
     <Text style={styles.description} >Transporte de encomendas 📦 🚛 Fortaleza/Bahia. Nossos contatos de WhatsApp 71 98733-8271</Text>

     <Text style={styles.text}>LVC TURISMO</Text>
     <Text style={styles.description} >Transporte de encomendas 📦 🚛 Fortaleza/João Pessoa/Paraiba/Rio Grande do Norte. Nossos contatos de WhatsApp 83 98790-8382</Text>

   </ScrollView>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: "#fff"
  },
  text:{
    color: '#000',
    fontFamily: "Anton_400Regular",
    fontSize: 25,
    marginHorizontal: "6%",
  },
  image:{
    height: 300,
    backgroundColor: "#fff",
    width: 400,
  },
  description: {
    fontSize: 15,
    color: '#CDC9C9',
    marginBottom: 15,
    marginHorizontal:"6%",
    
  }
})