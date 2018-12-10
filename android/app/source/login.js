import React , {Component} from 'react';
import {Platform,Text,Button,View} from 'react-native';

import firebase from '@firebase/app';
import '@firebase/auth';
import { TextInput } from 'react-native-gesture-handler';
 class Login extends React.Component
 {
    state = { email: '', password: '', errorMessage: null }

    handlelogin=()=>{
        const {email,password}=this.state
        firebase.auth().signInWithEmailAndPassword(email,password).then(()=>this.props.navigation.navigate('main')).catch(error=>this.setState({errorMessage:error.message}));
        
    }
    render()
    {
        return(
            <View>
                <Text>Login</Text>
                <TextInput
                placeholder="E-mail"
                onChangeText={email=>this.setState({email})}
                value={this.state.email}/>  

                <TextInput
                placeholder="Password"
                secureTextEntry
                onChangeText={password=>this.setState({password})}
                value={this.state.password}/>

                <Button
                title="Login"
                onPress={this.handlelogin}
                />

           </View>
        );
    }
}
export default Login;