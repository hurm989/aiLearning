import React from "react";
import { View, Text, TouchableOpacity, Image, ImageBackground } from "react-native";
import styles from "../../style";
import BGThank from '../../assets/thankyou.png'

export default function ThankYou() {
    return <>
        <View style={[{ flex: 1, backgroundColor: "#2186A7" }]}>
            <View style={[{ position: "relative", top: 259 }]}>
                <Text style={[styles.h1, styles.textLight, styles.textBold, styles.textCenter, { letterSpacing: 5 }]}>Thank You!</Text>

                <Text style={[styles.fs4, styles.m1, styles.textLight, styles.textBold, styles.textCenter, { letterSpacing: 0 }]}>Have a Nice Day</Text>
                <View>
                    <Image source={BGThank} style={[styles.mt3, { tintColor: "white" }]} />
                </View>
            </View>
        </View>

    </>
}