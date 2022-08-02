import React, { useEffect, useState } from 'react'
import { Text, View, SafeAreaView, KeyboardAvoidingView, StyleSheet, ScrollView , TouchableOpacity} from 'react-native'
import Timeline from 'react-native-timeline-flatlist'
import SearchInput, { createFilter } from 'react-native-search-filter';
import { Searchbar } from 'react-native-paper';
const KEYS_TO_FILTERS = ['title', 'description'];

import SizedBox from './components/SizedBox';
import { A302, T520 } from './api/apidirection';

function DirectionScreen({route}) {
    
    const { route_no } = route.params;
    const [array, setarray] = useState([]);
    const [title, settitle] = useState('');

    useEffect(() => {
        if(route_no === "302"){
            
            setarray(A302)
            settitle("302: Titiwangsa ~ KLCC")
        } 
        else if (route_no === "T520"){
            setarray(T520)
            settitle("T520: Cyberjaya Terminal")
        }
        return (() => array)
    }, [])
    
    
    

    
    const [searchQuery, setSearchQuery] = React.useState('');
    const filterTitle = array.filter(createFilter(searchQuery, KEYS_TO_FILTERS))
    
    // const onChangeSearch = query => setSearchQuery(query);

    const searchUpdated = (term) => {
        setSearchQuery(term)
    }
    
    return (
        <>
       <View style={styles.container}>
           <SafeAreaView>
               <KeyboardAvoidingView>
       <Text style={styles.title}>{title}</Text>
          <SizedBox height={8} />

          
       <SearchInput 
          onChangeText={(term) => { searchUpdated(term) }} 
          style={styles.searchInput}
          placeholder="Search Location"
          />
          </KeyboardAvoidingView>
          </SafeAreaView>
    {/* <Image style={styles.logostyle} source={require('../../assets/B2.png')} /> */}
    </View>
      
 
        
          
         



     
      
        <Timeline 
          style={styles.list}
          data={filterTitle}
          circleSize={30}
          dotSize={15}
          circleColor='#cc7621'
          lineColor='#cc7621'
          timeContainerStyle={{minWidth:52}}
        //   timeStyle={{textAlign: 'center', backgroundColor:'#2E3035', color:'white', padding:5, borderRadius:10}}
          descriptionStyle={{color:'gray'}}
          options={{
            style:{paddingTop:0}
          }}
          innerCircle={'dot'}
          
        />
    </>
  )
}
const styles = StyleSheet.create({
	
	
	list: {
	  flex: 1,
	  marginTop:10,
      
    
	},
    
    searchInput:{
        padding: 10,
        margin: 10,
        borderColor: '#CCC',
        borderWidth: 1,
        height: 50,
        backgroundColor: "white",
        shadowOpacity: 0.20,
        shadowRadius: 2.0,
        
      },
      container: {

        
        backgroundColor: "#D2DCFF",
        borderRadius: 10
        
        // height: '100%'
    
      },
      root: {
       
        flex: 1,
    
      },
      subtitle: {
        // color: 'rgba(235, 235, 245, 0.6)',
        color: "#394A48",
        fontSize: 17,
        fontWeight: '400',
        lineHeight: 22,
        marginLeft: 20
      },
      title: {
        color: "#394A48",
        fontSize: 24,
        fontWeight: '600',
        lineHeight: 34,
       textAlign: 'center',
        marginTop: 20
      },
})

export default DirectionScreen
