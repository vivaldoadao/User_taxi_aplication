import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native';
import { Icon } from 'react-native-elements';
import { useSelector } from 'react-redux';
import tw from "tailwind-react-native-classnames";
import { selectOrigin } from '../slices/navSlice';
const NavOptions = () => {
    const navigation = useNavigation();
    const origin = useSelector(selectOrigin);
    const data = [
        {
            id: "123",
            title: "Táxi",
            image: "http://links.papareact.com/3pn",
            screen: "MapScreen",
        },
        {
            id: "456",
            title: "Restaurantes",
            image: "http://links.papareact.com/28w",
            screen: "EatsScreen",
        },
      
    ];
  return (
   <FlatList
    data={data}
    horizontal
    keyExtractor={(item) => item.id}
    renderItem={({item}) => (
        <TouchableOpacity  onPress={() => navigation.navigate(item.screen)} 
        disabled={!origin}
        style={tw `p-2 pl-6 pb-8 pt-0 bg-gray-200 m-2 w-40 h-60`} >
            <View style={tw `${!origin && "opacity-20"}`}>
            <Image
                resizeMode='contain'
                style={{width: 120, height: 120, }}
                
                source={{ uri: item.image}}
            />

            </View>
            <Text style={tw `mt-2 text-lg font-semibold`} >{item.title}</Text>
            <Icon  style={tw `p-2 bg-black rounded-full w-10 mt-4`}
            name="arrowright" color="white" type="antdesign" />
            
        </TouchableOpacity>
    )}
   
   
   />
  );
}

export default NavOptions;
