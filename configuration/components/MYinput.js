import React from "react";
import { View, Text, ImageBackground, Touchable, TouchableOpacity, TextInput } from "react-native";
import styles from "../../style";
import Icon from 'react-native-vector-icons/MaterialIcons';
export default function MYInput(props) {
    const { placeholder, keyboardType, secureTextEntry, onChangeText,name } = props
    return <>
        <View style={[styles.ps1, styles.pe1,styles.my1]}>
            <View style={[styles.input, styles.flexRow, styles.alignItemsCenter]}>
                <Icon name={name} color={"#004A61"} size={23} />
                <TextInput onChangeText={onChangeText} style={[styles.textDark, styles.ps1]} keyboardType={keyboardType} secureTextEntry={secureTextEntry?secureTextEntry:false} placeholder={placeholder} placeholderTextColor="#004A61" />
            </View>
        </View>
    </>
}