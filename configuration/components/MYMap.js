navigator.geolocation = require('@react-native-community/geolocation');
import MapView, { PROVIDER_GOOGLE, Marker, Callout } from 'react-native-maps'; // remove PROVIDER_GOOGLE import if not using Google Maps
import { StyleSheet, View, Text, PermissionsAndroid } from 'react-native';
import { useEffect, useState } from 'react';
import Geolocation from '@react-native-community/geolocation';
const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
        height: 400,
        width: 400,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    map: {
        ...StyleSheet.absoluteFillObject,
    },
    myText: {
        color: "black",
        fontSize: 39
    }
});

export default function Map({ navigation }) {
    const [loc, myLoc] = useState({})
    async function requestLocationPermission() {
        try {
            const granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
                {
                    'title': 'Example App',
                    'message': 'Example App access to your location '
                }
            )
            if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                alert("You can use the location");
                Geolocation.getCurrentPosition(info => console.log(info));
            } else {
                alert("Location permission denied");
            }
        } catch (err) {
            console.warn(err)
        }
    }
   
    return <>
        <View style={styles.container}>
            <Text>MAp</Text>
            <MapView
                provider={PROVIDER_GOOGLE} 
                style={styles.map}
                region={{
                    latitude: 24.9143688,
                    longitude: 67.0560685,
                    latitudeDelta: 0.015,
                    longitudeDelta: 0.0121,
                }}
            >
                <Marker title='SAIMS' description='Sir Adamjee Institute of Management and 
                Science' pinColor='#007ea7' coordinate={{
                        latitude: 24.9143688,
                        longitude: 67.0560685,
                        latitudeDelta: 0.015,
                        longitudeDelta: 0.0121,
                    }} />
                <Callout tooltip={true} />
            </MapView>

        </View>
        {/* <View style={{ marginTop: 500 }}>
            <Text style={styles.myText}>zxczxc</Text>
        </View> */}
    </>
}