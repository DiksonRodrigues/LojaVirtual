import React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import Contato from "../../pages/Contato"; 

function SettingsScreen() {
  return (
    <View >
      <Text>Settings!</Text>
    </View>
  );
}


const Tab = createBottomTabNavigator();


function HomeTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Contato" component={Contato}/>
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <HomeTabs/>
    </NavigationContainer>  
  );
}
