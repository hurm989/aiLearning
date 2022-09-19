import React from "react";
import { View, Text, TextInput, Image,TouchableOpacity } from "react-native";
import styles from "../../style";
import Icon from 'react-native-vector-icons/MaterialIcons';
export default function Card(props) {
    const {head,para,img,onPress}=props
    return <>
        <TouchableOpacity style={[styles.my1]} onPress={onPress}>
            <View style={[styles.bgWhite, styles.py1, { borderRadius: 20 }]}>
                {/* <View>
                        <Image width={4} source={img} />
                    </View> */}
                <View style={[styles.alignItemsCenter]}>
                    <View style={[styles.px3]}>
                        <Icon name={img} size={80} color="#004A61" />
                    </View>
                    <View style={[styles.px3]}>
                        <Text style={[styles.textDark, styles.textBold, styles.fs6]}>{head}</Text>
                        <View style={[styles.flexRow, styles.alignItemsCenter]}>
                            <Icon name="folder" color="#004A61" size={18} />
                            <Text style={[styles.textDark, styles.fs7]}>{para}</Text>
                        </View>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    </>
}