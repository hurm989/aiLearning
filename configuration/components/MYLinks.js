import React from "react";
import { View, Text, ImageBackground, Touchable, TouchableOpacity, TextInput } from "react-native";
import styles from "../../style";


export default function MYLinks(props) {
    const { label, onPress } = props
    return <>
        <View >
            <TouchableOpacity onPress={onPress}><Text style={[styles.textCenter, styles.textBold, styles.fs6, styles.textDark, { textDecorationLine: "underline" }]}>
                {label}</Text></TouchableOpacity>
        </View>
    </>
}