import React from "react";
import react, { useEffect, useState } from "react";
import { Button, View, Text, Image, Pressable, TouchableOpacity } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function LoginProfileScreen(
  {
    navigation,
    route
  }
) 
{
  /* 디바이스에 데이터를 저장하는 코드 */
  const SavedeviceUserData = (Data) => {
      userDataStorage.set(Data).catch(console.error);
  }

  /* userData
    {
      "id" : 사용자 식별 코드,
      "user_name" : 사용자 이름,
      "user_email" : 사용자 이메일
    }
  */

  // const example_userData = {
  //   id: 1,
  //   user_name: "이은상",
  //   user_email: "eslee850@gmail.com"
  // };
  const [userData, setUserData] = useState(null);

  useEffect(()=>{
    if(userData == null){
      setUserData(route.params.userData);
    }
    else{
      // console.log(userData);
    }
  },[userData])

    return (
        <View style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "white",
        }}>
          <Image
              source={require("../Data/Logo.png")}
          />
          {/* 구글 개인정보 */}
          <Text>{route.params.userData.user_name}</Text>
          <Text>{route.params.userData.user_email}</Text>

          <TouchableOpacity style={{
            width : 200,
            height: 50,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "lightyellow",
            borderStyle: "solid",
            borderWidth: 1.5,
            borderColor: "black",
            borderRadius: 50,
            marginTop: 50,
          }}>
            <Pressable
              onPress={() => {
                SavedeviceUserData(userData);
                navigation.navigate("ShellScreen", {userData});
            }}
            >
              <Text>
                위 프로필로 연필 시작하기
              </Text>
            </Pressable>
          </TouchableOpacity>
        </View>
      );
}


const key = 'PencilUserData';
const userDataStorage = {
  async get() {
    try {
      const rawData = await AsyncStorage.getItem(key);
    //   console.log("1");
      if (!rawData) {
        throw new Error('No saved ' + key);
      }
      const savedData = await JSON.parse(rawData);
    //   console.log(savedData);
    //   console.log("2");
      return savedData;
    } catch (e) {
      // throw new Error('Failed to load ' + key);
      console.log(e);
      return null;
    }
  },
  async set(data) {
    try {
      await AsyncStorage.setItem(key, JSON.stringify(data));
    } catch (e) {
      console.log(e);
      throw new Error('Failed to save ' + key);
    }
  },
};



