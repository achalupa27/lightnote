import { useEffect, useLayoutEffect, useState } from 'react';
import { SafeAreaView, View, Text, ScrollView, TouchableOpacity, FlatList } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useNavigation } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import Note from '../components/Note';
import AsyncStorage from '@react-native-async-storage/async-storage';

const HomeScreen = () => {
    const [fontsLoaded] = useFonts({
        VarelaRound: require('../assets/fonts/VarelaRound.ttf'),
    });

    const [notesByDate, setNotesByDate] = useState([]);
    const getNotesByDate = async () => {
        try {
            // Get all keys from local storage
            const keys = await AsyncStorage.getAllKeys();

            // Filter the keys to only include dates
            const dates = keys.filter((key) => /\d{1,2}\/\d{1,2}\/\d{4}/.test(key));

            // Map over the dates and get the notes for each date
            const notesByDate = dates.map(async (date) => {
                const notes = await AsyncStorage.getItem(date);
                return { date, notes: JSON.parse(notes) };
            });

            // Set the state variable with the notes by date
            setNotesByDate(await Promise.all(notesByDate));
        } catch (error) {
            console.log(error);
        }
    };

    const navigation = useNavigation<any>();
    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        });
    }, []);

    useEffect(() => {
        getNotesByDate();
    }, []);

    console.log(notesByDate);

    const renderItem = ({ item }) => (
        <View>
            <Text className='text-white font-sans text-base py-3'>{item.date}</Text>
            {item.notes.reverse().map((note, i) => (
                <Note key={i} note={note} />
            ))}
        </View>
    );

    if (!fontsLoaded) {
        return null;
    }

    return (
        <SafeAreaView className='bg-secondary h-full px-8'>
            <StatusBar backgroundColor='#9db3b4' style='light' />
            <View className='flex-row items-center justify-between pt-10 pb-4'>
                <View></View>
                <Text className='text-white font-sans text-base'>Notes</Text>
                <View></View>
            </View>
            <FlatList data={notesByDate} renderItem={renderItem} keyExtractor={(item) => item.date} showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 80 }} overScrollMode='never' />
            <View className='relative'>
                <View className='absolute bottom-0 py-6 w-full flex-row justify-center bg-transparent'>
                    <TouchableOpacity className='w-12 h-12 bg-white rounded-full flex items-center justify-center' style={{ elevation: 5 }} onPress={() => navigation.navigate('NewNote')}>
                        <Text className='text-2xl text-secondary pb-[2px]'>+</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
};

export default HomeScreen;
