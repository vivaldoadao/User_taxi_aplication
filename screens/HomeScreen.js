import React from 'react';
import { View, Text , StyleSheet, SafeAreaView, Image} from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import tw from "tailwind-react-native-classnames";
import NavOptions from '../components/NavOptions';
import {GOOGLE_MAPS_APIKEY} from "@env"
import { useDispatch } from 'react-redux';
import { setDestination, setOrigin } from '../slices/navSlice';
import NavFavourites from '../components/NavFavourites';



const HomeScreen = () => {
    const dispatch = useDispatch();
  return (
    <SafeAreaView style={tw `bg-white h-full`}>
      
      <View style={tw `p-5`}>
            <Image
            style={{width: 100, height: 100, resizeMode:"contain"}}
            source={{uri: "https://media.istockphoto.com/vectors/car-with-a-taxi-sign-or-vehicle-transport-service-black-line-icon-vector-id1396854467?b=1&k=20&m=1396854467&s=170667a&w=0&h=yD_4g66PVypcdT7ichmdxMnV4Hn11HNAVPUgBL6m-Y4="}}
        
            />

        <GooglePlacesAutocomplete
            nearbyPlacesAPI="GooglePlacesSearch"
            debounce={400}
            placeholder="Procurar Destino"
            styles={{
                container:{
                    flex: 0,
                },
                textInput: {
                    fontSize: 18,
                },
            }}

            onPress={(data, details=null) => {
                dispatch(setOrigin({
                    location: details.geometry.location,
                    description: data.description,
                }))
                dispatch(setDestination(null));
            }}
            
            fetchDetails={true}
            returnKeyType={"serach"}
            enablePoweredByContainer={false}
            minLength={2}
            query={{
                key: GOOGLE_MAPS_APIKEY,
                language: "pt-PT",

            }}


        
        
        
        
        />
      </View>
      <NavOptions/>
      <NavFavourites/>
    </SafeAreaView>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({});


