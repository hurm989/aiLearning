import React from "react";
import { View, Text, Button, TouchableOpacity } from "react-native";
import styles from "../../style.js";
import { Image } from "react-native";
import img from '../../assets/avatar.jpg';
// import { useSelector } from "react-redux/es/exports";
import { Avatar, Paragraph, Title, Caption, Drawer, TouchableRipple, Swicth } from "react-native-paper";
export default function Profile({ navigation }) {
    // const userFromRedux = useSelector((a) => a.user);
    // console.log(userFromRedux)
    return <>
        <View>
            <View style={[styles.pt5, styles.bgInfo, styles.flexCenter]}>
                <View><Text style={[styles.fs1, styles.textLight]}>WELCOME</Text></View>
                <View>
                    <Avatar.Image style={[styles.textCenter, { position: "relative", top: 30 }]} source={img} />
                </View>

            </View>
            <View style={[styles.mt3, styles.flexCenter]}>
                <Text style={[styles.textBlack, styles.fs4, styles.textBold]}>Hurmat Naz</Text>
                <Caption>Karachi</Caption>
            </View>
        </View>
        <View style={[styles.p1, styles.mt5]}>
            <View>
                <Text style={[styles.textInfo, styles.fs6, styles.textBold]}>Name</Text>
                <Text style={[styles.textBlack, styles.fs6, styles.mt1, styles.textBold]}>Hurmat Naz</Text>
                <Text numberOfLines={1} style={[styles.textGray, { lineHeight: 9 }]}>
                    ________________________________________________________
                </Text>
            </View>
            <View style={[styles.mt3]}>
                <Text style={[styles.textInfo, styles.fs6, styles.textBold]}>Email</Text>
                <Text style={[styles.textBlack, styles.fs6, styles.mt1, styles.textBold]}>hurmat@gmail.com</Text>
                <Text numberOfLines={1} style={[styles.textGray, { lineHeight: 9 }]}>
                    ________________________________________________________
                </Text>
            </View>
            <View style={[styles.mt3]}>
                <Text style={[styles.textInfo, styles.fs6, styles.textBold]}>Password</Text>
                <Text style={[styles.textBlack, styles.fs6, styles.mt1, styles.textBold]}>123456</Text>
                <Text numberOfLines={1} style={[styles.textGray, { lineHeight: 9 }]}>
                    ________________________________________________________
                </Text>
            </View>
            <View style={[styles.mt3]}>
                <Text style={[styles.textInfo, styles.fs6, styles.textBold]}>ID</Text>
                <Text style={[styles.textBlack, styles.fs6, styles.mt1, styles.textBold]}>SDSDO!@#$349013298</Text>
                <Text numberOfLines={1} style={[styles.textGray, { lineHeight: 9 }]}>
                    ________________________________________________________
                </Text>
            </View>
            <View style={[styles.alignItemsStart, styles.my5]}>
                <TouchableOpacity>
                    <Text style={[styles.textInfo, styles.textBold, styles.fs4, { textDecorationLine: "underline" }]}>Log Out</Text>
                </TouchableOpacity>
            </View>
        </View>
    </>
}