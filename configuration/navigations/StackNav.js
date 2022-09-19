// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Signup from '../../screens/Signup';
import LogIn from '../../screens/LogIn';
import MainScreen from '../../screens/mainScreen';
import Splash from '../../screens/splashScreen';

const Stack = createNativeStackNavigator();

function AppStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{ headerShown: false }} name="splash" component={Splash} />
        <Stack.Screen options={{ headerShown: false }} name="Log In" component={LogIn} />
        <Stack.Screen options={{ headerShown: false }} name="Home" component={Signup} />
        <Stack.Screen options={{ headerShown: false, headerTintColor: "gray" }} name="Main" component={MainScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppStack;