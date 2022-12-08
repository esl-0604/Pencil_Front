import React from "react";
import react, { useEffect, useState } from "react";
import { View, ImageBackground  } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ExampleUserData } from "../Data/Dummydata";
import ProgressBarAnimated from 'react-native-progress-bar-animated';


export default function InitialLoadingScreen(
  {
    navigation
  }
) {
const [autoLogin, setautoLogin] = useState("");
const CheckDBUserData = async () => {
    // 디바이스에서 불러온 정보를 디비에서 조회하여 자동 로그인 여부를 확인한다.
    // 1. 디비에 사용자 정보가 없을 경우 -> SignIn 스크린으로 이동 (자동 로그인 실패)
    // 2. 디비에 사용자 정보가 있을 경우 -> Shell 스크린으로 이동 (자동 로그인 성공)
    await userDataStorage.get()
        .then((data) => {
            if(data.Id == ExampleUserData.Id){
                // console.log("<자동 로그인 정보>");
                // console.log(data);
                setautoLogin("1");     
            }
            else{
                // console.log("자동 로그인 정보 오류!");
                setautoLogin("0");  
            }})
        .catch(console.error);
}
const nextPage = () => {
  console.log(autoLogin);
  if(autoLogin == "1"){
    setTimeout(()=>{
      // 자동 로그인 성공 -> 바로 Shell 스크린으로 이동
      console.log("자동 로그인 성공!!");
      console.log("Shell 스크린으로 이동");
      navigation.navigate("ShellScreen");
    },3500);
  }
  else if(autoLogin == "0"){
    setTimeout(()=>{
      // 자동 로그인 실패 -> SignIn 스크린으로 이동
      console.log("자동 로그인 실패!!");
      console.log("SignIn 스크린으로 이동");
      navigation.navigate("SigninScreen");
    },3500);
  }
}

// 이 페이지가 렌더링 되면 3.5초간 타이머가 흘러가며 그 안에 디바이스에서 사용자 정보를 가져온 뒤 디비에서 조회하여 자동 로그인 여부를 판단한다.
useEffect(() => {
    // console.log(ExampleUserData);
    // console.log(userData);
    console.log("-----------------------------------");
    CheckDBUserData();
  }, []);

    return (
        <View style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            paddingTop: 170,
            backgroundColor: "white",
        }}>
        <ImageBackground source={require("../Data/Logo.png")} 
            style={{
                width: "95%",
                height: "70%",
                justifyContent: "center",
                alignItems: "center",
            }}
            resizeMode="stretch">
            <View style={{
                flex: 1,
                paddingTop: 320
            }}>
            <ProgressBarAnimated
                width={280}
                height={5}
                value={100}
                barAnimationDuration={3000}
                backgroundColor="black"
                onComplete={nextPage()}
            />
            </View>
            {/* <Button
                title="Save New User Data"
                onPress={() => {
                    SavedeviceUserData(User);
                }}
            /> */}
        </ImageBackground>
        </View>
    );
}


/* 디바이스 로컬 저장소에서 데이터를 관리하는 함수 */
// Key : 데이터에 대한 Key값
// get() : key에 해당하는 데이터를 디바이스로부터 불러오는 함수
// set(data) : 전달된 data를 key을 할당하여 디바이스에 저장하는 함수 
const key = 'userData';
const User = {
    Id: 1,
    name: "이은상",
    email: "eslee850@gmail.com"
};
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
      throw new Error('Failed to load ' + key);
    }
  },
  async set(data) {
    try {
      await AsyncStorage.setItem(key, JSON.stringify(data));
    } catch (e) {
      throw new Error('Failed to save ' + key);
    }
  },
};


