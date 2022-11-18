import * as Location from "expo-location";
import React, { Component } from 'react'
import { KeyboardAvoidingView, Text, View, StyleSheet, Animated, TextInput, Alert, Button, TouchableOpacity, Keyboard, Dimensions, PanResponder} from 'react-native'
import  {PanGestureHandler} from 'react-native-gesture-handler'
import { AntDesign } from '@expo/vector-icons'; 
import { useEffect } from "react";
import { useState } from "react";


export default function MemoScreen(){
    const [userLocation,setUserLocation]=useState("loading...");

    const ask = async () => {
        const { granted } = await Location.requestForegroundPermissionsAsync();
        if (!granted) {
          setOk(false);
        }
        const {
          coords: { latitude, longitude },
        } = await Location.getCurrentPositionAsync({ accuracy: 6 });
        const location = await Location.reverseGeocodeAsync(
          { latitude, longitude },
          { useGoogleMaps: false }
        );
        // console.log(location);
        setUserLocation(location[0].name);
        // console.log(userLocation);

    }

    useEffect(() => {
        ask()
      }, []);

    return (
        <KeyboardAvoidingView 
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.container}>
        <Text>    </Text>
        <View style={styles.memo}>
        <Text style={styles.locationText}>📍 {userLocation}</Text>
        <TextInput
        style={styles.textInput}
        onChangeText={(text)=>{this.setState({inputText: text})}}
        placeholder="이야기를 적어주세요."
        multiline ={true}
        />
        <Button title = "Post" color = "grey" fontWeight = "bold"
        onPress={()=>{
            this.submitBtn
            Keyboard.dismiss()
        }}

        />
        </View>
        <View style={styles.ikonArea}>
        <TouchableOpacity 
            activeOpacity={1}
            onPress={()=>{alert("취소")}}
        style ={styles.button}>
            <Text style={styles.xButton}>x</Text>
        </TouchableOpacity>
    </View>
        </KeyboardAvoidingView>
    )

    
    
       
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "space-around",
      flexDirection: "column",
      backgroundColor: "#fff",
      alignItems: "center",
    },

    memo: {
        marginTop : 100,
        width: 300,
        height: 300,
        backgroundColor: "lightyellow",
      },
    locationText: {
        flex : 1,
        marginTop : 20,
        marginLeft: 20,
        fontWeight: "bold"

    },

      textInput: {
        flex : 10,
        marginTop: 0,
        marginBottom: 0,
        marginLeft : 20,
        marginRight : 20,
        height: 40,
        justifyContent: "flex-end",
        alignItems: "flex-end",
        flexShrink:1
      },
      showText: {
        marginTop: 10,
        fontSize: 25,
      },
      ikonArea: {
        justifyContent: "center",
        alignItems: "center",
        width: 50,
        height : 50,
        borderRadius : 30,
        backgroundColor: "white",
        borderColor : "grey",
        borderWidth: 0.5,
        marginBottom : 100,
        marginLeft : 250,
    },
    button : {

    },
    xButton: {
        fontSize : 30,
        color : "grey",
        fontWeight: "200"
    }
   });

