import * as Location from 'expo-location';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Button, Dimensions,TouchableOpacity } from 'react-native';
import MapView, {Marker,AnimatedRegion,MarkerAnimated} from 'react-native-maps';
import { StatusBar } from 'expo-status-bar';


 export default function MapScreen() {

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
      setLatitude(loc.lat);
      setLongitude(loc.lon);
    }
  };

  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null); 

  useEffect(()=>{
    myLoc();
  },[latitude, longitude])  

    return (
      <View style={styles.container}>
        <StatusBar/>
        <MapView
          style={styles.map}
          provider = "google"
          showsUserLocation={true}
          showsMyLocationButton={true}
          followUserLocation={true}
          region={{
            latitude : latitude,
            longitude : longitude,
            latitudeDelta: 0.000922,
            longitudeDelta: 0.00421  
          }}
        >
        <Marker
          coordinate = {{latitude : 37.6685,  longitude : 126.7635 }}
          title = "내용"
          description = "marker example"
        />
      </MapView>
      </View>
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      paddingHorizontal: 16
    }, 
    map: {
      flex:1,
      width: "100%",
      height: "100%",
    },
  });
