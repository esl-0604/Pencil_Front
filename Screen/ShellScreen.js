import React from "react";
import react, { useEffect, useState } from "react";
import { View, TouchableOpacity } from "react-native";
import { Header as HeaderRNE, } from '@rneui/themed';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Tab, TabView, SpeedDial, Icon } from '@rneui/themed';
import MapScreen from "./MapScreen";
import FeedScreen from "./FeedScreen";
import MyFeedScreen from "./MyFeedScreen";
import AsyncStorage from "@react-native-async-storage/async-storage";


export default function ShellScreen(
    {
        navigation
    }
) {

    const userDataLoad = async () => {
        // 디바이스에 저장되어있는 사용자 정보를 가져온다.
        await userDataStorage.get()
            .then((data) => {
                 console.log(data);
                 setUser(user);
                })
            .catch(console.error);
    }
    const [user, setUser]= useState();
    const [index, setIndex] = useState(0);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        userDataLoad();
    },[])

    return (
        <SafeAreaProvider
            style={{
                flex: 1,
                backgroundColor: "white"
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
                    <FeedScreen></FeedScreen>
                </TabView.Item>
                <TabView.Item style={{width: "100%", marginTop: 10, backgroundColor:"white"}}>
                    <MyFeedScreen></MyFeedScreen>
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
                onPress={() => console.log('Add Something')}
                />
                <SpeedDial.Action
                buttonStyle={{
                    backgroundColor: "ivory"
                }}
                icon={{ name: 'lock', color: 'black' }}
                title="pribvate"
                onPress={() => console.log('Delete Something')}
                />
            </SpeedDial>
        </SafeAreaProvider>
    );
}

const key = 'userData';
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
