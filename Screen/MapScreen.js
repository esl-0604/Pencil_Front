import * as Location from 'expo-location';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Button, Dimensions,TouchableOpacity } from 'react-native';
import MapView, {Marker,AnimatedRegion,MarkerAnimated} from 'react-native-maps';
import { AntDesign } from '@expo/vector-icons'; 
import Switch from "../Component/Switch";
import { StatusBar } from 'expo-status-bar';


 export default function MapScreen() {

  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [ok, setOk] = useState(true);

  const setLocation = (loc) => {
    return {
      lat: loc.coords.latitude,
      lon: loc.coords.longitude
    }
  }

  const ask = async() => {
    const {granted} = await Location.requestForegroundPermissionsAsync();
    if (!granted){
      setOk(false);
    }
    else {
    const location = await Location.getCurrentPositionAsync({accuracy:6})
    const loc = setLocation(location);
    console.log(loc);
    setLatitude(loc.lat);
    setLongitude(loc.lon);
    }
  };

  useEffect(() => {
    ask()
  }, []);

  const [feedMode, setFeedMode] = useState(2);
    const onSelectMode = (val) => {
        setFeedMode(val);
      };
      

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
          coordinate = {{latitude : 37.585436999734746,  longitude : 127.0294708392166 }}
          title = "내용"
          description = "marker example"
        />
      </MapView>
      <View style={styles.ikonArea}>
            <TouchableOpacity 
              activeOpacity={1}
              onPress={()=> alert("aa")
              }
            >
              <AntDesign name="plus" size={50} color="ivory"/>     
            </TouchableOpacity>
        </View>
      </View>
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "lightpink",
  }, 
    map: {
      flex:8,
      width: Dimensions.get('window').width,
      height: Dimensions.get('window').height,
    },
  ikonArea: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
    marginBottom: 10,
    width: 300,
    backgroundColor: "lightpink",
},
  });
