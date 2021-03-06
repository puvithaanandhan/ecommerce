import React from 'react';
import { ScrollView, TouchableOpacity, View,Text } from 'react-native';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {Spinner,Icon,List,ListItem,Thumbnail,Body} from 'native-base';
import * as ProductActions from './products';
class ProductList extends React.Component
{
    static navigationOptions = {
        drawerLabel: 'Home',
        tabBarIcon: () => <Icon name="home" />,
        
    };
    componentWillMount() 
    {
        this.props.fetchProducts();
    }
    onProductPress(product) 
    {
        this.props.navigation.navigate('ProductDetail', { product });
    }

    render(){
        return(
            <ScrollView>
                <View>
                <Text>ProductList Page !</Text>
                </View>
                {this.props.loading && <Spinner/>}

            <List>
                {this.props.products.map(p=>(
                    <ListItem key={p.id}>
                    <Thumbnail square height={80} source={{ uri: p.img }} />
                    <Body>
                    <TouchableOpacity onPress={() =>
                    this.onProductPress(p)}>
                    <Text>{p.name}</Text>
                    <Text note>${p.price}</Text>
                    </TouchableOpacity>
                    </Body>
                    </ListItem>
                ))}
            </List>
            
            </ScrollView>
        );
    }
}
ProductList.propTypes = 
{
    fetchProducts: PropTypes.func.isRequired,
    products: PropTypes.array.isRequired,
    loading: PropTypes.bool.isRequired,
    navigation: PropTypes.any.isRequired,
};
function mapStateToProps(state) {
    return {
    products: state.productsReducer.products || [],
    loading: state.productsReducer.loading,
    };
    }
    
    function mapStateActionsToProps(dispatch) 
    {
        return bindActionCreators(ProductActions, dispatch);
    }   
    export default connect(mapStateToProps,mapStateActionsToProps)(ProductList);