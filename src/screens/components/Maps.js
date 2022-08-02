import React, { useRef, useState, useEffect, } from 'react'

import { View, StyleSheet, Dimensions, Image, ActivityIndicator } from 'react-native'
import MapView, { Marker } from 'react-native-maps'
import { useSelector, useDispatch } from 'react-redux'
import { selectBusOrigin, selectDestination, selectOrigin, selectTravelTimeInformation, setBusOrigin, setTravelTimeInformation,selectMap, setOpen, clearState } from '../slices/navSlice'
import { db2 } from '../firebase'
import { selectOpen } from '../slices/navSlice'
import MapViewDirections from 'react-native-maps-directions'
import { useFocusEffect } from '@react-navigation/native'

const Maps = () => {
  const origin = useSelector(selectOrigin);
  const busorigin = useSelector(selectBusOrigin);
  const destination = useSelector(selectDestination);
  // const eta = useSelector(selectTravelTimeInformation); 
  const open = useSelector(selectOpen);
  const map  = useSelector(selectMap)
  const dispatch = useDispatch(); 
  const GOOGLE_MAP_APIKEY = 'AIzaSyAGQR7nOq_I8-mw09k1Ap0jtC7TW3NJ3H4'

  const [busCoordinate, setBusCoordinate] = useState([]);

const station = [{
  dpulze : { latitude: 2.9216372294500426, longitude: 101.65129376233509},
  sp_thearc : {latitude: 2.925201795640526,logitude: 101.63751270360495},
  sp_cucms: {latitude: 2.9214422621088993, longitude: 101.63654775696365}

}]








  let busRef = db2.ref('/GPS');

  const mapRef = useRef(null);

 
  useEffect(() => {
    if (!origin || !busorigin ) return;

    // Zoom & fit to markers
  
      mapRef.current.fitToSuppliedMarkers(["busorigin", "origin"], {
        edgePadding: { top: 50, right: 50, bottom: 50, left: 50 },
  
      });
    
    
    return () => {
      console.log("This will be logged on unmount");
    }
  }, [busorigin, origin]);

  useEffect(() => {
    busRef.on('value', snapshot => {
      let data = snapshot.val();
      const items = Object.values(data);
      dispatch(setBusOrigin(items.map((val) => parseFloat(val))))
      setBusCoordinate(items)
      console.log(busCoordinate, 30)
      console.log(open, ' 31 line')
      // console.log(busorigin, "26")
      console.log(busorigin, "25")
      console.log(origin, "26")
      return () => busRef.off('value', busRef);

    })

  }, [])
  // useEffect(() => {
  //   if(!origin  || !busorigin ) {
  //     return (
  //       <ActivityIndicator size="large" color = "#00ff00"/>
  //     )
  //   }
  //   return () => {
  //     console.log("This will be logged on unmount");
  //   }
  // }, [])

  

  useEffect(() => {
    // if (!origin || !busorigin) return;
    let abortController = new AbortController();
    const getTravelTime = async (olatitude, olongitude, dlatitude, dlongitude) => {
    
      const URL = `https://maps.googleapis.com/maps/api/distancematrix/json?units=metric&origins=${olatitude},${olongitude}&destinations=${dlatitude},${dlongitude}&departure_time=now&key=${GOOGLE_MAP_APIKEY}` //&destinations=2.921350448329656,101.63602975503585
      const data = await fetch(URL).then(response => response.json()).catch(err => console.log(err))
      console.log(data)
      if (data.status !== 'OK') return alert(data.error_message)
      dispatch(setTravelTimeInformation(data.rows[0].elements[0]))

    }
      
  
      getTravelTime(busorigin[0], busorigin[1],2.921537, 101.636552)
    

    return () => {
      abortController.abort()
      console.log("This will be logged on unmount");
    }

   
  }, [])
  console.log(open, 'line 114')
  



  return (
    <View>
      <MapView
        ref={mapRef}
        style={styles.map}
        initialRegion={{
          latitude: busorigin[0],
          longitude: busorigin[1],
          latitudeDelta: 0.005,
          longitudeDelta: 0.005,
        }}
        provider="google"

      >
       
        {origin?.coords && open && (
          <Marker
            coordinate={{
              
              // latitude: origin?.coords.latitude,
              // longitude: origin?.coords.longitude,
              
              latitude: 2.9214422621088993,
              longitude: 101.63654775696365

            }}
            title="Origin"
            // description={origin.description}
            identifier="origin"
          />
        )
        }
        {
          origin?.coords && open && (
            <MapViewDirections
              origin={{
                latitude: busorigin[0],
                longitude: busorigin[1]
              }}
              destination={{
                // latitude: origin.coords.latitude,
                // longitude: origin.coords.longitude,
                latitude: 2.9214422621088993,
                longitude: 101.63654775696365
  
              }}
              apikey={GOOGLE_MAP_APIKEY}
              strokeWidth={7}
              strokeColor="#f77f0f"
            />
          )
        }
         <Marker coordinate={{
              latitude: busorigin[0],
              longitude: busorigin[1],
            }}
              identifier="busorigin"
    
    
            >
              <Image
    
                style={{ width: 50, height: 70 }}
                source={require('../../../assets/markerbus.png')}
                resizeMode="center"
                resizeMethod="resize"
              />
    
            </Marker>
        
        {/* {
          title === 'bus' ? (
            <Marker coordinate={{
              latitude: busorigin[0],
              longitude: busorigin[1],
            }}
              identifier="busorigin"
    
    
            >
              <Image
    
                style={{ width: 50, height: 70 }}
                source={require('../../../assets/markerbus.png')}
                resizeMode="center"
                resizeMethod="resize"
              />
    
            </Marker>
          ) : (
            <>
            <Marker coordinate={{
              latitude: station[0].sp_cucms.latitude,
              longitude: station[0].sp_cucms.longitude,
            }}
              identifier="busstoporigin"
    
    
            >
              <Image
    
                style={{ width: 30, height: 40 }}
                source={require('../../../assets/busstop.png')}
                resizeMode="center"
                resizeMethod="resize"
              />
    
            </Marker>
            
            </>
          )
        } */}
        {/* {
          open ? (
            <Marker coordinate={{
              latitude: origin?.coords.latitude,
              longitude: origin?.coords.longitude,
            }}
              identifier="origin"
    
    
            >
           
    
            </Marker>
          ) : (
            <></>
          )
        } */}

       

      </MapView>


    </View>
  )
}
const styles = StyleSheet.create({
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    position: 'relative',
    zIndex: 10

  }
})

export default Maps;


//  3.251350
//  101.678700