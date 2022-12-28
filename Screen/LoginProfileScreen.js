import React from "react";
import react, { useEffect, useState } from "react";
import { Button, View, Text } from "react-native";
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
          {/* 구글 개인정보 */}
          <Text> {"<개인 정보>"} </Text>
          <Text>이름 : {route.params.userData.user_name}</Text>
          <Text>이메일 : {route.params.userData.user_email}</Text>

          {/* 자동 로그인 동의 버튼 클릭
            - 디바이스에 사용자 정보 저장 
            - Shell screen으로 이동 */}
          <Button
            title="자동 로그인 동의 후 위 사용자로 앱 시작하기"
            onPress={() => {
                SavedeviceUserData(userData);
                navigation.navigate("ShellScreen", {userData});
            }}
          />
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



