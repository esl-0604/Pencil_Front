import React from "react";
import react, { useEffect, useState } from "react";
import { Button, View, Text } from "react-native";

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
      Id : 사용자 식별 코드,
      name : 사용자 이름,
      email : 사용자 이메일
    }
  */
  const [userData, setUserData] = useState();
  setUserData(route.params.userData);

    return (
        <View style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "white",
        }}>
          {/* 구글 개인정보 */}
          <Text> {"<개인 정보>"} </Text>
          <Text>이름 : {userData.name}</Text>
          <Text>이메일 : {userData.email}</Text>

          {/* 자동 로그인 동의 버튼 클릭
            - 디바이스에 사용자 정보 저장 
            - Shell screen으로 이동 */}
          <Button
            title="자동 로그인 동의 후 위 사용자로 앱 시작하기"
            onPress={() => {
                SavedeviceUserData(userData);
                navigation.navigate("ShellScreen");
            }}
              />
        </View>
      );
}

