import React from 'react';
import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity } from 'react-native';
import tw from 'tailwind-react-native-classnames';
import { GOOGLE_MAPS_APIKEY} from "@env"
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { useDispatch } from 'react-redux';
import { setDestination } from '../slices/navSlice';
import { useNavigation } from '@react-navigation/native';
import NavFavourites from './NavFavourites';
import { Icon } from 'react-native-elements';

const NavigateCard = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  return (
    <SafeAreaView style={tw `bg-white flex-1`}>
      <Text style={tw `text-center py-5 text-xl`}>Boa tarde Vivaldo </Text>
      <View style={tw `border-t border-gray-200 flex-shrink`}></View>
      <View>

      <GooglePlacesAutocomplete
            nearbyPlacesAPI="GooglePlacesSearch"
            debounce={400}
            placeholder="Para aonde vais ?"
            styles={
              toInputBoxStyles
            }

            onPress={(data, details=null) => {
                dispatch(setDestination({
                    location: details.geometry.location,
                    description: data.description,
                }));

                navigation.navigate("RideOptionsCard");
                
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
      <NavFavourites/>

      <View style={tw `flex-row bg-white justify-evenly py-2 mt-auto border border-gray-100`}>
        <TouchableOpacity onPress={()=> navigation.navigate("RideOptionsCard")} style={tw `flex flex-row justify-between bg-black  py-3 px-4 w-24 rounded-full`}>
          <Icon name='car' type='font-awesome' color="white" size={16}/>
          <Text style={tw `text-white text-center`}>Corrida</Text>
        </TouchableOpacity>

        <TouchableOpacity style={tw `flex flex-row justify-between  py-3 px-4 w-24 rounded-full`}>
          <Icon name='fast-food-outline' type='ionicon' color="black" size={16}/>
          <Text style={tw ` text-center`}>Comida</Text>
        </TouchableOpacity>
      </View>
    
    </SafeAreaView>
  );
}

export default NavigateCard;

const toInputBoxStyles = StyleSheet.create({
  container: {
    backgroundColor:"white",
    paddingTop: 20,
    flex: 0,
  },
  textInput: {
    backgroundColor:"#DDDDDF",
    borderRadius: 0,
    fontSize:18
  },
  textInputContainer:{
    paddingHorizontal:20,
    paddingBottom:0,
  }
});
