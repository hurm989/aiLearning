import 'react-native-gesture-handler';
import React from "react";
import { View, Text } from "react-native";
import AppDrawer from "../configuration/navigations/DrawerNav";
import styles from "../style";
import AppTabNav from '../configuration/navigations/tabNav';
export default function MainScreen() {
    return <>
        <AppTabNav />
    </>
}