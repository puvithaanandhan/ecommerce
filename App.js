import React from 'react';
import {createDrawerNavigator,TabNavigator,createStackNavigator,createAppContainer} from 'react-navigation';
import { Platform } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import productsReducer from './android/app/source/products';
import userReducer from './android/app/source/user';
import ProductList from './android/app/source/productlist';
import MyProfile from './android/app/source/myprofile';

const ProductsNavigator = createStackNavigator({
ProductList: { screen: ProductList },

});

let Navigator;
if (Platform.OS === 'ios') 
{
  Navigator = TabNavigator(
  {
    Home: { screen: ProductsNavigator },
    MyProfile: { screen: MyProfile },
  },
  {
  tabBarOptions: 
  {
    inactiveTintColor: '#aaa',
    activeTintColor: '#000',
    showLabel: true,
  },
  },
);
} 
else 
{
  Navigator = createDrawerNavigator({
  Home: { screen: ProductsNavigator },
  MyProfile: { screen: MyProfile },
 
  });
}
const AppContainer =  createAppContainer(Navigator)
const store = createStore(
combineReducers({ productsReducer, userReducer }),
applyMiddleware(thunk),
);
export default () => (
<Provider store={store}>
<AppContainer />
</Provider>
);