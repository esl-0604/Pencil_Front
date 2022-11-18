import React from "react";
import react, { useEffect, useState } from "react";
import { View, Text, Dimensions, StyleSheet, ScrollView } from "react-native";
import FeedScreen from "./Screen/FeedScreen";
import SigninScreen from "./Screen/SigninScreen";


export default function App() {
  const [view, setView] = useState("1");
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
}