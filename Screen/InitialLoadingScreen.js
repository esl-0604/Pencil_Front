import React from "react";
import react, { useEffect, useState } from "react";
import { View, ImageBackground  } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import ProgressBarAnimated from 'react-native-progress-bar-animated';
import { ExampleUserData } from "../Data/Dummydata";


export default function InitialLoadingScreen(
  {
    navigation
  }
) {

const [autoLogin, setautoLogin] = useState("");
const [userData, setUserData] = useState(null);
const autoLoginURL = "http://34.125.39.187.nip.io:8000/auto_login/";

const CheckDBUserData = async () => {

    await userDataStorage.get()
        .then((data) => {

          // 디바이스에 사용자 정보가 없을 경우
          if(data == null){
            setautoLogin("0"); 
          }

          // 디바이스에 사용자 정보가 있을 경우
          else{
            // console.log(data.id);
            // 서버 측으로 해당 사용자 정보를 전송 후 디비와 대조하는 API
            fetch((autoLoginURL + data.id), {
            method : "post",
            headers: {
              'Content-Type' : 'application/json'
            },
            body: JSON.stringify(data)
            })
            .then( (res) => res.json() )
            .then( (res) => {

              if(res == true){
                // console.log("디비에 해당 사용자 정보가 있습니다. ");  
                setUserData(data);
                setautoLogin("1");  
              }
              else{
                // console.log("에러!! 디비에 해당 사용자 정보가 없습니다. ");
                setautoLogin("0"); 
              }
            })
            .catch( (e) => console.log(e) );

            // 대조 성공
            // if((data.id == ExampleUserData.id) && (data.user_email == ExampleUserData.user_email)){
            //   console.log("디비에 해당 사용자 정보가 있습니다. ");  
            //   setUserData(data); 
            //   setautoLogin("1");  
            // }
            // // 대조 실패
            // else{
            //   console.log("에러!! 디비에 해당 사용자 정보가 없습니다. ");
            //   setautoLogin("0");  
            // }
          }})
        .catch(console.error);
}

useEffect(() => {
    if(autoLogin == ""){
      // console.log("-----------------------------------");
      CheckDBUserData();
    }
    else if(autoLogin == "0"){
      setTimeout(()=>{
        // 자동 로그인 실패 -> SignIn 스크린으로 이동
        // console.log("자동 로그인 실패!!");
        // console.log("SignIn 스크린으로 이동");
        navigation.navigate("SigninScreen");
      },3500);
    }
    else{
      setTimeout(()=>{
        // 자동 로그인 성공 -> 바로 Shell 스크린으로 이동
        // console.log("자동 로그인 성공!!");
        // console.log(userData);
        // console.log("Shell 스크린으로 이동");
        navigation.navigate("ShellScreen", {userData});
      },3500);
    }
  }, [autoLogin]);

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
      const JasonData = JSON.stringify(data);
      await AsyncStorage.setItem(key, JasonData);
    } catch (e) {
      throw new Error('Failed to save ' + key);
    }
  },
};


