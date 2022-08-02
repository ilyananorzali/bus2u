import React,{useState, useEffect} from 'react'
import { Text, View, StyleSheet, ScrollView , TouchableOpacity} from 'react-native'
import { DataTable } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import {ampang, cyberjaya} from '../../src/screens/api/apiplace'




function PlaceScreen({ route }) {
    const navigation = useNavigation();
    const { title, id } = route.params;
    const [array, setarray] = useState([]) // [variable, function(hanya boleh ubahkan value variable)]

    const handlePress = (route_no) =>{
        console.log("press")
        navigation.navigate('Direction', {
            route_no: route_no,
          })
        
        }
    useEffect(() => {
        if(id === "d8c78652-60d3-11ec-8607-0242ac130002"){
            setarray(cyberjaya)
        } 
        else if (id === "93bfa0d2-241d-11ec-9621-0242ac130002"){
            setarray(ampang)
        }
        return (() => array)
    }, [])
    
  


    return (


        <View style={styles.container}>

            {/* <Text>{id}</Text> */}
            <DataTable.Header style = {{backgroundColor: "#ffd2c4" , fontSize: '20' }}>

                <DataTable.Title >Route No.</DataTable.Title>
                <DataTable.Title style={{ justifyContent: 'center', flex: 2.5 }}>Departure</DataTable.Title>
                <DataTable.Title style={{ justifyContent: 'center', flex: 2.5 }}>Arrival</DataTable.Title>
            </DataTable.Header>



            {

                array.map(datas => (


                    <DataTable >

                        <DataTable.Row style = {{ }}>
                            
                            <DataTable.Cell onPress = {() => handlePress(datas.route_no)}  ><Text style = {styles.route_no}>{datas.route_no}</Text></DataTable.Cell>
                            
                            
                            
                            <DataTable.Cell style={{ justifyContent: 'center', 
                                borderLeftWidth: 0.5, borderLeftColor: '#d6d0d0', flex: 2.5  }}>{datas.departure}</DataTable.Cell>
                            <DataTable.Cell style={{ justifyContent: 'center',
                                borderLeftWidth: 0.5, borderLeftColor: '#d6d0d0', flex: 2.5 }}>{datas.arrival}</DataTable.Cell>
                        </DataTable.Row>

                    </DataTable>

                ))
            }
           
        </View>


    )
}
const styles = StyleSheet.create({
    container: {
        padding: 10,
        
        
    },
    route_no:{
        color: "#ff6333",
        textDecorationLine: 'underline'
    }
});

export default PlaceScreen
