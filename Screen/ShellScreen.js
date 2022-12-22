import React from "react";
import react, { useEffect, useState } from "react";
import * as Location from 'expo-location';
import { View, TouchableOpacity } from "react-native";
import { Header as HeaderRNE, } from '@rneui/themed';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Tab, TabView, SpeedDial, Icon } from '@rneui/themed';

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
    const [user, setUser]= useState();
    const [index, setIndex] = useState(1);
    const [open, setOpen] = useState(false);
    const [MemoVisible, setMemoVisible] = useState(false);
    const [memoType, setMemoType] = useState("");

    const setLocation = (loc) => {
        return {
          lat: loc.coords.latitude,
          lon: loc.coords.longitude
        }
      };
    
      const myLoc = async() => {
        const {granted} = await Location.requestForegroundPermissionsAsync();
        if (granted){
          const location = await Location.getCurrentPositionAsync({accuracy:6})
          const loc = setLocation(location);  
          setLat(loc.lat);
          setLon(loc.lon);
        }
      };
    
      const [lat, setLat] = useState(null);
      const [lon, setLon] = useState(null);


    useEffect(() => {
        if(user == null){
            console.log("ShellScreen!!!");
            setUser(route.params.userData);
        }
        myLoc();
        // console.log(user);
    },[user, lat, lon])

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
                type={memoType}
                pos={{
                    lat: lat,
                    lon: lon
                }}
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
                            alignSelf: "center"
                        }}
                        disabled={ true }
                        disabledStyle={{
                            backgroundColor: index==0 ? "ivory" : "white"
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
                        disabled={ true }
                        disabledStyle={{
                            backgroundColor: index==1 ? "ivory" : "white"
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
                            alignSelf: "center"
                        }}
                        disabled={ true }
                        disabledStyle={{
                            backgroundColor: index==2 ? "ivory" : "white"
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
            >
                

                <TabView.Item style={{ width: "100%", marginTop: 10, backgroundColor:"white"}}>
                    <MapScreen></MapScreen>
                </TabView.Item>
                <TabView.Item style={{width: "100%", marginTop: 10, backgroundColor:"white"}}>
                    <FeedScreen memoData={memoData}></FeedScreen>
                </TabView.Item>
                <TabView.Item style={{width: "100%", marginTop: 10, backgroundColor:"white"}}>
                    <MyFeedScreen memoData={memoData} user={route.params.userData}></MyFeedScreen>
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
                        setMemoType("public");
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
                        setMemoType("private");
                        setMemoVisible(true);
                        setOpen(!open);
                    }}
                />
            </SpeedDial>
        </SafeAreaProvider>
    );
}

