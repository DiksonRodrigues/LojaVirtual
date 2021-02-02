import React, { Component } from 'react';
import { View, StyleSheet, FlatList, Text, Button } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

class App extends Component{

   constructor(props){
     super(props);
     this.state = {
       feed:[
         {id: 1, whatsapp: '(85) 998248669-Elane /    (85) 989403199 - Alberto', instagram: 'kj.jeansconceito', local: 'Feirão Baturite box 44' },

         {id: 2, whatsapp: '(85) 991374467', instagram: 'meninacheirosa_oficial', local: 'Galpão grife box 31/32' },

         {id: 3, whatsapp: '(85) 998314539 - kaique / 85994405956 - Luis', instagram: 'tdbellajeans', local: 'Rua General Bezerril, nº 10' },

         {id: 4, whatsapp: '(85) 981348439 - Ana Love / 85998488483 - Luiza'  , instagram: 'analove_oficial', local: 'Galpão Buraco da Gia' },

         {id: 5, whatsapp: 'Atendimento online suspenso'  , instagram: 'oficial_estilosa', local: 'loja 1- Rua Baturité, 30' },

         {id: 6, whatsapp: '(85) 99191-1357'  , instagram: 'use_xodo', local: 'Rua Guilherme Rocha, 1176' },


         {id: 7, whatsapp: '(85) 988306532'  , instagram: 'abusadamodaf', local: 'Feirão Baturité • box 15 e 28' },

         {id: 8, whatsapp: '(85) 989296869'  , instagram: 'gatamodernaoficial', local: 'Fortaleza-Ce' },

         {id: 9, whatsapp: '(85) 98795-1951 - Emilia'  , instagram: 'bonekita_', local: 'Pátio Central' },

         {id: 10, whatsapp: '(85) 98611-0430'  , instagram: 'loja.tudodelas', local: 'GPE - rua b, box 24'},

         {id: 11, whatsapp: '(85) 98629-1409'  , instagram: 'lysbellajeans', local: 'GPE - Setor B - Loja 20'},

         {id: 12, whatsapp: '(85) 98736-7048'  , instagram: 'lingeriecarvalho', local: 'GPE - Setor c - Loja 23'},

         {id: 13, whatsapp: '(85) 99112-2255'  , instagram: 'kitty_loja_', local: ' galpão pop shop, box 205'},

         {id: 14, whatsapp: '(85) 99868-9094'  , instagram: 'allpinkonline', local: 'Galpão Super box 100'},

         {id: 15, whatsapp: '(85) 98777-6029'  , instagram: 'betomodas_modaintima', local: 'Buraco da Gia  122 - 123'},

         {id: 16, whatsapp: '(85) 98601-3198'  , instagram: 'mona_ricatamanhosespeciais', local: 'Buraco da Gia  153 - 155'},

         {id: 17, whatsapp: '(85) 98804-2550'  , instagram: 'hcbeachwear',   local: 'Buraco da Gia - Loja 47'},

         {id: 18, whatsapp: '(85) 99258-2177'  , instagram: 'vivalismodaoficial',   local: 'Buraco da Gia - Loja  23 - 24'},

         {id: 19, whatsapp: '(85) 99813-6686'  , instagram: 'miss_valentinavec',   local: 'Buraco da Gia - Loja  7 - 8'},

         {id: 20, whatsapp: '(85) 98525-4780'  , instagram: 'dmagoth',   local: 'Buraco da Gia - Loja  14-15'},

         {id: 21, whatsapp: '(85) 99187-1724'  , instagram: 'jannyfashion_borys',   local: 'Buraco da Gia - Loja 5-6-12-14'},

         {id: 22, whatsapp: '(85) 98662-5171'  , instagram: 'narinha_moda_oficial',   local: 'Buraco da Gia - Loja 9-11-13'},

         {id: 23, whatsapp: '(85) 99910-9214'  , instagram: 'jabustore',   local: 'Buraco da Gia - Loja 342-343-344'},

         {id: 24, whatsapp: '(85) 99720-2098'  , instagram: 'meninaviploja',   local: 'Buraco da Gia - Loja 83'},

         {id: 25, whatsapp: '(85) 98717-5597'  , instagram: 'tzion_colection',   local: 'Buraco da Gia - Loja 73'},

         {id: 26, whatsapp: '(85) 99917-2820'  , instagram: 'saliente_modafeminina',   local: 'Buraco da Gia - Loja 7'},

         {id: 27, whatsapp: '(85) 98601-0524'  , instagram: 'missluckoficial',   local: 'Buraco da Gia - Loja 402 - 407'},

         {id: 28, whatsapp: '(85) 99791-0103'  , instagram: 'lojatokaia',   local: 'Buraco da Gia - Loja 398 - 399 '},

         {id: 29, whatsapp: '(85) 99911-1108'  , instagram: 'mkbrand_oficial',   local: 'Buraco da Gia - Loja 45 '},

         {id: 30, whatsapp: '(85) 98676-6960'  , instagram: 'donalollafashion',   local: 'Buraco da Gia - Loja 409 '},

         {id: 31, whatsapp: '(85) 99147-6706'  , instagram: 'tudoodelas',   local: 'Buraco da Gia - Loja 06'},

         {id: 32, whatsapp: '(85) 99952-6900'  , instagram: 'lojabeloa',   local: 'Buraco da Gia - Loja 224'},

         {id: 33, whatsapp: '(85) 98539-5992'  , instagram: 'monikita_caldas',   local: 'Buraco da Gia - Loja 2'},

         {id: 34, whatsapp: '(85) 99636-9612'  , instagram: 'adorartmodas',   local: 'Buraco da Gia - Loja 79-80-81'},

         {id: 35, whatsapp: '(85) 99819-2186'  , instagram: 'estiloflor_oficial',   local: 'Buraco da Gia - Loja 15-17-19-21-23'},

         {id: 36, whatsapp: '(85) 98775-9179'  , instagram: 'lility_conceito',   local: 'Buraco da Gia - Loja 87'},

         {id: 37, whatsapp: '(85) 99635-8709'  , instagram: 'usolamaria',   local: 'Buraco da Gia - Loja 16'},

         {id: 38, whatsapp: '(85) 99762-1969'  , instagram: 'divinoarmariocc',   local: 'Buraco da Gia - Loja 178'},

         {id: 39, whatsapp: '(85) 98886-1428'  , instagram: 'criativa.lingerie_oficial',   local: 'Buraco da Gia - Loja 442 - 443'},

         {id: 40, whatsapp: '(85) 99804-9001'  , instagram: 'amordelimamodaoficial',   local: 'Buraco da Gia - Loja 6 - 7'},

         {id: 41, whatsapp: '(85) 99737.5847'  , instagram: 'mig_jeans',   local: 'Buraco da Gia - Loja 179'},

         {id: 42, whatsapp: '(85) 98749.3122'  , instagram: 'drosa.dalva',   local: 'Buraco da Gia - Loja 175'},

         {id: 43, whatsapp: '(85) 98825.4210'  , instagram: 'bemfit_oficial',   local: 'Buraco da Gia - Loja 145'},

         {id: 44, whatsapp: '(85) 98750.7508'  , instagram: 'maria__maluka',   local: 'Buraco da Gia - Loja 140 '},

         {id: 45, whatsapp: '(85) 98867.4035'  , instagram: 'chellykita',   local: 'Buraco da Gia - Loja 391'},

         {id: 46, whatsapp: '(85) 98888.2745'  , instagram: 'nannysfashion',   local: 'Buraco da Gia - Loja 143'},

         {id: 47, whatsapp: '(85) 99748-8122'  , instagram: 'dalindalingerie',   local: 'Buraco da Gia - Loja 452-453-454'},

         {id: 48, whatsapp: '(85) 99791-3071'  , instagram: 'laupe_oficial',   local: 'Buraco da Gia - Loja 03 '},

         {id: 49, whatsapp: '(85) 98679.9855'  , instagram: 'fillluxo_store',   local: 'Buraco da Gia - Loja 208 '},

         {id: 50, whatsapp: '(85) 98168-8411'  , instagram: 'modapraiabronzedomar',   local: 'Buraco da Gia /Galerias '},





       ]
     };
   }

  render() {
    return(
      <View style={StyleSheet.container} >
       <FlatList
       data={this.state.feed}
       keyExtractor={(item) => item.id }
       renderItem={ ({ item }) => <Loja data={item} />  }
       />

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  areaLojas:{
    backgroundColor: '#FFB6C1',
    height: 170,
    marginBottom: 3,
    
  },
  Lojas:{
    color: '#000',
    fontSize: 22,
    fontFamily: "Anton_400Regular",
    marginBottom: 5,
    marginHorizontal: 8
  },
  instagram:{
    color: '#000',
    fontSize: 22,
    fontFamily: "Anton_400Regular",
    marginBottom: 5,
    marginHorizontal: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:'center'
  }
});

export default App;

class Loja extends Component{
  render(){
    return(
    <View style={styles.areaLojas} >

     <Text style={styles.instagram} >Instagram: {this.props.data.instagram}
       <AntDesign name="instagram" size={34} color="white" /> 
     </Text>

     <Text style={styles.Lojas} >WhatsApp: {this.props.data.whatsapp} 
      <AntDesign name="phone" size={34} color="white" /> 
     </Text>

     <Text style={styles.instagram} >Local: {this.props.data.local}
       <AntDesign name="pushpin" size={34} color="red" /> 
     </Text>

    </View>
    );
  }
}