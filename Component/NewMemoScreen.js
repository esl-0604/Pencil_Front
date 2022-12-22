import * as Location from "expo-location";
import React, { Component } from 'react'
import { KeyboardAvoidingView, Text, View, StyleSheet, Modal, TextInput, Alert, Button, TouchableOpacity, Keyboard, Dimensions, PanResponder} from 'react-native'
import  {PanGestureHandler} from 'react-native-gesture-handler'
import { AntDesign } from '@expo/vector-icons'; 
import react, { useEffect, useState } from "react";

export default function NewMemoScreen(
  {
    modalVisible,
    setModal,
    type,
    pos
  }
){

  const [memo, setMemo] = useState("");

  useEffect(()=>{
    console.log(memo);
  }, [memo])
  
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
    >
      <KeyboardAvoidingView 
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.container}
      >
        <View style={styles.memo}>
          <Text style={styles.locationText}>📍 {type} {pos.lat} {pos.lon}</Text>
          <TextInput
            style={styles.textInput}
            onChangeText={(text)=>{setMemo({inputText: text})}}
            placeholder="이야기를 적어주세요."
            multiline ={true}
          />
          <View style={{
              flexDirection: "row",
              alignSelf: "flex-end",
              marginBottom: 10,
              marginRight: 35
            }}>
          <Button title = "Cancel" color = "grey" fontWeight = "bold" 
            onPress={()=>{
              setModal(false);
            }}
          />
          <Button title = "Post" color = "grey" fontWeight = "bold" 
            onPress={()=>{
              // 서버로 데이터를 보내는 함수 예정
              Alert.alert("메모 저장 성공!!");
              console.log(type);
              setModal(false);
            }}
          />
          </View>
        </View>
      {/* <View style={styles.ikonArea}>
        <TouchableOpacity 
          activeOpacity={1}
          onPress={()=>{alert("취소")}}
          style ={styles.button}
        >
          <Text style={styles.xButton}>x</Text>
        </TouchableOpacity>
        </View> */}
      </KeyboardAvoidingView>
    </Modal>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      flexDirection: "column",
      alignItems: "center",
    },
    memo: {
        width: 350,
        height: 400,
        backgroundColor: "lightyellow",
        borderRadius: 50,
        flex: 0.55,
        justifyContent: "space-between",
        flexDirection: "column",
      },
    locationText: {
        flex : 1,
        marginTop : 20,
        marginLeft: 20,
        fontWeight: "bold",
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
   });


  //  const [userLocation,setUserLocation] = useState("loading...");

    // const ask = async () => {
    //     const { granted } = await Location.requestForegroundPermissionsAsync();
    //     if (!granted) {
    //       setOk(false);
    //     }
    //     const {
    //       coords: { latitude, longitude },
    //     } = await Location.getCurrentPositionAsync({ accuracy: 6 });
    //     const location = await Location.reverseGeocodeAsync(
    //       { latitude, longitude },
    //       { useGoogleMaps: false }
    //     );
    //     // console.log(location);
    //     setUserLocation(location[0].name);
    //     // console.log(userLocation);

    // }

    // useEffect(() => {
    //     ask()
    //   }, []);