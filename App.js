import React from 'react';
import {createDrawerNavigator,TabNavigator,createStackNavigator,createAppContainer} from 'react-navigation';
import { Platform } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import productsReducer from './android/app/source/products';
import userReducer from './android/app/source/user';
import ProductList from './android/app/source/productlist';
import ProductDetail from './android/app/source/productdetail';
import MyProfile from './android/app/source/myprofile';
import MyCart from './android/app/source/mycart';
import paymentsReducer from './android/app/source/paymentreducer';
import Payment from './android/app/source/payment';
import PaymentConfirmation from './android/app/source/paymentconfirmation';
const ProductsNavigator = createStackNavigator({
ProductList: { screen: ProductList },
ProductDetail: {screen : ProductDetail},

});
const PurchaseNavigator = createStackNavigator({
  MyCart: { screen: MyCart },
  Payment: { screen: Payment },
  PaymentConfirmation: { screen: PaymentConfirmation },
  });
let Navigator;
if (Platform.OS === 'ios') 
{
  Navigator = TabNavigator(
  {
    Home: { screen: ProductsNavigator },
    MyCart: { screen: PurchaseNavigator },
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
  MyCart: { screen: PurchaseNavigator },
 
 
  });
}
const AppContainer =  createAppContainer(Navigator)
const store = createStore(
combineReducers({ paymentsReducer,productsReducer, userReducer }),
applyMiddleware(thunk),
);
export default () => (
<Provider store={store}>
<AppContainer />
</Provider>
);