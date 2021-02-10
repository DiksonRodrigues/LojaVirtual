import React, { Component } from 'react';
import { View, StyleSheet, FlatList, Text } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

class App extends Component{

   constructor(props){
     super(props);
     this.state = {
       feed:[
         {id: 1, whatsapp: '(85) 98704-6073', instagram: 'ki Luxo Calçados', local: 'Feirão Moda Mix / Loja 47' },

         {id: 2, whatsapp: '(85) 98704-6073', instagram: 'irisbijoux_', local: 'Mucuripe Moda Center / Setor E - Loja 55'  },

         {id: 3, whatsapp: '(85) 99844-2145', instagram: 'estilosa_rasteira', local: 'Feirão Moda Mix / Loja 111' },

         {id: 4, whatsapp: '(85) 98746-6903', instagram: 'Júnior Calçados ', local: 'Feirão Moda Mix / Loja 428' },

         {id: 5, whatsapp: '(85) 99772-3307', instagram: 'MM Bolsas', local: 'Feirão Moda Mix / Loja 38' },

         {id: 6, whatsapp: '(85) 98653-1353', instagram: 'neuricalcados', local: 'Comercial Catedral 1º andar/Loja 5'},

         {id: 7, whatsapp: '(85) 99936-5612', instagram: 'Chica Bolsas', local: 'Comercial Catedral Loja 10'},

         {id: 8, whatsapp: '(85) 98744-8830', instagram: 'marsilex.fortaleza', local: 'Feirão da Confecção'},

         {id: 9, whatsapp: '(85) 98600-5707', instagram: 'elegance_1086 ', local: 'Feirão da Confecção'},

         {id: 10, whatsapp: '(85) 98622-4618', instagram: 'eliene_calcados', local: 'Buraco da gia'},

         {id: 11, whatsapp: '(85) 99840-5940', instagram: 'zucacouros', local: 'Buraco da gia / Subsolo'},

         {id: 12, whatsapp: '(85) 98770-4247', instagram: 'solbijoux_oficial', local: 'Buraco da gia / box 06'},

         {id: 13, whatsapp: '(85) 98612-0557', instagram: 'Sônia Romanel e Acessórios', local: 'Buraco da gia / Bambu 01'},

         {id: 14, whatsapp: '(85) 99999-2437', instagram: 'Amarela Modas', local: 'Buraco da gia'},

         {id: 15, whatsapp: '(85) 98745-4868', instagram: 'Dudu Couros', local: 'Buraco da gia'},

         {id: 16, whatsapp: '(85) 986518752', instagram: 'eliene_calcados', local: 'Buraco da gia'},

         {id: 17, whatsapp: '(85) 99997-4086', instagram: 'queenbijoux', local: 'Buraco da gia'},

         {id: 18, whatsapp: '(85) 99799-2052', instagram: 'flordemeninabiju', local: 'Buraco da gia / Loja 25 (Galerias)'},

         {id: 19, whatsapp: '(85) 98756-9147', instagram: 'jnmodabolsas', local: 'GPE / Rua D, loja 14'},

         {id: 20, whatsapp: '(85) 99725-0093', instagram: 'kourosoficial', local: 'GPE / Rua E, Loja 21'},


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
    backgroundColor: '#F5DEB3',
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