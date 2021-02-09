import React, { Component } from 'react';
import { View, StyleSheet, FlatList, Text } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

class App extends Component{

   constructor(props){
     super(props);
     this.state = {
       feed:[
         {id: 1, whatsapp: ' (85) 98111-3248', instagram: 'joanaflorkids ', local: 'GPE / Rua B - Loja 09' },

         {id: 2, whatsapp: '(85) 98993-6513', instagram: 'anekikita_atacado', local: 'GPE / Rua N - Loja 34' },

         {id: 3, whatsapp: ' (85)99868 5579', instagram: 'lili_modainfantil', local: 'GPE / Rua C - Loja 01' },

         {id: 4, whatsapp: ' (85) 99718-6010', instagram: 'Fanny Kids', local: 'GPE' },

         {id: 5, whatsapp: ' (85) 99297-3324', instagram: 'Brina Kids', local: 'GPE / Rua M - Loja 25' },

         {id: 6, whatsapp: ' (85) 98604-3963', instagram: 'Malunina', local: 'GPE / Rua I - Loja 05' },

         {id: 7, whatsapp: ' (85) 99788-6571', instagram: 'Mardions', local: 'GPE / Rua I - Loja 25' },

         {id: 8, whatsapp: ' (85) 98669-2502', instagram: ' Luziêr & Paula', local: 'GPE / Rua B - Loja 02' },

         {id: 9, whatsapp: ' (85) 99905-3992', instagram: 'Kidstore', local: 'GPE / Rua Q - Loja 49' },

         {id: 10, whatsapp: ' (85) 98621-0045', instagram: 'chica_frufru ', local: 'GPE / Rua M - Loja 21' },

         {id: 11, whatsapp: ' (85) 98821-1381', instagram: 'Boneca de Pano', local: 'GPE / Rua J - Loja 41' },

         {id: 12, whatsapp: ' (85) 98796-9036', instagram: 'Ispilicute kids', local: 'GPE / Rua N - Loja 22' },

         {id: 13, whatsapp: ' (85) 98965-0588', instagram: 'Florzinha Kids', local: 'Galpão Pop Shop / Rua N  - Loja 356' },

         {id: 14, whatsapp: ' (85) 98552-8271', instagram: 'rosajeans1', local: 'Galpão Pop Shop / - Loja 859' },

         {id: 15, whatsapp: ' (85) 98737-9401', instagram: ' Bonekita Kids ', local: 'Galpão Pop Shop / Rua F - Loja 262' },

         {id: 16, whatsapp: ' (85) 98735-7151', instagram: 'Sthef Kids', local: 'Galpão Pop Shop / Rua B - Loja 197' },

         {id: 17, whatsapp: ' (85) 98848-9538 ', instagram: 'Vini Moda Infantil', local: 'Galpão Pop Shop / Rua G - Loja 263' },

         {id: 18, whatsapp: '(85) 98876-4744', instagram: 'andressakids3', local: 'Galpão Pop Shop / Rua E - Loja 200' },

         {id: 19, whatsapp: '(85) 99714-5071', instagram: 'sbrisae', local: 'Galpão Pop Shop / Rua C - Loja 103' },

         {id: 20, whatsapp: '(85) 99655-3936', instagram: 'Luna', local: 'Galpão Pop Shop / Rua A - Loja 28' },

         {id: 21, whatsapp: '(85) 98679-3698', instagram: 'ritabragagomes1', local: 'Galpão Pop Shop / Rua V - Loja 991/989' },

         {id: 22, whatsapp: '(85) 99174-5577', instagram: 'belinhakids1', local: 'Buraco da Gia / Rua A - Loja 08' },

         {id: 23, whatsapp: '(85) 98194-7071', instagram: 'usejanykids', local: 'Buraco da Gia / Expansão - Loja 09,10' },

         {id: 24, whatsapp: '(85) 98835-3791', instagram: 'unicriattivekids', local: 'Buraco da Gia / Expansão - Loja 229, 238' },

         {id: 25, whatsapp: '', instagram: 'use.kamuflaj', local: 'Mucuripe Moda Center' },

         {id: 26, whatsapp: '(85) 98727-4158', instagram: 'cuecasautentik', local: 'Mucuripe Moda Center /Loja 41A Setor D' },

         {id: 27, whatsapp: '(85) 98421-0502', instagram: 'tatalugaoficial', local: 'Mucuripe Moda Center /Lojas 26,27 Setor A' },

         {id: 28, whatsapp: '(85) 99826-0686', instagram: 'picolerosa', local: 'Mucuripe Moda Center / Loja 09 Setor A '},

         {id: 29, whatsapp: '(85) 99815-1594', instagram: 'beccaballoon', local: 'Mucuripe Moda Center / Loja 11 Setor A '},

         {id: 30, whatsapp: '(85) 98562-6918', instagram: 'socorrokidsmodainfantil', local: 'Mucuripe Moda Center'},

         {id: 31, whatsapp: '(85) 99982-3222', instagram: 'dindamodainfantil', local: 'Mucuripe Moda Center'},




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
    backgroundColor: '#C1FFC1',
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