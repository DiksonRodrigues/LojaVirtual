import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import React, { useEffect } from "react";
import { AppLoading } from "expo";
import { useFonts, Anton_400Regular } from "@expo-google-fonts/anton";

import Routes from "./src/router";
import OneSignal from "react-native-onesignal";


export default function App() {
  
   useEffect(() => {
 
    OneSignal.init("3536d8b4-dcef-4834-aa3a-c189f88a27d9");
  
    OneSignal.addEventListener('opened', onOpened);
  
  }, []);

  function onOpened(openResult) {
    console.log('Message: ', openResult.notification.payload.body);
    console.log('openResult: ', openResult);
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
