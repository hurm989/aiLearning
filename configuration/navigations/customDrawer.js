import React from "react";
import { View ,Text} from "react-native";
import styles from "../../style";
import { DrawerContentScrollView,DrawerItem } from "@react-navigation/drawer";
import { Avatar,Paragraph,Title,Caption,Drawer,TouchableRipple,Swicth } from "react-native-paper";
import avatr from '../../assets/avatar.jpg'
export default function CutsomDrawer(props){
    return <>
    <View style={[{flex:1}]}>
        <DrawerContentScrollView {...props}>
            <View style={[styles.textBold]}>
                <View style={[styles.flexRow,styles.mt2]}>
                        <View style={[styles.mt1,styles.ms1]}>
                            <Avatar.Image source={avatr} />
                        </View>
                        <View style={[styles.ms1,styles.mt1]}>
                            <Title>Hurmat Naz</Title>
                            <Caption>hurmat@gmail.com</Caption>
                        </View>
                </View>
                {/* <View style={[styles.textBlack,styles.m1]}>
                    <View style={[]}>
                        <Paragraph>80</Paragraph>
                        <Caption>Followers</Caption>
                    </View>
                    <View style={[]}>
                        <Paragraph>80</Paragraph>
                        <Caption>Followers</Caption>
                    </View>
                </View> */}
            <Drawer.Section style={[{flex:1},styles.mt2]}>
                <DrawerItem label="Profile" onPress={()=>{props.navigation.navigate('Profile')}}/>
                <DrawerItem label="My Cart" onPress={()=>{props.navigation.navigate('My Cart')}}/>
                <DrawerItem label="Booking" onPress={()=>{props.navigation.navigate('Details')}}/>
                <DrawerItem label="Map" onPress={()=>{props.navigation.navigate('Map')}}/>
            </Drawer.Section>
            </View>
        </DrawerContentScrollView>
        <Drawer.Section>
            <DrawerItem label="Sign Out"/>
        </Drawer.Section>
    </View>

    </>
}