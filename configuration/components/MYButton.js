import React from "react";
import { View, Text, ImageBackground, Touchable, TouchableOpacity, TextInput } from "react-native";
import styles from "../../style";
export default function MYButton(props) {
    const { label, onPress } = props
    return <>
        <View style={[styles.my1]}>
            <TouchableOpacity onPress={onPress} style={[styles.btnUI]}>
                <Text style={[styles.textCenter, styles.fs5, styles.textBold, styles.textWhite]}>{label}</Text>
            </TouchableOpacity>
        </View>
    </>
}