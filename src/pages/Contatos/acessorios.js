import React, { Component } from 'react';
import { View, StyleSheet, FlatList, Text } from 'react-native';

class App extends Component{

   constructor(props){
     super(props);
     this.state = {
       feed:[
         {id: 1, nome: 'Loja A', fone: 555555858522, email: 'dg@dg.com' },
         {id: 2, nome: 'Loja B', fone: 555555858522, email: 'ff@ff.com' },
         {id: 3, nome: 'Loja C', fone: 555555858522, email: 'cc@cc.com' },
         {id: 4, nome: 'Loja D', fone: 555555858522, email: 'cac@cac.com' },

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
    backgroundColor: '#222',
    height: 100,
    marginBottom: 5
  },
  Lojas:{
    color: '#fff',
    fontSize: 20,
  }
});

export default App;

class Loja extends Component{
  render(){
    return(
    <View style={styles.areaLojas} >

     <Text style={styles.Lojas} >Nome: {this.props.data.nome} </Text>

     <Text style={styles.Lojas} >Fone: {this.props.data.fone} </Text>

     <Text style={styles.Lojas} >Email: {this.props.data.email} </Text>
    </View>
    );
  }
}