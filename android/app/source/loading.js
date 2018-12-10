import React from 'react'
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native'
import firebase from '@firebase/app';
import '@firebase/auth';

export default class loading extends React.Component{

    componentDidMount(){
        firebase.auth.onAuthStateChanged(user => {
            this.props.navigation.navigate(user ? 'main' : 'signup' );
        })
    }


    render(){
        return(
            <View>
                <Text>Loading</Text>
                <ActivityIndicator size="large"/>
            </View>
        )
    }
}