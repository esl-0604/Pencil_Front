import React from 'react'
import { KeyboardAvoidingView, Text, View, StyleSheet, Modal, TextInput, Alert, Button} from 'react-native'
import react, { useEffect, useState } from "react";

export default function NewMemoScreen(
  {
    modalVisible,
    setModal,
    type,
    pos,
    user,
    setReload,
    reload
  }
){
  const [memo, setMemo] = useState("");
  // const [newMemoOb, setMemoOb] = useState(null);

  const postNewMemo = () => {
    const date = new Date();
    const newMemoOB = {
      user_id : user.id,
      point_id : 0,
      memo_type : type,
      memo_x : Math.floor(pos.lat * 1000) / 1000,
      memo_y : Math.floor(pos.lon * 1000) / 1000,
      memo_content : memo.inputText,
      created_at : date
    }
    // setMemoOb(newMemoOB);

    fetch(("http://34.125.39.187.nip.io:8000/memos/create"), {
      method : "post",
      headers: {
        'Content-Type' : 'application/json'
      },
      body: JSON.stringify(newMemoOB)
      })
      .then( (res) => res.json())
      .then((res)=> {
        // console.log(newMemoOB);
        // console.log(res);
        Alert.alert("메모 저장 성공!!");})
      .catch( (e) => console.log(e) );
  }

  

  useEffect(()=>{
    // console.log(memo);

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
          {/* <Text style={styles.locationText}>📍 {type} {pos.lat} {pos.lon}</Text> */}
          <Text style={styles.locationText}>📍 {type === 0 ? "Public Memo" : "Private Memo"} </Text>
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
          <View style={{
              flex: 0.25,
              marginRight: 10
            }}>
          <Button title = "Cancel" color = "grey" fontWeight = "bold" 
            onPress={()=>{
              setModal(false);
              setReload(!reload);
            }}
          />
          </View>
          <View style={{
              flex: 0.25,
            }}>
          <Button title = "Post" color = "grey" fontWeight = "bold" 
            onPress={()=>{
              // 서버로 데이터를 보내는 함수 예정
              postNewMemo();
              setModal(false);
              setReload(!reload);
            }}
          />
          </View>
          </View>
        </View>
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
      borderColor: "gray",
      borderStyle: "solid",
      borderWidth: 0.5,
    },
    memo: {
        width: 350,
        height: 400,
        backgroundColor: "lightyellow",
        borderRadius: 50,
        flex: 0.55,
        justifyContent: "space-between",
        flexDirection: "column",
        borderColor: "gray",
        borderStyle: "solid",
        borderWidth: 1,
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