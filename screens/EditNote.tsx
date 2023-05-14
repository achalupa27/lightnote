import { useLayoutEffect, useState } from 'react';
import { SafeAreaView, View, Text, TouchableOpacity, TextInput } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useNavigation } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import Note from '../components/Note';
import CheckIcon from '../components/icons/CheckIcon';
import BackIcon from '../components/icons/BackIcon';
import DeleteIcon from '../components/icons/DeleteIcon';

const EditNote = ({ route }) => {
    const [fontsLoaded] = useFonts({
        VarelaRound: require('../assets/fonts/VarelaRound.ttf'),
    });

    const { note } = route.params;
    const [editedNote, setEditedNote] = useState(note);
    const handleNoteInput = (text) => {
        setEditedNote(text);
    };

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
        <SafeAreaView className='bg-secondary h-full px-8'>
            <StatusBar backgroundColor='#9db3b4' style='light' />
            <View className='flex-row items-center justify-between py-10'>
                <TouchableOpacity className='h-8 w-8' onPress={() => navigation.navigate('Home')}>
                    <BackIcon />
                </TouchableOpacity>
                <Text className='text-white font-sans text-base'>Edit Note</Text>
                <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                    <DeleteIcon />
                </TouchableOpacity>
            </View>
            <TextInput className='text-white border-[1.5px] p-4 rounded-lg border-white mb-2 text-base' value={editedNote} onChangeText={handleNoteInput} placeholder='Write a note...' placeholderTextColor='rgba(255,255,255, 0.38)'></TextInput>
            <View className='relative h-[75%]'>
                <View className='absolute bottom-0 py-6 w-full flex-row justify-center'>
                    <TouchableOpacity className='w-12 h-12 bg-white rounded-full flex items-center justify-center' style={{ elevation: 5 }} onPress={() => navigation.navigate('Home')}>
                        <Text className='text-2xl text-secondary'>
                            <CheckIcon />
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
};

export default EditNote;
