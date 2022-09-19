import React, { useState } from "react";
import { View, Text, ImageBackground, Touchable, TouchableOpacity } from "react-native";
// import { TextInput } from "react-native-gesture-handler";
import bg from '../assets/bg.jpg'
import styles from "../style";
import MYInput from "../configuration/components/MYinput";
import MYButton from "../configuration/components/MYButton";
import MYLinks from "../configuration/components/MYLinks";
import Icon from 'react-native-vector-icons/MaterialIcons';

import axios from "axios";

export default function Signup({ navigation }) {
    const [userName, setUserName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    let createUser = () => {
        console.log(userName,email,password)
        let arr = []
        if (!email) {
            arr.push("Email Required")
        }
        if (!password || password.length < 6) {
            arr.push("Password Required")
        }
        if (arr && arr.length > 0) {
            console.log(arr)
            return
        }
        let obj = {
            email, password, userName
        }
        console.log(obj)
        axios.post("https://nativeappbackend.herokuapp.com/api/users", obj).then((res) => {
            // <AppLoader />
            console.log(res.data)
            navigation.navigate("Log In")
            alert(JSON.stringify(res.data.message))
        }).catch((err) => {
            // <AppLoader animate={true} />
            console.log(err.message)
            console.log(err)
            alert("Something Went Wrong,Try again")
            // console.log("Home")
            navigation.navigate("Home")
        })

        // navigation.navigate("Home")
    }
    return <>
        
        <View style={{ flex: 0.2 }}>

        </View>
        <View style={{ flex: 1 }}>
            <View style={[styles.my1, styles.ps1]}>
                <Text style={[styles.h1, styles.textDark, styles.textBold]}>Selamat Data!</Text>
            </View>
            <View style={[styles.ps1]}>
                <Text style={[styles.textDark, styles.fs5]}>
                    Masukam NISM dan password untuk
                </Text>
                <Text style={[styles.textDark, styles.fs5]}>
                    memulai belajar sekarang Sign up
                </Text>
            </View>

            <View style={[styles.mt3]}>
                <MYInput keyboardType="text" onChangeText={e => { setUserName(e) }} secureTextEntry={false} name="login" placeholder="Enter Name" />
                <MYInput keyboardType="email" onChangeText={e => { setEmail(e) }} secureTextEntry={false} name="login" placeholder="Enter Email" />
                <MYInput keyboardType="password" onChangeText={e => { setPassword(e) }} secureTextEntry={true} name="lock" placeholder="Password" />
            </View>
            <View style={[styles.px1]}>
                <MYButton onPress={createUser} label="SIGN UP" />
            </View>
            <View>
                <Text style={[styles.textCenter, styles.fs6, styles.textDark, styles.textBold,]}>
                    Already have an account
                </Text>
                <MYLinks onPress={() => navigation.navigate("Log In")} label="Log In" />
            </View>
        </View>
    </>
}