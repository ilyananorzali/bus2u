import React, {useEffect} from 'react'
import Bottom from './components/Bottom'
import Maps from './components/Maps'
import {useSelector} from 'react-redux'
import { selectMap, selectDestination, selectArrived } from './slices/navSlice'
import { useDispatch } from 'react-redux'
import VerticalWrapper from './components/Vertical/VerticalWrapper'
import { useNavigation } from '@react-navigation/native'


const MapScreen = ({ route }) => {

  const { title } = route.params;

  


  const map = useSelector(selectMap)
  const arrived = useSelector(selectArrived)
  const dispatch = useDispatch()
  const navigation = useNavigation()
  

    // useEffect(() => console.log(paramKey, "24 line"),[])

    useEffect(() => {+
      console.log(arrived , '19')
      if(arrived === true){
        
        navigation.navigate('End')
      }
    }, [map, arrived])


    return (
    <>
      {
        map  ? (
          <Maps />
          ): 
          (
          <VerticalWrapper />
          )
      }
     
     

      <Bottom 
      // route={paramKey}
      route="Bus"
      />


    </>
  )
}

export default MapScreen
