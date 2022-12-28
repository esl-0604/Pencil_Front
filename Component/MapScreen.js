import { useEffect, useState, useRef } from 'react';
import { StyleSheet, View } from 'react-native';
import MapView, {Marker,PROVIDER_GOOGLE} from 'react-native-maps';



 export default function MapScreen(
    {
      lat,
      long,
      user, 
      publicMemo,
      setReload,
      reload
    }
 ) {
    const mapLoading = useRef(false);
    const [post, setPost] = useState(null);

    const postLoad = () => {
      const my_X = Math.floor(lat * 1000) / 1000;
      const my_Y = Math.floor(long * 1000) / 1000;
      let post = [];
      let search = false;
      publicMemo.map((content, index) => {
        post.map((post_i, i)=>{
          if(post_i.post_x === content.memo_x && post_i.post_y === content.memo_y){
            post_i.memo_num += 1;
            search = true;
          }
        });
        if(search === false){
          post.push({
            post_id : post.length,
            post_x : content.memo_x,
            post_y : content.memo_y,
            memo_num : 1
          })
        }
        search = false;
      });
      // console.log(post);
      setPost(post);
    }

    useEffect(()=>{
      // console.log(publicMemo);
      postLoad();
    }, [publicMemo])

    if(post !== null){
    return (
      <View style={styles.container}>
        <MapView
          style={styles.map}
          provider = {PROVIDER_GOOGLE}
          showsUserLocation={true}
          showsMyLocationButton={true}
          followUserLocation={true}
          region={{
            latitude : lat,
            longitude : long,
            latitudeDelta: 0.000922,
            longitudeDelta: 0.00421  
          }}
          onMapReady={()=>{
            mapLoading.current = true;
          }}
        >

          {/* {mapLoading.current === true && <Marker coordinate = {{latitude : 37.671,  longitude : 126.763 }}/>} */}
          {post.map((content, i)=>{
            if(mapLoading.current === true){
              return(
                <Marker
                  key= {i}
                  coordinate= {{latitude: content.post_x + 0.0005, longitude: content.post_y + 0.0005}}
                  title= {"우체통 번호: " + content.post_id + ""}
                  description= {"메모 개수: " + content.memo_num + ""}
                />
              )
            }
            else{
              return null
            }
          })}
        </MapView>
      </View>
    );
    }
    else{
      return(
        <View style={styles.container}>
        </View>
      )
    }
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      paddingHorizontal: 16,
    }, 
    map: {
      flex: 1,
      width: "100%",
      height: "100%",
    },
  });
