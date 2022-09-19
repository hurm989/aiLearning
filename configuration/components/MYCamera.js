import React, { useState } from "react";
import Map from "../../configuration/components/MYMap";
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import { View, Text, Button, Image, TouchableOpacity } from "react-native";
import styles from "../../style";
import { Caption } from "react-native-paper";
export default function MyCamera() {
    const [imgsrc, setImgsrc] = useState("")
    let openCamera = () => {
        launchCamera({
            includeBase64: true,
            saveToPhotos: true,
            mediaType: 'photo'
        }, e => {
            if (e.didCancel != true) {
                console.log(e)
                setImgsrc('data:image/png;base64,' + e.assets[0].base64)
            }
            else {
                console.log("no image selected")
            }
        })
    }
    let openGallery = () => {
        launchImageLibrary({
            includeBase64: true,

        }, e => {
            if (e.didCancel != true) {
                console.log(e)
                setImgsrc('data:image/png;base64,' + e.assets[0].base64)
            }
            else {
                console.log("no image selected")
            }
        })
    }
    return <>
        <View>
            {
                imgsrc ? imgsrc && (
                    <View style={[styles.border3, styles.borderInfo, styles.m1]}>
                        <Image source={{
                            uri: imgsrc
                        }}
                            style={{ width: "100%", height: 300 }}
                        />
                    </View>
                ) : <View>
                    <Text style={[styles.m1, styles.textInfo]}>No Image Selected</Text>
                </View>
            }
            <View style={[styles.mt4, styles.p1]}>
                <TouchableOpacity style={[styles.mb1]}>
                    <Text onPress={openCamera} style={[styles.btn]}>Open Camera</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.mb1]}>
                    <Text onPress={openGallery} style={[styles.btn]}>Open Gallary</Text>
                </TouchableOpacity>
            </View>

        </View>
    </>
}