import React from "react";
import { View, Text, ImageBackground, Touchable, TouchableOpacity, TextInput } from "react-native";
import styles from "../style";
import bg from '../assets/bg.jpg'
import MYInput from "../configuration/components/MYinput";
import MYButton from "../configuration/components/MYButton";
import MYLinks from "../configuration/components/MYLinks";
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useState } from "react";
import axios from "axios";
// import { useDispatch } from "react-redux";
export default function LogIn({ navigation }) {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    // const dispatch = useDispatch();
    let logIn = () => {
        let arr = []
        if (!email) {
            arr.push("Email Required")
        }
        if (!password || password.length < 6) {
            arr.push("Password Failed")
        }
        if (arr && arr.length > 0) {
            console.log(arr)
            alert(arr)
            return
        }
        let obj = {
            email, password

        }
        console.log(obj)
        axios.post("https://nativeappbackend.herokuapp.com/api/auth", obj).then((res) => {
            // <AppLoader />
            console.log(res.data)
            navigation.navigate("Main")
            alert(JSON.stringify(res.data.message))
        }).catch((err) => {
     
            console.log(err.message)
            console.log(err)
            alert("User Not Found")
            navigation.navigate("Home")
        })
      
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
                    memulai belajar sekarang
                </Text>
            </View>

            <View style={[styles.mt3]}>
                <MYInput keyboardType="email" onChangeText={e => { setEmail(e) }} secureTextEntry={false} name="login" placeholder="Enter Email" />
                <MYInput keyboardType="password" onChangeText={e => { setPassword(e) }} secureTextEntry={true} name="lock" placeholder="Password" />
            </View>
            <View style={[styles.px1]}>
                <MYButton onPress={logIn} label="LOG IN" />
            </View>
            <View>
                <Text style={[styles.textCenter, styles.fs6, styles.textDark, styles.textBold,]}>
                    Dont have an account?
                </Text>
                <MYLinks onPress={() => navigation.navigate("Home")} label="Sign Up" />
            </View>
        </View>
    </>
}