import React from "react";
import react, { useEffect, useState } from "react";
import * as WebBrowser from 'expo-web-browser';
import * as Google from 'expo-auth-session/providers/google';
import { Button, View } from "react-native";

WebBrowser.maybeCompleteAuthSession();

export default function SigninScreen() {
    const [request, response, promptAsync] = Google.useAuthRequest({
        expoClientId: "1078582717102-spsicokn72o1jn16u9f0mga28e450h5b.apps.googleusercontent.com",
      });
    const [userData, setUserData] = useState(null);
    
    useEffect(() => {
    if (response?.type === 'success') {
        const { authentication } = response;
        const accessObject = {
          "access_token" : authentication.accessToken,
          "expires_in" : parseInt(authentication.expiresIn),
          "scope" : authentication.scope,
          "token_type" : authentication.tokenType
        }
        console.log(authentication);
        console.log(accessObject);
        fetch("http://34.125.39.187.nip.io:8000/sign_in", {
          method : "post",
          headers: {
            'Content-Type' : 'application/json'
          },
          body: JSON.stringify(accessObject)
        })
        .then((res) => res.json())
        .then((data) => console.log(data));
        
    }
    }, [response]);
    
    const login = () => {
      fetch("http://34.125.39.187.nip.io:8000/", {
          method : "get",
        })
        .then((res) => res.json())
        .then((data) => console.log(data))
    }
    
    return (
        <View style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "lightpink",
        }}>
        <Button
          disabled={!request}
          title="Signin"
          onPress={() => {
            promptAsync();
          }}
        />
        <Button
          disabled={!request}
          title="Login"
          onPress={() => {
            login();
          }}
        />
        </View>
      );
}