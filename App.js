import React , {Component} from 'react';
import {Platform,Text,Button,View} from 'react-native';
import {createStackNavigator,createAppContainer} from 'react-navigation';

import Main from './android/app/source/main';
import Login from './android/app/source/login';
import signup from './android/app/source/signup';
import logout from './android/app/source/logout';

import firebase from '@firebase/app';
import '@firebase/auth';

const firebaseConfig={

  apiKey:'AIzaSyCFct7wYAuX6S8zTAqPCNH0zkPKbqc3Eug',
  authDomain:'myapp-a64b0.firebaseapp.com',
  firebase_url:'https://myapp-a64b0.firebaseio.com/',
  project_id:'myapp-a64b0',
  storageBucket:'myapp-a64b0.appspot.com'
};
firebase.initializeApp(firebaseConfig);
console.log(firebase.app().name);

const AppstackNavigator=createStackNavigator(
  {
   main: Main,
   home1:Login,
   signup1:signup,
   logout1:logout
   
   },
   {
    initialRouteName: 'signup1'
  }
   
  )

  

export default createAppContainer(AppstackNavigator);
