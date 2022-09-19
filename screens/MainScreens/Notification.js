import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "../../style.js";
import Icon from 'react-native-vector-icons/MaterialIcons';
// import MYMap from "../../configuration/components/MYMAP.js";
export default function Notification({ navigation }) {
    return <>
        <View style={[styles.mt1, styles.p2]}>
                <View style={[styles.p1, styles.bgInfo, styles.flexRow, styles.border1, styles.w100]}>
                    <View style={[styles.me3]}>
                        <Icon name="hotel" size={100} color="black" />
                    </View>
                    <View>
                        <View>
                            <Text style={[styles.textLight, styles.fs5, styles.textBold]}>MY ABCD</Text>
                        </View>
                        <View>
                            <Text>Contact : 03222848354</Text>
                        </View>
                        <View style={[styles.flexRow]}>
                            <View style={[styles.me1]}>
                                <Text>Room : 3</Text>
                            </View>
                            <View>
                                <Text>Days : 3</Text>
                            </View>
                        </View>
                        <View>
                            <Text>Extras : Dinner</Text>
                        </View>

                        <View style={[styles.mt2, styles.mb1]}>
                            <TouchableOpacity>
                                <Text style={[styles.bgWhite, styles.textInfo, styles.textCenter, styles.textBold, styles.p1]}>Add to Cart</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        {/* <View>
            <MYMap />
        </View> */}
    </>

}