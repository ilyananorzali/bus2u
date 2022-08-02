import React from 'react'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import {KeyboardAvoidingView} from 'react-native'
const Searchbar = (props) => {

  return (
    <>
      <GooglePlacesAutocomplete
        ref={props.ref}
        placeholder='Address, bus station, bus number'
        fetchDetails={true}
        onPress={(data, details = null) => {
          // 'details' is provided when fetchDetails = true
          console.log(data, details);
        }}
        query={{
          key: 'AIzaSyCSKEBmUF8RszMPZbyDiUu61JWftRusM-E',
          language: 'en', // language of the results
          components: 'country:my'

        }}
        returnKeyType={"Search"}
        enablePoweredByContainer={false}
        minLength={2}
        autoFillOnNotFound={true}
        keyboardShouldPersistTaps="always"
        styles={{
          container: {
            flex: 0,
            

          },
          textInputContainer: {
            backgroundColor: 'rgba(0,0,0,0)',
            paddingTop: 20,
            paddingLeft: 10,
            paddingRight: 10,
            shadowColor: "#000",

            shadowOffset: {
              width: 0,
              height: 4,

            },
            shadowOpacity: 0.30,
            shadowRadius: 4.65,

            elevation: 8



          },
          textInput: {
            marginLeft: 0,
            marginRight: 0,
            height: 38,
            color: '#5d5d5d',
            fontSize: 16,
            height: 45
          },
          predefinedPlacesDescription: {
            color: '#1faadb',
          },
          listView: {
            
            paddingLeft: 10,
            paddingRight: 10,
            marginTop: -7,
            marginBottom: 10,

          }
        }

        }
        
        debounce={400}
      />
    </>
  )
}


export default Searchbar