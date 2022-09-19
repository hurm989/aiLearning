import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from "../../style";
import * as Progress from 'react-native-progress';
import img from "../../assets/book.jpg"
import Card from "../../configuration/components/Card";
import axios from "axios";
import { ActivityIndicator } from "react-native-paper";
import MYButton from "../../configuration/components/MYButton";

export default function HomeTab() {
    let [myData, setMyData] = useState([])
    let [myDataDiscription, setMyDataDiscription] = useState([])
    const [loader, setLoader] = useState(false)

    const getData = () => {
        setLoader(true)
        axios.get("https://phplaravel-704365-2879244.cloudwaysapps.com/api/jawan_pakistan").then((res) => {
            console.log(res.data)
            setMyData(res.data.data)
            setLoader(false)
            console.log(myData)
        }).catch((err) => {
            console.log(err.message)
            setLoader(false)
        })
    }
    useEffect(() => {
        getData()
    }, [])
    let discrition = (i) => {
        setLoader(true)
        console.log(i)
        axios.get(`https://phplaravel-704365-2879244.cloudwaysapps.com/api/jawan_pakistan/Designing/${i + 1}`).then((res) => {
            console.log(res.data)
            setMyDataDiscription(res.data.data)
            setLoader(false)
        }).catch((err) => {
            console.log(err.message)
            setLoader(false)
        })
    }
    return <>
        <View style={[styles.p1]}>

            <View >
                <View style={[styles.flexRow, styles.justifyContentBetween]}>
                    <View>
                        <Icon style={[{ backgroundColor: "#FFC229", padding: 6, borderRadius: 5 }]} name="face" size={30} color="black" />
                    </View>
                    <View style={[styles.me6]}>
                        <Text style={[styles.textDark, styles.fs4]}>Hurmat Naz</Text>
                        <Text style={[styles.textDark]}>Web Develoepr</Text>
                    </View>
                    <View>
                        <Icon style={[{ backgroundColor: "white", padding: 6, borderRadius: 5 }]} name="unarchive" size={30} color="black" />
                    </View>
                </View>
            </View>


            <View style={[styles.my2]}>
                <View style={[styles.bgDark, styles.p1, { borderRadius: 10 }]}>
                    <View style={[styles.flexRow, styles.justifyContentBetween]}>
                        <View>
                            <Text style={[styles.textWhite]}>Lorem impsum to do</Text>
                        </View>
                        <View>
                            <TouchableOpacity style={[{ backgroundColor: "#FFC229", borderRadius: 30 }]}>
                                <Text style={[styles.px1]}>MULAI</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={[styles.my1]}>

                        <Text style={[styles.textBold, styles.textWhite]}>
                            Lorem Ipsum is simply dummy text of the  </Text>
                        <Text style={[styles.textBold, styles.textWhite]}>been the industry's
                        </Text>
                    </View>
                    <View style={[styles.mb1]}>
                        <Text style={[styles.textRight]}>0%</Text>
                        <Progress.Bar color="white" progress={10} width={350} />
                    </View>
                </View>
            </View>
            <ScrollView style={[{ height: 520 }]}>
                {loader ? <ActivityIndicator /> : myData && myData.length > 0 ? myData.map((e, i) => <View key={i} style={[styles.flexRow, styles.justifyContentAround]}>
                    <Card img="book" onPress={() => discrition(i)} head={e.categories} para="3 Material" />
                    <Card img="book" head="KI KD Tujuman" para="3 Material" />
                </View>) : null}
            </ScrollView>
        </View>

        {/* <View style={[styles.bgWhite, styles.p1]}>
            <Text style={[styles.textDark, styles.fs2, styles.textBold, styles.textCenter]}>HEADING </Text>
        </View>
        <View style={[styles.m1]}>
            <View style={[{ height: 300 }, styles.bgDark]}>
                <Text>
                    VIDEOS
                </Text>
            </View>
            <View style={[styles.my2]}>
                <Text style={[styles.textBold, styles.textDark, styles.fs3]}>heading</Text>
                <Text style={[styles.textBold, styles.fs6, { color: "#FFC229" }]}>heading</Text>
                <View style={[styles.bgWhite, styles.p1, { borderRadius: 10 }, styles.mt1]}>
                    <ScrollView height={200}>
                        <Text style={[styles.textDark]}>
                            Lorem ipsuj to sadasd,uiasd dsjlasmdld ksjadlasd uilaf a,sj
                        </Text>
                    </ScrollView>
                </View>
                <View style={[styles.w100, styles.flexRow, styles.justifyContentEnd]}>
                    <MYButton style={[styles.textLeft]} label="Next" />
                </View>
            </View>
        </View> */}
    </>
}