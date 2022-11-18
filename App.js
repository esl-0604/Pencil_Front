import React from "react";
import react, { useEffect, useState } from "react";
import { View, Text, Dimensions, StyleSheet, ScrollView } from "react-native";
import FeedScreen from "./Screen/FeedScreen";
import SigninScreen from "./Screen/SigninScreen";
import MapScreen from "./Screen/MapScreen";

export default function App() {
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [ok, setOk] = useState(true);
  const ask = async() => {
    const {granted} = await Location.requestForegroundPermissionsAsync();
    if (!granted){
      setOk(false);
    };
    const location = await Location.getCurrentPositionAsync({accuracy:6});
    setLatitude(location.coords.latitude);
    setLongitude(location.coords.longitude);
    console.log("Latitude : " + latitude);
    console.log("Longitude : " + longitude);
  };
  
  const [view, setView] = useState("3");
  if (view == "1"){
    return (
      <SigninScreen></SigninScreen>
    );
  }

  if (view == "2"){
    return (
      <FeedScreen></FeedScreen>
    );
  }

  if (view == "3"){
    return (
      <MapScreen></MapScreen>
    )
  }
}