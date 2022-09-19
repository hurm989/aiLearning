import React from "react";
import { View, Text } from "react-native";
import * as Progress from 'react-native-progress';
import Icon from 'react-native-vector-icons/MaterialIcons';

import styles from "../../style";
export default function ProfBtn(props) {
    const {head}=props
    return <>
        <View style={[styles.p1]}>
            <View style={[styles.bgDark, styles.p1, { borderRadius: 7 }]}>
                <View style={[styles.mb1]}>
                    <Text style={[styles.textDark, styles.textWhite]}>{head}</Text>
                </View>
                <View style={[styles.flexRow,styles.alignItemsCenter,styles.justifyContentBetween]}>
                    <Progress.Bar color="#FFC229" progress={10} width={300} />
                    <Text>Select</Text>
                </View>
            </View>
        </View>
    </>
}