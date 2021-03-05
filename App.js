import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import React, { useEffect } from "react";
import { AppLoading } from "expo";
import { useFonts, Anton_400Regular } from "@expo-google-fonts/anton";
import * as Notifications from 'expo-notifications';
import * as Permissions from 'expo-permissions';

import Routes from "./src/router";



export default function App() {

  useEffect(()=>{
    registerForPushNotifications().then(token => console.log(token)).
    catch(err => console.log(Err))
  }, [])



  async function registerForPushNotifications(){
    const {status} = await Permissions.getAsync(Permissions.NOTIFICATIONS);
     if (status!='granted') {
       const {status} = await Permissions.askAsync(Permissions.NOTIFICATIONS)
     }
     if (status !='granted') {
       alert('Falha em obter o token push');
       return;
     }
     token = (await Notifications.getExpoPushTokenAsync()).data;
     return token;
  }
  
  console.disableYellowBox = true;

  let [fontsLoaded] = useFonts({
    Anton_400Regular,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <>
      <StatusBar style="ligth" backgroundColor="#F0f0f0" translucent={true}/>
      <Routes/>
    </>
    
  );
}
