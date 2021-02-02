import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView, TouchableOpacity
} from "react-native";

import Button from "../../component/Button/zapequipe"; 

export default function Nos({ navigation }) { 
  

  navigation.setOptions({
    headerTitle: "Sobre Nós",
  }); 
 
  const zapequipe = {}

  return (
 <ScrollView>   
    <View style={styles.container} >
        <View >
            <Text style={styles.text}>Contaremos um pouco mais sobre nós aqui. 
              </Text>
              <Text style={styles.descricao}>
              Olá seja bem vindo ao APLICATIVO ZÉ AVELINO...
              Eu nasci depois que os meus criadores/desenvolvedores localizaram no mercado da moda no CEARÁ, uma grande e triste realidade das pessoas que queriam comprar em nosso super polo de modas mais acabavam caindo em golpes na internet. 

              </Text>
            <TouchableOpacity>
              <View style={styles.anuncie} >
                <Text style={styles.textAnu}>Anuncie Conosco</Text>
                <Text style={styles.descricao}>Clique Abaixo</Text>
                <Button onClick={zapequipe}/>
              </View>
            </TouchableOpacity> 


          <Image style={styles.image}
           source={require("../../assets/nossa.png")}
           resizeMode= "contain"
          />

            <Text style={styles.text}>
              Exatamente !!! 
            </Text>

            <Text style={styles.descricao} >
            Você que tem hoje o aplicativo ZE AVELINO baixado no seu celular vai ter em mãos os contatos mais confiáveis daqui de fortaleza. Já pensou? agora você nunca mais irá cair em um golpe pela internet e vai lucrar bastante comprando super barato...
            </Text>

            <Text style={styles.text}>Porque os contatos são mesmo tão CONFIÁVEIS ?</Text>

            <Text style={styles.descricao}>
            Os desenvolvedores desse super aplicativo ainda trabalham no mercado da MODA, vendendo em atacado para todo o BRASIL. Então por isso não mediram esforços para garantir que os contatos que aqui estão, vão prestar um serviço de qualidade e com todas as garantias para os seus compradores. 
            Queremos lembrar que esse aplicativo vai aumentar a quantidade de lojas confiáveis ao longo de sua existência!!! Por enquanto nos operamos apenas em fortaleza...
            </Text>

           <Text style={styles.text}>Não perde mais tempo, vem comprar barato por aqui.</Text>

           <Image style={styles.image}
           source={require("../../assets/cuuida.png")}
           resizeMode= "contain"
          />

            <TouchableOpacity>
              <View style={styles.anuncie} >
                    <Text style={styles.textAnu}>Anuncie Conosco</Text>
                    <Text style={styles.descricao}>Clique Abaixo</Text>
                    <Button onClick={zapequipe}/>
              </View>
            </TouchableOpacity>

           <ScrollView>
          </ScrollView>
        </View>
        
    </View>
  </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: "#fff",
    justifyContent: "center"
  },
  text: {
    color: '#000',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 35,
    fontFamily: "Anton_400Regular",
    marginLeft: 35,
    marginRight: 15,
  },
  descricao:{
    marginBottom: 30,
    fontSize: 20,
    color: "#000",
    marginRight: 40,
    marginLeft: 35,
    marginEnd: 50
  },
  image:{
    width: 365,
    height: 370,
  }, 
  anuncie:{
    backgroundColor: '#DCDCDC',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textAnu:{
    fontSize: 35,
    fontFamily: "Anton_400Regular",
    alignItems: 'center',
  },
});
