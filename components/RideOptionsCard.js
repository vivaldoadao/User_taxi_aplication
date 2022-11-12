import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, Image } from 'react-native';
import { Icon } from 'react-native-elements';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useSelector } from 'react-redux';
import tw from 'tailwind-react-native-classnames';
import { selectTravelTimeInformations } from '../slices/navSlice';

const RideOptionsCard = () => {
    const [selected, setSelected] = useState(null);
    const travelTimeInformation = useSelector(selectTravelTimeInformations);


    const data = [
        {
            id: "WeGo Básico-123",
            title: "WeGo Básico",
            multiplier: 1,
            image: "https://links.papareact.com/3pn",
        },
        {
            id: "WeGo Básico-456",
            title: "WeGo Conforto",
            multiplier: 1.2,
            image: "https://links.papareact.com/5w8",
        },
        {
            id: "WeGo Básico-789",
            title: "WeGo Luxuri",
            multiplier: 1.75,
            image: "https://links.papareact.com/7pf",
        },
    ];
    const navigation = useNavigation();
  return (
    <SafeAreaView style={tw `bg-white flex-grow`}>
        <View>
            <TouchableOpacity onPress={() => navigation.navigate("NavigateCard")} style={tw `absolute top-0 left-5 p-1 rounded-full`}>
                <Icon name='chevron-left' type='fontawesome' />
            </TouchableOpacity>
            <Text style={tw `text-center  text-xl`}>Selecione uma corrida - {travelTimeInformation?.distance.text}</Text>
        </View>

        <FlatList data={data}
                 keyExtractor={(item) => item.id}
                 renderItem={({item : {id , title, multiplier , image}, item}) => (
                    <TouchableOpacity onPress={() => setSelected(item)} style={tw `flex-row justify-between items-center px-10 ${ id === selected?.id && "bg-gray-200"}` }>
                        <Image
                            style={{width: 100, height: 100, resizeMode:"contain"}}
                            source={{uri: image}}
                        
                        />
                        <View style={tw`-ml-6`}>
                            <Text style={tw`font-semibold`}>{title}</Text>
                            <Text>Tempo de Viagem</Text>
                        </View>
                        <Text style={tw`text-xl`}>4.100 Kz</Text>
                    </TouchableOpacity>
                 )}
        />

        <View>
            <TouchableOpacity disabled={!selected} style={tw`bg-black ${!selected && "bg-gray-300"} `}>
                <Text style={tw`text-center text-white text-xl`}>{selected?.title}</Text>
            </TouchableOpacity>
        </View>


        
    </SafeAreaView>
  );
}

export default RideOptionsCard;
