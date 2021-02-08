import React, { Component } from 'react';
import { View, StyleSheet, FlatList, Text } from 'react-native';
import { AntDesign } from '@expo/vector-icons';


class App extends Component{

   constructor(props){
     super(props);
     this.state = {
       feed:[
         {id: 1, whatsapp: ' (85)99868 5579', instagram: 'r.dezenove', local: 'Mucuripe Moda center' },

         {id: 2, whatsapp: '(85) 99418-3624', instagram: 'azzurimenswear', local: 'Mucuripe Moda center' },

         {id: 3, whatsapp: '(85) 99981-7660', instagram: 'hanrel_wear', local: 'Mucuripe Moda center' },

         {id: 4, whatsapp: '', instagram: 'manguezaw.br ', local: 'Mucuripe Moda center / box 134' },

         {id: 5, whatsapp: '(85) 98611-5256', instagram: '4everbeatjeans', local: 'Mucuripe Moda center / Box 250' },

         {id: 6, whatsapp: '(85) 98911-6773', instagram: 'georgecamisaria', local: 'Mucuripe Moda center / Box C 132' },

         {id: 7, whatsapp: ' (85) 98935-9198', instagram: 'bluymen', local: 'Mucuripe Moda center' },

         {id: 8, whatsapp: ' (85) 99794-7174', instagram: 'ojrconceito', local: 'Mucuripe Moda center' },

         {id: 9, whatsapp: '(85 ) 991703636', instagram: 'davimodamasculina', local: 'Mucuripe Moda center /BOX C.139' },

         {id: 10, whatsapp: '(85) 99181-1429', instagram: 'km3polo', local: 'GPE - loja D 12' },

         {id: 11, whatsapp: '', instagram: 'wk.jeans', local: 'Mucuripe Moda center' },

         {id: 12, whatsapp: '', instagram: 'dcoroupa ', local: 'Mucuripe Moda Center C 50 e D 80' },

         {id: 13, whatsapp: '', instagram: 'golfstyleoficial', local: 'Mucuripe Moda center' },

         {id: 14, whatsapp: '(85) 9861-7666', instagram: 'stylerjeans', local: 'Mucuripe Moda center' },

         {id: 15, whatsapp: '', instagram: 'lp1_pijamas', local: 'Mucuripe Moda center' },

         {id: 16, whatsapp: '(85) 98995-0029', instagram: 'destemidojeans_oficial', local: 'Mucuripe Moda center' },

         {id: 17, whatsapp: '(85) 98826-2852', instagram: 'llonstyle', local: 'Mucuripe Moda center' },


         {id: 18, whatsapp: '(85) 99671-1998', instagram: 'zanttier', local: 'Mucuripe Moda center' },


         {id: 19, whatsapp: '(85) 8993-8607', instagram: 'grossatacarejo', local: 'Mucuripe Moda center Setor A / Loja 116 ' },

         {id: 19, whatsapp: '(85) 98591-0665', instagram: 'marksfortjeans', local: '' },

         {id: 20, whatsapp: '', instagram: 'jn.visual', local: 'Mucuripe- Loja D 33 e 34 ' },

         {id: 21, whatsapp: '(85) 99929-4236', instagram: 'vlmoda_masc', local: 'Mucuripe Moda center' },

         {id: 22, whatsapp: '', instagram: 'edu.moda.maculina', local: 'Mucuripe Moda center' },

         {id: 23, whatsapp: '(85) 98922-9587', instagram: '085.sports', local: 'Mucuripe Moda center' },

         {id: 24, whatsapp: '', instagram: 'athur.urban', local: 'Mucuripe Moda center Setor C Loja 71' },

         {id: 25, whatsapp: '', instagram: 'gnstorejbe', local: 'Mucuripe Moda center Setor C 138' },

         {id: 26, whatsapp: ' (85) 999062263', instagram: 'brfalcaoforman', local: 'Mucuripe Moda center Setor D 3' },

         {id: 27, whatsapp: ' (85) 99862-5395 / 98856-0476', instagram: 'maisboy_', local: 'Buraco da Gia' },

         {id: 28, whatsapp: ' (85) 8810-1718 ', instagram: 'troia19_oficial', local: 'Buraco da Gia' },

         {id: 29, whatsapp: ' (85) 98222-6517 ', instagram: 'goboycamisaria', local: 'Buraco da Gia' },

         {id: 30, whatsapp: '', instagram: 'ruijor5', local: 'Buraco da Gia' },

         {id: 31, whatsapp: ' (85) 99248-0226 ', instagram: 'luxbrand.oficial', local: 'Buraco da Gia' },

         {id: 32, whatsapp: ' (85) 99233-0192 ', instagram: 'lemmultimarcas_', local: 'Buraco da Gia  / Box: 157 ' },

         {id: 33, whatsapp: ' (85) 98873-3424 ', instagram: 'so.multimarcas', local: 'Buraco da Gia / Box:  259/260 ' },

         {id: 34, whatsapp: ' (85) 98681-9111 ', instagram: 'if.jeans ', local: 'Buraco da Gia / Box: 420 ' },

         {id: 35, whatsapp: ' (85) 989540186 ', instagram: ' @mgmodas216 ', local: 'Buraco da Gia / Box: 216 ' },

         {id: 36, whatsapp: ' (85) 99674-1151 ', instagram: 'milgrau_modamasculina', local: 'Buraco da Gia / Box: 101 '},








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
    backgroundColor: '#9C9C9C',
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
    justifyContent:'center',
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