import React, { Component } from 'react';
import { Text, View, Alert, Button } from 'react-native';
import * as MediaLibrary from 'expo-media-library'


export default class AudioProvider extends Component {
    constructor(props) {
        super(props)
    }

    permissionAlert = () => {
        Alert.alert("Permission required!", "Permission to access media files is required to use Axi!",
            [
                {
                    text: 'OK',
                    onPress: () => this.getPermission()
                },
                {
                    text: 'NO',
                    onPress: () => this.permissionAlert()
                }
            ])
    }

    getPermission = async () => {
        const permission = await MediaLibrary.getPermissionsAsync()
        while (!permission.granted) {
            if (!permission.canAskAgain) {
                this.permissionAlert()
            }
            permission = await MediaLibrary.getPermissionsAsync()
        }
        //get audio files

    }




    componentDidMount() {
        getPermission()//after mount request permission
    }
    render() {
        return (
            <View>

            </View>

        );
    }


}


