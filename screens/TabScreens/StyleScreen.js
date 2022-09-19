import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import styles from "../../style";
import img from "../../assets/pathFinder.png"
import Icon from 'react-native-vector-icons/MaterialIcons';
import Card from "../../configuration/components/Card";
export default function StyleScreen() {
    return <>
        <View >

            <View style={[styles.bgWhite, styles.p1, styles.mb5]}>
                <Text style={[styles.textBold, styles.textCenter, styles.textDark, styles.fs1]}>Styling Filter</Text>
            </View>
            <View style={[styles.flexRow, styles.justifyContentAround, styles.alignItemsCenter, styles.mt5]}>
                <TouchableOpacity>
                    <View style={[styles.bgWhite, styles.m2, { borderRadius: 30 }, styles.px2]}>
                        <Image source={img} style={[styles.w100, { height: 110 }]} resizeMode="contain" />
                        <View style={styles.p1}>
                            <Text style={[styles.fs4, styles.textDark, styles.textBold, styles.textCenter]}>Path Folder</Text>
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={[styles.bgWhite, styles.m2, { borderRadius: 30 }, styles.px1]}>
                        <Image source={img} style={[styles.w100, { height: 110 }]} resizeMode="contain" />
                        <View style={styles.p1}>
                            <Text style={[styles.fs4, styles.textDark, styles.textBold, styles.textCenter]}>Croping Mask</Text>
                        </View>
                    </View>
                </TouchableOpacity>
            </View>
        </View>

        <View style={[styles.p2]}>
            <View style={[styles.border5, styles.borderBlack, styles.h50]}>
            </View>
            <View>
                <Icon name="replay-circle-filled" size={40} color="#000000"/>
            </View>
        </View>
    </>
}