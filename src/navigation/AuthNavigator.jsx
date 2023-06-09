import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react'
import Welcome from './screens/Welcome';
import Sign_In from './screens/Sign_In';
import Sign_up from './screens/Sign_up';


const Stack = createNativeStackNavigator();

const AuthNavigator = () => {
    return (
        <Stack.Navigator initialRouteName='Welcome'>
            <Stack.Screen name='Welcome' component={Welcome} options={{ headerShown: false }} />
            <Stack.Screen name='Sign_In' component={Sign_In} options={{ headerShown: false }} />
            <Stack.Screen name='Sign_up' component={Sign_up} options={{ headerShown: false }} />
        </Stack.Navigator>
    )
}

export default AuthNavigator