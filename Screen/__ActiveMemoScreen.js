import React, { Component } from 'react'
import { KeyboardAvoidingView, Text, View, StyleSheet, Animated, TextInput, Alert, Button, TouchableOpacity, Keyboard, Dimensions, PanResponder} from 'react-native'
import  {PanGestureHandler} from 'react-native-gesture-handler'
import { AntDesign } from '@expo/vector-icons'; 


export default class MemoScreen extends Component {

    
state = {
    text: '',
    inputText: '',
   
}

submitBtn = () => {
    this.setState({text: this.state.inputText});
  }

 translateX = new Animated.Value(0)
 translateY = new Animated.Value(0)
    handleGesture = Animated.event(
        [{nativeEvent: {translationX: this.translateX,translationY:this.translateY}}], 
        { useNativeDriver: true });
    render() {
        let memoTransformStyle 
        memoTransformStyle = {
                transform:[
                    {translateY : this.translateY},
                    {translateX : this.translateX}
                ]
            }
        
        return (
            <KeyboardAvoidingView 
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={[styles.container]}>
            <Text>    </Text>
            <PanGestureHandler onGestureEvent={this.handleGesture}>
            <Animated.View style={[styles.memo,memoTransformStyle]}>
            <Text style={styles.locationText}>📍 고려대 신공학관</Text>
            <TextInput
            style={styles.textInput}
            onChangeText={(text)=>{this.setState({inputText: text})}}
            placeholder="이야기를 적어주세요."
            multiline ={true}
            />
            <Button title = "Post" color = "grey" fontWeight = "bold"
            onPress={()=>{
                this.submitBtn
                Keyboard.dismiss()
            }}

            />
            </Animated.View>
            </PanGestureHandler>
            <Text style = {styles.showText}>{this.state.text}</Text>
            <View style={styles.ikonArea}>
            <TouchableOpacity 
                activeOpacity={1}
                onPress={()=>{alert("취소")}}
            style ={styles.button}>
                <Text style={styles.xButton}>x</Text>
            </TouchableOpacity>
        </View>
            </KeyboardAvoidingView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "space-around",
      flexDirection: "column",
      backgroundColor: "#fff",
      alignItems: "center",
    },

    memo: {
        marginTop : 100,
        width: 300,
        height: 300,
        backgroundColor: "lightyellow",
      },
    locationText: {
        flex : 1,
        marginTop : 20,
        marginLeft: 20,
        fontWeight: "bold"

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
    button : {

    },
    xButton: {
        fontSize : 30,
        color : "grey",
        fontWeight: "200"
    }
   })

   