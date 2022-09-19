import React from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import styles from "../../style";
import Icon from 'react-native-vector-icons/MaterialIcons';
import ProfBtn from "../../configuration/components/ProfileBtn";
// import { ScrollView } from "react-native-gesture-handler";
// import Icon from 'react-native-vector-icons/MaterialIcons';
export default function Profile() {
    return <>

        <View>
            <View style={[styles.mt1]}>
                <Text style={[styles.textCenter, styles.fs1, styles.textDark, styles.textBold]}>PROFILE</Text>
            </View>
            <View style={[styles.flexRow, styles.justifyContentCenter, styles.mt1]}>
                <Text style={[{ backgroundColor: "#FFC229", borderRadius: 100 }, styles.p1]}><Icon name="face" size={70} color="#004A61" /></Text>

            </View>
            <View style={[styles.mt1]}>
                <Text style={[styles.fs5, styles.textCenter, styles.textDark, styles.textBold, { letterSpacing: 1 }]}>Hurmat Naz</Text>
                <Text style={[styles.textCenter, { color: "#FFC229" }]}>0323213667</Text>
            </View>
            <View style={[styles.alignItemsCenter]}>
                <TouchableOpacity style={[styles.px1, styles.bgDark, { borderRadius: 8 }]}>
                    <Text style={[styles.textWhite]}> EDIT PROFILE</Text></TouchableOpacity>
            </View>
        </View>
        <View>
            <View style={[styles.p1]}>
                <View style={[styles.bgDark, styles.flexRow, styles.justifyContentBetween, styles.px1, styles.alignItemsCenter, { borderRadius: 7 }]}>
                    <Text style={[styles.textDark, styles.textWhite, styles.p1]}>sadapdipasid</Text>
                    <Icon name="get-app" color="white" size={30} />
                </View>
            </View>
            <View style={[styles.px1]}>
                <Text style={[styles.textDark,styles.textBold,styles.fs5]}>Progress Material</Text>
            </View>
            <ScrollView style={[{ height: 450 }]}>
                <ProfBtn head="KI $ KD PEmasdkjko" />
                <ProfBtn head="KI $ KD PEmasdkjko" />
                <ProfBtn head="KI $ KD PEmasdkjko" />
                <ProfBtn head="KI $ KD PEmasdkjko" />
                <ProfBtn head="KI $ KD PEmasdkjko" />
                <View style={[styles.p1]}>
                    <Text style={[styles.textDark, styles.fs6]}>Pengaturan Akum</Text>
                </View>
                <View>
                    <Text style={[styles.fs6, { color: "#FFC229" },styles.px1]}>Abcd ajksii</Text>
                </View>
                
            </ScrollView>
        </View>
    </>
}