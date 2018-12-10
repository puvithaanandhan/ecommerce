import React , {Component} from 'react';
import {Platform,TextInput,Button,View,Text,StyleSheet,ImageBackground} from 'react-native';
import firebase from '@firebase/app';
import '@firebase/auth';
export default class signup extends React.Component
{
    state = { email: '', password: '', errorMessage: null }

  handleSignUp = () => 
  {
    const { email, password } = this.state
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(user => this.props.navigation.navigate('home1'))
      .catch(error => this.setState({ errorMessage: error.message }))
  }
    render()
    {
        return(
            
            <View style={styles.container}>
          
            
                <Text>Signup page !!!</Text>

                <TextInput 
                placeholder="Email"
                autoCapitalize="none"
                onChangeText={email=>this.setState({email})}
                value={this.setState.email}/>

                <TextInput
                secureTextEntry
                placeholder="Password"
                autoCapitalize="none"
                onChangeText={password=>this.setState({password})}
                value={this.setState.password}/>

            <View style={styles.gap}> 
                <Button title="SignUp"
                onPress={this.handleSignUp}/>
            </View>
            <View style={styles.gap1}>
            <Button
                title="Already have an account? Login"
                onPress={() => this.props.navigation.navigate('home1')}/>
            </View>
            
  
            </View>
            
        
        )
    }
}

const styles=StyleSheet.create({
    container :{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    gap:{
        height:50,
        width:'50%',
        justifyContent:'space-between'
    
    },

    gap1:
    {
        height:50,
        width:'50%',
        justifyContent:'space-between'
    },
  

});
