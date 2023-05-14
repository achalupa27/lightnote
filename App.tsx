import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './screens/HomeScreen';
import NewNote from './screens/NewNote';
import EditNote from './screens/EditNote';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    animationEnabled: false,
                    gestureEnabled: false,
                }}
            >
                <Stack.Screen name='Home' component={HomeScreen} />
                <Stack.Screen name='NewNote' component={NewNote} />
                <Stack.Screen name='EditNote' component={EditNote} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
