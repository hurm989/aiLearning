import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import styles from "../../style.js";
import hotel from '../../assets/hotel.jpg'
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Picker } from '@react-native-picker/picker';
export default function Details({ navigation }) {
    const [selectedLanguage, setSelectedLanguage] = useState();
    return <>
        <ScrollView>
            {/* <View style={[styles.p1]}>
                <View style={[styles.w100, { boxShawdow: 100 }, styles.bgInfo, styles.mt2, styles.p1, { borderRadius: 2 }]}>
                    <View style={[styles.flexRow, styles.alignItemsCenter, styles.justifyContentBetween]}>
                        <Text style={[styles.fs4, styles.textLight, styles.textBold]}>My HOTEL</Text>
                        <Text style={[styles.fs6, styles.textLight, styles.textBold]}>Contact : 02012302938</Text>
                    </View>
                    <View style={[styles.mt1, styles.flexRow, styles.justifyContentBetween]}>
                        <View>
                            <Text style={[styles.fs6, styles.textLight]}>Rooms : 4</Text>
                        </View>
                        <View>
                            <Text style={[styles.fs6, styles.textLight]}>Days : 4</Text>
                        </View>
                        <View>
                            <Text style={[styles.fs6, styles.textLight]}>Extras : Dinner</Text>
                        </View>
                    </View>
                    <View style={[styles.mt2]}>
                        <View>
                            <Text style={[styles.fs6, styles.textLight]}>Discription :
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown
                            </Text>
                        </View>
                        <View>
                            <Image style={[styles.w100]} source={hotel} />
                        </View>
                    </View>
                </View>
            </View> */}
            <View style={[styles.p1]}>
                <View style={[styles.border1, styles.borderBlack]}>
                    <Picker dropdownIconColor= '#15a3fa' style={[ styles.textInfo, styles.textBold]}
                        selectedValue={selectedLanguage}
                        onValueChange={(itemValue, itemIndex) =>
                            setSelectedLanguage(itemValue)
                        }>
                        <Picker.Item label="Java" value="java" />
                        <Picker.Item label="JavaScript" value="js" />
                    </Picker>
                </View>
            </View>
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

        </ScrollView>
    </>
}