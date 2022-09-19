import React from "react";
import { View, Text, Image } from "react-native";
import MYButton from "../../../configuration/components/MYButton";
import styles from "../../../style";
import img from "../../../assets/discrImg.png";
export default function Discription() {
    return <>
        <View style={[styles.mt1]}>
            <View><Text style={[styles.textBold, styles.fs3, styles.textDark, styles.textCenter]}>Kompetensi Inti</Text></View>
            <View style={[styles.p1, styles.mt2]}>
                <View style={[styles.bgWhite, styles.p1, { borderRadius: 12 }]}>
                    <Text style={[styles.textDark, styles.fs6, styles.textBold]}>Heading</Text>
                    <Text style={[styles.textBlack, styles.mt1]}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</Text>
                </View>
            </View>

            <View style={[styles.p1, styles.mt2]}>
                <View style={[styles.bgWhite, styles.p1, { borderRadius: 12 }]}>
                    <Text style={[styles.textDark, styles.fs6, styles.textBold]}>Heading</Text>
                    <Text style={[styles.textBlack, styles.mt1]}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</Text>
                </View>
            </View>
            <View style={[styles.p1]}>
                <MYButton label="OK" />
            </View>
        </View>



        {/* <View>
            <View>
                <View style={[styles.mt2]}>
                    <Text style={[styles.textBold, styles.fs3, styles.textDark, styles.textCenter]}>Kompetensi Inti</Text>
                </View>
                <View style={[styles.px2]}>
                    <Image style={[styles.w100]} source={img} />
                </View>
            </View>
            <View style={[styles.px2]}>
                <View style={[styles.bgWhite, styles.p1, { borderRadius: 12 }, styles.mb1]}>
                    <Text style={[styles.textDark, styles.fs6, styles.textBold]}>Heading</Text>
                    <View>
                        <Text style={[styles.textBlack, styles.mt1]}>Lorem Ipsum is simply d typesetting, remaining essentially unchanged.</Text>
                    </View>
                </View>
                <View style={[styles.bgWhite,{ borderRadius: 12 }]}>
                    <Text style={[styles.textDark, styles.fs6, styles.textBold]}>Heading</Text>

                    <View>
                        <Text style={[styles.textBlack, styles.mt1]}>Lorem Ipsum is simply d typesetting, remaining essentially unchanged.</Text>
                    </View>

                </View>
            </View>
            <View style={[styles.p1]}>
                <MYButton label="OK" />
            </View>
        </View> */}


        <View>
            <View style={[styles.bgWhite]}>
                <Text style={[styles.fs2,styles.textBold,styles.textDark,styles.textCenter]}>KI KD & Tujuan Pem</Text>
            </View>
        </View>
    </>
}