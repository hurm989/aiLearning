import * as React from 'react';
import { Button, View } from 'react-native';
import { createDrawerNavigator, DrawerItem } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
// import {Avatar} from '@rea'
import CutsomDrawer from './customDrawer';


import Profile from '../../screens/MainScreens/profile';
import Notification from '../../screens/MainScreens/Notification';
import Details from '../../screens/MainScreens/details';
import MapScreen from '../../screens/MainScreens/MapScreen';
const Drawer = createDrawerNavigator();
export default function AppDrawer({ navigation }) {
  return (
    <NavigationContainer independent={true}>
      <Drawer.Navigator initialRouteName="Home" drawerContent={(props) => <CutsomDrawer {...props} />}>
      <Drawer.Screen options={{
          headerStyle: {
            backgroundColor: '#007ea7'
          },headerTintColor:"white"
        }} name="Profile" component={Profile} />
        <Drawer.Screen options={{
          headerStyle: {
            backgroundColor: '#007ea7'
          },headerTintColor:"white"
        }} name="Details" component={Details} />
      
        <Drawer.Screen options={{
          headerStyle: {
            backgroundColor: '#007ea7',
          },headerTintColor:"white",headerTitleStyle: {
            fontWeight: 'bold',
            textAlign:"center"
          }
        }} name="My Cart" component={Notification} />
        <Drawer.Screen options={{
          headerStyle: {
            backgroundColor: '#007ea7',
          },headerTintColor:"white",headerTitleStyle: {
            fontWeight: 'bold',
            textAlign:"center"
          }
        }} name="Map" component={MapScreen} />
      </Drawer.Navigator>
      
    </NavigationContainer>
  );
}