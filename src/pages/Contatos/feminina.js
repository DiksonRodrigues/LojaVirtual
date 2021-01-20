import React, { Component } from 'react';
import { View, StyleSheet, FlatList, Text } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

class App extends Component{

   constructor(props){
     super(props);
     this.state = {
       feed:[
         {id: 1, loja: 'kj.jeansconceito', fone: '(85)998248669-Elane /    (85)989403199 - Alberto', instagram: 'kj.jeansconceito', local: 'Feirão Baturite box 44', },

         {id: 2, loja: 'meninacheirosa_oficial', fone: '(85)991374467', instagram: 'meninacheirosa_oficial' },

         {id: 3, loja: 'tdbellajeans', fone: '85998314539 - kaique / 85994405956 - Luis', instagram: 'tdbellajeans' },

         {id: 4, loja: 'analove_oficial', fone: '85981348439 - Ana Love / 85998488483 - Luiza'  , instagram: 'analove_oficial' },

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
    height: 210,
    marginBottom: 3,
    
  },
  Lojas:{
    color: '#000',
    fontSize: 22,
    fontFamily: "Anton_400Regular",
    marginBottom: 5,
    marginHorizontal: 8
  }
});

export default App;

class Loja extends Component{
  render(){
    return(
    <View style={styles.areaLojas} >

     <Text style={styles.Lojas} >Loja: {this.props.data.loja} </Text>

     <Text style={styles.Lojas} >Fone: {this.props.data.fone} </Text>

     <Text style={styles.Lojas} >Instagram: {this.props.data.instagram} </Text>

     <Text style={styles.Lojas} >Local: {this.props.data.local} </Text>

    </View>
    );
  }
}