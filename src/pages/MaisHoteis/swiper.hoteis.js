import React from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';
import Swiper from 'react-native-swiper';



export default function SwiperCost() {
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
         source={require('./images/cost1.jpg')}
         style={{ width: '100%', height: 275, resizeMode:'cover', }}
        />
      </View>

      <View style={styles.slide} >
        <Image
         source={require('./images/cost2.jpg')}
         style={{ width: '100%', height: 275, resizeMode:'cover' }}
        />
      </View>

      <View style={styles.slide} >
        <Image
         source={require('./images/cost3.jpg')}
         style={{ width: '100%', height: 275, resizeMode:'cover' }}
        />
      </View>

      <View style={styles.slide} >
        <Image
         source={require('./images/cost4.jpg')}
         style={{ width: '100%', height: 275, resizeMode:'cover' }}
        />
      </View>

      <View style={styles.slide} >
        <Image
         source={require('./images/cost5.jpg')}
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