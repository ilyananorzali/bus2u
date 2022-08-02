import React, { useState, useLayoutEffect, useRef, useEffect, useCallback } from 'react'
import Timeline from 'react-native-timeline-flatlist'
import { View, StyleSheet } from 'react-native'
import { selectBusOrigin, selectTravelTimeInformation, setTravelTimeInformation } from '../../slices/navSlice';
import { useDispatch, useSelector } from 'react-redux';
import moment, { min } from 'moment';







const VerticalWrapper = ({navigation}) => {
  const busorigin = useSelector(selectBusOrigin);
  const GOOGLE_MAP_APIKEY = 'AIzaSyAGQR7nOq_I8-mw09k1Ap0jtC7TW3NJ3H4'


  const etaInitial = useSelector(selectTravelTimeInformation);  // this is the start minutes
  console.log(etaInitial, 'MAK KAU')

  const [init, setInit] = useState('')

  const [station1, setStation1] = useState('')
  const [station2, setStation2] = useState('')
  const [station3, setStation3] = useState('')
  const [station4, setStation4] = useState('')
  const [station5, setStation5] = useState('')
  const [station6, setStation6] = useState('')

  const [minutes, setminutes] = useState(0)

  const [currentDate, setCurrentDate] = useState('');

  const dispatch = useDispatch()


  const apiRoute = [
    {
      lingkaran_cyberpoint_1: { latitude: 2.918275296420134, longitude: 101.65112843997643 },
      persiaran_multimedia_c: { latitude: 2.922365728602901, longitude: 101.64080891757598 },
      persiaran_bestari: { latitude: 2.9251607934508064, longitude: 101.63749296382659  },
      persiaran_semarak_api: { latitude: 2.9304974462519886,  longitude: 101.64698120141648 },
      jalan_teknokrat_12: { latitude: 2.94132914143453, longitude: 101.66203493621734 },
      jalan_teknokrat_3: { latitude: 2.9270065826033345, longitude: 101.65485389149016 },

    }



  ]
  const extract = apiRoute.map(apidata => apidata)






  useEffect(() => {
    var date = moment()
      .utcOffset('+05:30')
      .format(' hh:mm:ss a');
    setCurrentDate(date);
    console.log(currentDate, '61 test')

  }, []);




  useEffect( () => {
    if (!busorigin) return;
    let abortController = new AbortController();


    
    const getTravelTime = async  (olatitude, olongitude, dlatitude, dlongitude, n) => {
      const URL = `https://maps.googleapis.com/maps/api/distancematrix/json?units=metric&origins=${olatitude},${olongitude}&destinations=${dlatitude},${dlongitude}&departure_time=now&key=${GOOGLE_MAP_APIKEY}`


      const data = await fetch(URL).then(response => response.json()).catch(err => console.log(err))
      setminutes(data.rows[0].elements[0].duration_in_traffic.text)
      console.log(data.rows[0].elements[0].duration_in_traffic.text, 'line 61 new')
     

      




      if (n === 1) {
        setInit(moment().add(parseInt(etaInitial.duration_in_traffic.text), 'minutes').format('hh:mm'))
        // setminutes(parseInt(data.rows[0].elements[0].duration.text))
        

       
        setStation1(moment(init, 'hh:mm').add(5, 'minutes').format('hh:mm'))
        console.log( station1, 'station 1 boii')
        
        console.log(etaInitial, 'etaInitial')
       
      }
       if (n === 2) {
        
        setStation2(moment(station1, 'hh:mm').add(4, 'minutes').format('hh:mm'))
        console.log(station2, 'station 2')
        // setminutes(parseInt(data.rows[0].elements[0].duration.text))
     
      }
      if (n === 3) {
        // setminutes(parseInt(data.rows[0].elements[0].duration.text))
        setStation3(moment(station2, 'hh:mm').add(6, 'minutes').format('hh:mm'))
        // setminutes(parseInt(data.rows[0].elements[0].duration.text))
       
      }
     if (n === 4) {
        // setminutes(parseInt(data.rows[0].elements[0].duration.text))
        setStation4(moment(station3, 'hh:mm').add(4, 'minutes').format('hh:mm'))
        // setminutes(parseInt(data.rows[0].elements[0].duration.text))
        
      }
       if (n === 5) {
        // setminutes(parseInt(data.rows[0].elements[0].duration.text))
        setStation5(moment(station4, 'hh:mm').add(6, 'minutes').format('hh:mm'))
        // setminutes(parseInt(data.rows[0].elements[0].duration.text))
       
      }
       if (n === 6) {
        // setminutes(parseInt(data.rows[0].elements[0].duration.text))
        setStation6(moment(station5, 'hh:mm').add(4, 'minutes').format('hh:mm'))
        // setminutes(parseInt(data.rows[0].elements[0].duration.text))
     
      }
      dispatch(setTravelTimeInformation(moment(init, 'hh:mm').add(5, 'minutes').format('hh:mm')))




    }


     getTravelTime(busorigin[0], busorigin[1], extract[0].lingkaran_cyberpoint_1.latitude, extract[0].lingkaran_cyberpoint_1.longitude, 1)

     getTravelTime(extract[0].lingkaran_cyberpoint_1.latitude, extract[0].lingkaran_cyberpoint_1.longitude, extract[0].persiaran_multimedia_c.latitude, extract[0].persiaran_multimedia_c.longitude, 2)

     getTravelTime(extract[0].persiaran_multimedia_c.latitude, extract[0].persiaran_multimedia_c.longitude, extract[0].persiaran_bestari.latitude, extract[0].persiaran_bestari.longitude, 3)

     getTravelTime(extract[0].persiaran_bestari.latitude, extract[0].persiaran_bestari.longitude, extract[0].persiaran_semarak_api.latitude, extract[0].persiaran_semarak_api.longitude, 4)

    getTravelTime(extract[0].persiaran_semarak_api.latitude, extract[0].persiaran_semarak_api.longitude, extract[0].jalan_teknokrat_12.latitude, extract[0].jalan_teknokrat_12.longitude, 5)

    getTravelTime(extract[0].jalan_teknokrat_12.latitude, extract[0].jalan_teknokrat_12.longitude, extract[0].jalan_teknokrat_3.latitude, extract[0].jalan_teknokrat_3.longitude, 6)


    return (() => getTravelTime())


  }, [busorigin, GOOGLE_MAP_APIKEY, station1, station2, station3, station4, station5, station6])


  const data = [
    { time: `${station1 === 'Invalid date' ? '' : station1}`, title: 'LINGKARAN CYBERPOINT 1', description: 'Neo Cyber', circleColor: '#009688', lineColor: '#009688' },
    { time: `${station2 === 'Invalid date' ? '' : station2}`, title: 'PERSIARAN MULTIMEDIA', description: 'Cyberia Crescent' },
    { time: `${station3 === 'Invalid date' ? '' : station3}`, title: 'PERSIARAN BESTARI', description: 'Cyberia' },
    { time: `${station4 === 'Invalid date' ? '' : station4}`, title: 'PERSIARAN SEMARAK API', description: 'TM' }, // masalah
    { time: `${station5 === 'Invalid date' ? '' : station5}`, title: 'JALAN TEKNOKRAT 1 & 2', description: 'Lim Kok Wing University, MAMPU' }, // masalah
    { time: `${station6 === 'Invalid date' ? '': station6}`, title: 'JALAN TEKNOKRAT 3', description: 'Glomac Cyberjaya ' },
    { time: `${station2}`, title: 'PERSIARAN MULTIMEDIA', description: 'CTT' },
    { time: `${station1}`, title: 'LINGKARAN CYBERPOINT 1', description: 'Neo Cyber' },
    { time: `${station2}`, title: 'PERSIARAN MULTIMEDIA ', description: 'Cyberia Crescent', lineColor: '#009688' },
  ]
  console.log(station1)

  return (
    <>
      <Timeline
        style={styles.list}
        data={data}
        circleSize={35}
        dotSize={18}
        circleColor='#cc7621'
        lineColor='#cc7621'
        timeContainerStyle={{ minWidth: 52 }}
        timeStyle={{ textAlign: 'center', backgroundColor: '#2E3035', color: 'white', padding: 5, borderRadius: 10 }}
        descriptionStyle={{ color: 'gray' }}
        options={{
          style: { paddingTop: 5 }
        }}
        innerCircle={'dot'}
      />
    </>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 65,
    backgroundColor: 'white'
  },
  list: {
    flex: 1,
    marginTop: 30,
    marginLeft: 10
  },
})
export default VerticalWrapper