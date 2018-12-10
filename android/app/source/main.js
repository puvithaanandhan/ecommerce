import React , {Component} from 'react';
import {Platform,Text,Button,View} from 'react-native';
import firebase from '@firebase/app';
import '@firebase/auth';

import {createBottomTabNavigator} from 'react-navigation';

 class Main extends Component
 {
    state = { currentUser: null }

    componentDidMount() {
        const { currentUser } = firebase.auth()
    
        this.setState({ currentUser })
      }
    render()
    {
        const { currentUser } = this.state
        return(
            <View>
                <Text>
                    Hi {currentUser && currentUser.email}!
                </Text>
               
            </View>
        );
    }
}
export default Main;

