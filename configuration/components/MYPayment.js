import React from "react";
import { View, Text, TouchableOpacity, Image, ImageBackground } from "react-native";
import styles from "../../style";
import CheckBox from '@react-native-community/checkbox';
import { useState } from "react";
import Icon from 'react-native-vector-icons/MaterialIcons';
import { RadioButton } from 'react-native-paper';
import MYButton from "./MYButton";
import BGThank from '../../assets/thankyou.png'
export default function Payment() {
    // const [toggleCheckBoxCreditCard, settoggleCheckBoxCreditCard] = useState(false)
    // const [toggleCheckBoxPaypal, settoggleCheckBoxPaypal] = useState(false)
    // const [toggleCheckBoxVisa, settoggleCheckBoxVisa] = useState(false)
    const [checked, setChecked] = React.useState('first');
    const [thankYou, setThankYou] = useState(false)
    let thankYouBye = () => {
        console.log("Good Bye")
    }
    return <>



        <View style={[styles.mt4]}>
            <View style={[styles.bgWhite, styles.p1, styles.ms2, styles.me2, styles.mb1, styles.flexRow, styles.alignItemsCenter, styles.justifyContentBetween, { borderRadius: 5 }]}>
                <View style={[styles.flexRow, styles.alignItemsCenter]}>
                    <Text style={[styles.textBlack, styles.me2]}><Icon name="payments" size={30} /></Text>
                    <Text style={[styles.textBlack, styles.fs6]}>Credit Card</Text>
                </View>
                <RadioButton
                    value="first"
                    uncheckedColor={"black"}
                    color={'#007ea7'}
                    status={checked === 'first' ? 'checked' : 'unchecked'}
                    onPress={() => setChecked('first')}
                />

            </View>
            <View style={[styles.bgWhite, styles.p1, styles.ms2, styles.me2, styles.mb1, styles.flexRow, styles.alignItemsCenter, styles.justifyContentBetween, { borderRadius: 5 }]}>
                <View style={[styles.flexRow, styles.alignItemsCenter]}>
                    <Text style={[styles.textBlack, styles.me2]}><Icon name="payments" size={30} /></Text>
                    <Text style={[styles.textBlack, styles.fs6]}>Visa</Text>
                </View>
                <RadioButton
                    value="second"
                    uncheckedColor={"black"}
                    color={'#007ea7'}
                    status={checked === 'second' ? 'checked' : 'unchecked'}
                    onPress={() => setChecked('second')}
                />
            </View>
            <View style={[styles.bgWhite, styles.p1, styles.ms2, styles.me2, styles.mb1, styles.flexRow, styles.alignItemsCenter, styles.justifyContentBetween, { borderRadius: 5 }]}>
                <View style={[styles.flexRow, styles.alignItemsCenter]}>
                    <Text style={[styles.textBlack, styles.me2]}><Icon name="payments" size={30} /></Text>
                    <Text style={[styles.textBlack, styles.fs6]}>Paypal</Text>
                </View>
                <RadioButton
                    value="third"
                    uncheckedColor={"black"}
                    color={'#007ea7'}
                    status={checked === 'third' ? 'checked' : 'unchecked'}
                    onPress={() => setChecked('third')}
                />
            </View>
            <View style={[styles.mx2,styles.my1]}>
                <Text style={[styles.textInfo,styles.fs]}>Before choosing payment method,make sure the accuracy of your information</Text>
            </View>
            <View>
                <TouchableOpacity onPress={thankYouBye} style={[ styles.p1]}>
                    <Text style={[styles.btnPayment]}>
                        SAVE
                    </Text>
                </TouchableOpacity>
            </View>
           
        </View>

    </>
}