import React from "react";
import react, { useEffect, useState } from "react";
import * as Location from 'expo-location';
import { View, BackHandler, Alert } from "react-native";
import { Header as HeaderRNE, } from '@rneui/themed';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Tab, TabView, SpeedDial } from '@rneui/themed';

import MapScreen from "../Component/MapScreen";
import FeedScreen from "../Component/FeedScreen";
import MyFeedScreen from "../Component/MyFeedScreen";
import NewMemoScreen from "../Component/NewMemoScreen";

import { memoData } from "../Data/Dummydata";



export default function ShellScreen(
    {
        navigation,
        route
    }
) {
    
      const load = async() => {

        // 사용자 정보 업데이트
        setUser(route.params.userData);


        // 위치 정보 업데이트
        const {granted} = await Location.requestForegroundPermissionsAsync();
        if (granted){
          const location = await Location.getCurrentPositionAsync({accuracy:6});
          setLat(location.coords.latitude);
          setLong(location.coords.longitude);
        }


        // public 메모 정보 업데이트 
        await fetch("http://34.125.39.187.nip.io:8000/all_public_memos", {
            method : "get",
          })
          .then( (res) => res.json() )
          .then( (data) => {
            // console.log(data);
            setPublicMemo(data);
          })
          .catch( (e) => console.log(e) );


        // 현재 사용자의 메모 정보 업데이트
        const userMemoURL = "http://34.125.39.187.nip.io:8000/users/memos/";
        await fetch(userMemoURL + route.params.userData.id, {
            method : "get",
          })
          .then( (res) => res.json() )
          .then( (data) => {
            // console.log(data);
            setUserMemo(data);
          })
          .catch( (e) => console.log(e) );


        // 최종 상태 업로드 여부 업데이트
        setLoading(true);
      };

      const backAction = () => {
        Alert.alert("연필 종료", "정말로 연필을 종료하시겠습니까? ", [
          {
            text: "아니오",
            onPress: () => null,
            style: "cancel"
          },
          { text: "예", onPress: () => BackHandler.exitApp() }
        ]);
        return true;
      };
    
    const [index, setIndex] = useState(1);
    const [open, setOpen] = useState(false);
    const [MemoVisible, setMemoVisible] = useState(false);
    const [memoType, setMemoType] = useState(null);

    const [loading, setLoading] = useState(false);
    const [user, setUser]= useState({});
    const [lat, setLat] = useState(null);
    const [long, setLong] = useState(null);
    const [publicMemo, setPublicMemo] = useState([]);
    const [userMemo, setUserMemo] = useState([]);
    const [reload, setReload] = useState(false);



    useEffect(() => {
        if(loading === false || MemoVisible === false){
            // console.log("ShellScreen!!!");
            load();
        }
        // console.log(user);
        // console.log(lat);
        // console.log(long);
        // console.log(publicMemo);
        // console.log(userMemo);
        // console.log(reload);

        BackHandler.addEventListener("hardwareBackPress", backAction);

        return () =>
            BackHandler.removeEventListener("hardwareBackPress", backAction);
    },[loading, reload]);

    if(loading === true){
    return (
        <SafeAreaProvider
            style={{
                flex: 1,
                backgroundColor:"white"
            }}>
            <HeaderRNE
                backgroundColor="ivory"
            //     leftComponent = {{
            //         icon: 'menu',
            //         color: 'black',
            //     }}
            //     rightComponent = {
            //     <View>
            //         <TouchableOpacity 
            //             // onPress={() => navigation.navigate("SigninScreen")}
            //         >
            //             <Icon name="face" color="black" />
            //         </TouchableOpacity>
            //   </View>}
                centerComponent = {{ text: 'Yeonpil' }}
            />
            <NewMemoScreen
                modalVisible={MemoVisible}
                setModal={setMemoVisible}
                setReload={setReload}
                reload={reload}
                type={memoType}
                pos={{
                    lat: lat,
                    lon: long
                }}
                user={user}
            />
            <View style={{
                        flexDirection: "row",
                        justifyContent: "center",
                        alignItems: "center",
                        alignSelf: "center",
                        width: 250,
                        height: 40,
                        backgroundColor: "white",
                        border: "solid",
                        borderWidth: 0.5,
                        borderColor: "black",
                        borderRadius: 20,
                        marginTop: 10
                    }}>
                
                <Tab
                    value={index}
                    onChange={(e) => setIndex(e)}
                    variant={"defalt"}
                    disableIndicator={true}  
                    containerStyle={{
                        backgroundColor: "white",
                    }}
                > 
                    <Tab.Item
                        containerStyle={{
                            borderStyle: "solid",
                            borderColor: "ivory",
                            borderWidth: 1,
                            borderRadius: 30,
                            alignSelf: "center",
                        }}
                        disabled={ index==0 ? true : false }
                        disabledStyle={{
                            backgroundColor: index==0 ? "lightyellow" : "white"
                        }}
                        // title="Map"
                        // titleStyle={{ fontSize: 8, color: "black" }}
                        icon={{ name: 'map', type: 'ionicon', color: 'black', size: 16 }}
                    />
                    <Tab.Item
                        containerStyle={{
                            borderStyle: "solid",
                            borderColor: "ivory",
                            borderWidth: 1,
                            borderRadius: 30,
                            alignSelf: "center"
                        }}
                        disabled={ index==1 ? true : false }
                        disabledStyle={{
                            backgroundColor: index==1 ? "lightyellow" : "white"
                        }}
                        // title="Feed"
                        // titleStyle={{ fontSize: 8, color: "black" }}
                        icon={{ name: 'list', type: 'material', color: 'black', size: 18 }}
                    />
                    <Tab.Item
                        containerStyle={{
                            borderStyle: "solid",
                            borderColor: "ivory",
                            borderWidth: 1,
                            borderRadius: 30,
                            alignSelf: "center",

                        }}
                        disabled={ index==2 ? true : false }
                        disabledStyle={{
                            backgroundColor: index==2 ? "lightyellow" : "white"
                        }}
                        // title="My"
                        // titleStyle={{ fontSize: 20, color: "black" }}
                        icon={{ name: 'home', type: 'antdesign', color: 'black', size: 18 }}
                    />
                </Tab>
            </View>  
            <TabView 
                value={index} 
                onChange={setIndex} 
                animationType="spring"
                minSwipeRatio={0.4}
                disableSwipe={true}
                disableTransition={false}
            >
                <TabView.Item style={{ width: "100%", marginTop: 10, backgroundColor:"white"}}>
                    <MapScreen lat={lat} long={long} user={user} publicMemo={publicMemo} setReload={setReload} reload={reload} />
                </TabView.Item>
                <TabView.Item style={{width: "100%", marginTop: 10, backgroundColor:"white"}}>
                    <FeedScreen lat={lat} long={long} user={user} publicMemo={publicMemo} setReload={setReload} reload={reload}/>
                </TabView.Item>
                <TabView.Item style={{width: "100%", marginTop: 10, backgroundColor:"white"}}>
                    <MyFeedScreen lat={lat} long={long} user={user} userMemo={userMemo} setReload={setReload} reload={reload}/>
                </TabView.Item>
            </TabView>
            <SpeedDial
                buttonStyle={{
                    backgroundColor: "ivory"
                }}
                isOpen={open}
                icon={{ name: 'edit', color: 'black' }}
                openIcon={{ name: 'close', color: 'black' }}
                onOpen={() => setOpen(!open)}
                onClose={() => setOpen(!open)}
            >
                <SpeedDial.Action
                    buttonStyle={{
                        backgroundColor: "ivory"
                    }}
                    icon={{ name: 'language', color: 'black' }}
                    title="public"
                    onPress={() => {
                        setMemoType(0);
                        setMemoVisible(true);
                        setOpen(!open);
                        
                    }}
                />
                <SpeedDial.Action
                    buttonStyle={{
                        backgroundColor: "ivory"
                    }}
                    icon={{ name: 'lock', color: 'black' }}
                    title="private"
                    onPress={() => {
                        setMemoType(1);
                        setMemoVisible(true);
                        setOpen(!open);
                    }}
                />
            </SpeedDial>
        </SafeAreaProvider>
    );
    }
    else{
        <SafeAreaProvider
            style={{
                flex: 1,
                backgroundColor:"white"
            }}>
            <HeaderRNE
                backgroundColor="ivory"
            //     leftComponent = {{
            //         icon: 'menu',
            //         color: 'black',
            //     }}
            //     rightComponent = {
            //     <View>
            //         <TouchableOpacity 
            //             // onPress={() => navigation.navigate("SigninScreen")}
            //         >
            //             <Icon name="face" color="black" />
            //         </TouchableOpacity>
            //   </View>}
                centerComponent = {{ text: 'Yeonpil' }}
            />
        </SafeAreaProvider>
    }
}

