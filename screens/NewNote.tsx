import { useLayoutEffect, useState } from 'react';
import { SafeAreaView, View, Text, TouchableOpacity, TextInput } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useNavigation } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import Check from '../components/icons/CheckIcon';
import Cancel from '../components/icons/CancelIcon';
import AsyncStorage from '@react-native-async-storage/async-storage';

const NewNote = () => {
    const [fontsLoaded] = useFonts({
        VarelaRound: require('../assets/fonts/VarelaRound.ttf'),
    });

    const navigation = useNavigation<any>();
    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        });
    }, []);

    const [note, setNote] = useState('');

    const handleNoteInput = (text) => {
        setNote(text);
    };

    const handleNoteSubmit = async () => {
        try {
            const currentDate = new Date().toLocaleDateString();
            const existingNotes = await AsyncStorage.getItem(currentDate);
            let newNotes = existingNotes ? JSON.parse(existingNotes) : [];
            newNotes.push(note);

            await AsyncStorage.setItem(currentDate, JSON.stringify(newNotes));

            setNote('');

            navigation.navigate('Home');
        } catch (error) {
            console.log(error);
        }
    };

    if (!fontsLoaded) {
        return null;
    }

    return (
        <SafeAreaView className='bg-secondary h-full px-8'>
            <StatusBar backgroundColor='#9db3b4' style='light' />
            <View className='flex-row items-center justify-between py-10'>
                <View></View>
                <Text className='text-white font-sans text-base'>New Note</Text>
                <TouchableOpacity className='h-8 w-8' onPress={() => navigation.navigate('Home')}>
                    <Cancel />
                </TouchableOpacity>
            </View>
            <TextInput className='text-white border-[1.5px] p-4 rounded-lg border-white mb-2 text-base' value={note} onChangeText={handleNoteInput} placeholder='Write a note...' placeholderTextColor='rgba(255,255,255, 0.38)'></TextInput>

            <View className='absolute bottom-0'>
                <View className='py-6 w-full flex-row items-center justify-center content-center bg-transparent'>
                    <TouchableOpacity className='w-12 h-12 bg-white rounded-full flex items-center justify-center' style={{ elevation: 5 }} onPress={handleNoteSubmit}>
                        <Text className='text-2xl text-secondary pb-[2px]'>
                            <Check />
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
};

export default NewNote;
