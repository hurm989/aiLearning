import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';
import HomeTab from '../../screens/TabScreens/HomeTab';
import Profile from '../../screens/TabScreens/profile';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Discription from '../../screens/TabScreens/homeScreens/discription';
import StyleScreen from '../../screens/TabScreens/StyleScreen';

const Tab = createBottomTabNavigator();

export default function AppTabNav() {
  return (
    <NavigationContainer independent={true}>
      <Tab.Navigator screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          if (route.name == "home") {
            return <Icon name="home" size={30} color="#004A61" />
          }
          else if (route.name == "Profile") {
            return <Icon name="face" size={30} color="#004A61" />;

          }
          else if(route.name == "style"){
            return <Icon name="drive-file-rename-outline" size={30} color="#004A61" />
          }
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
      })}>
        <Tab.Screen options={{ headerShown: false }} name="home" component={HomeTab} />
        <Tab.Screen options={{ headerShown: false }} name="style" component={StyleScreen} />

        <Tab.Screen options={{ headerShown: false }} name="Profile" component={Profile} />
        <Tab.Screen options={{ headerShown: false }} name="Discription" component={Discription} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}