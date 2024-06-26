/*
COMPONENTE SWIPER PARA FAZER UM BANNER ROTATIVO NO TOPO DA HOME,
SERVIRÁ TAMBÉM PARA COLOCAR AS LOJAS QUE QUIZEREM DESTACAR-SE.
*/ 


import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import Swiper from 'react-native-swiper';



export default function SwiperComponent() {
 return (
   <Swiper
     autoplay={true}
     autoplayTimeout={2.0}
     style={styles.wrapper}
     dotStyle={{
       backgroundColor: '#DCDCDC',
       borderColor: '#000',
       borderWidth: 1,
       width: 10,
       height: 10,
       borderRadius: 10,
       
     }}
     activeDotColor= '#fff'
     activeDotStyle={{
       borderColor: '000',
       borderWidth: 1,
       width: 10,
       height: 10,
       borderRadius: 10,
       
     }}
   >
    
      <View style={styles.slide} >
        <Image
         source={require('../../assets/anunciea.png')}
         style={{ width: '100%', height: 180, resizeMode:'cover' }}
        />
      </View>

      <View style={styles.slide} >
        <Image
         source={require('../../assets/swiper2.png')}
         style={{ width: '100%', height: 180 }}
        />
      </View>

      <View style={styles.slide} >
        <Image
         source={require('../../assets/swiper3.png')}
         style={{ width: '100%', height: 180 }}
        />
      </View>

      <View style={styles.slide} >
        <Image
         source={require('../../assets/swiper4.png')}
         style={{ width: '100%', height: 180 }}
        />
      </View>


   </Swiper>
  );
}

const styles = StyleSheet.create({
  wrapper:{

  },
  slide:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F8F8FF',
  }
})