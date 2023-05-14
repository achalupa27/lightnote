import React, { useLayoutEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useFonts } from 'expo-font';
import { useNavigation } from '@react-navigation/native';

const Note = ({ note }: { note: string }) => {
    const [fontsLoaded] = useFonts({
        VarelaRound: require('../assets/fonts/VarelaRound.ttf'),
    });

    const navigation = useNavigation<any>();
    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        });
    }, []);

    if (!fontsLoaded) {
        return null;
    }

    return (
        <TouchableOpacity onPress={() => navigation.navigate('EditNote', { note })}>
            <Text className='text-white border-[1.5px] p-4 rounded-lg border-white mb-2 text-base'>{note}</Text>
        </TouchableOpacity>
    );
};

export default Note;
