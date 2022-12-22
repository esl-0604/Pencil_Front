import React from "react";
import react, { useState } from "react";

import InitialLoadingScreen from "./Screen/InitialLoadingScreen";
import SigninScreen from "./Screen/SigninScreen";
import LoginProfileScreen from "./Screen/LoginProfileScreen";
import ShellScreen from "./Screen/ShellScreen";
import NewMemoScreen from "./Component/NewMemoScreen";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";


const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName="InitialLoadingScreen"
        screenOptions={{ headerShown: false }}>
        <Stack.Screen name="InitialLoadingScreen" component={InitialLoadingScreen} />
        <Stack.Screen name="SigninScreen" component={SigninScreen} />
        <Stack.Screen name="LoginProfileScreen" component={LoginProfileScreen} />
        <Stack.Screen name="ShellScreen" component={ShellScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
//   const [view, setView] = useState("5");

//   if (view == "0"){
//     return (
//       <ShellScreen></ShellScreen>
//     );
//   }

//   else if (view == "1"){
//     return (
//       <SigninScreen></SigninScreen>
//     );
//   }

//   else if (view == "2"){
//     return (
//       <FeedScreen></FeedScreen>
//     );
//   }

//   else if (view == "3"){
//     return (
//       <MapScreen></MapScreen>
//     )
//   }

//   else if (view == "4"){
//     return (
//       <NewMemoScreen></NewMemoScreen>
//     )
//   }

//   else if (view == "5"){
//     return (
//       <InitialLoadingScreen></InitialLoadingScreen>
//     )
//   }

//   else if (view == "6"){
//     return (
//       <LoginProfileScreen></LoginProfileScreen>
//     )
//   }
// }