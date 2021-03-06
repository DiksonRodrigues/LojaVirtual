import React from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';
import Swiper from 'react-native-swiper';



export default function SwiperCosteira() {
 return (

  <View style={styles.container}>
   <Swiper
     autoplay={false}
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
         source={require('../images/costeira1.jpg')}
         style={{ width: '100%', height: 275, resizeMode:'cover', }}
        />
      </View>

      <View style={styles.slide} >
        <Image
         source={require('../images/costeira2.jpg')}
         style={{ width: '100%', height: 275, resizeMode:'cover' }}
        />
      </View>

      <View style={styles.slide} >
        <Image
         source={require('../images/costeira3.jpg')}
         style={{ width: '100%', height: 275, resizeMode:'cover' }}
        />
      </View>

      <View style={styles.slide} >
        <Image
         source={require('../images/costeira4.jpg')}
         style={{ width: '100%', height: 275, resizeMode:'cover' }}
        />
      </View>

      <View style={styles.slide} >
        <Image
         source={require('../images/costeira5.jpg')}
         style={{ width: '100%', height: 275, resizeMode:'cover' }}
        />
      </View>


   </Swiper>
  </View> 
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
  },
  slide:{
    height: 280,
    borderRadius: 5,
    borderWidth: 3,
    borderColor: "#C0C0C0",
  },
})