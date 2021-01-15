import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import SwiperVila from "./swipervila";

export default function HoteldaVila({navigation}) {
  navigation.setOptions({
    headerTitle: "Hotel da Vila",
  });

 return (
   <View>
     <View style={styles.swiperContent}>
      <SwiperVila/>
     </View>
   </View>
  );
}

const styles = StyleSheet.create({
  swiperContent:{
    flexDirection: 'row',
    height: 180,
    width: '100%',
    resizeMode: 'contain'
  }
})