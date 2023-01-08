import * as React from 'react';
import { Button, View, Text , StyleSheet , FlatList , SafeAreaView , ScrollView } from 'react-native';
import {Searchbar, IconButton, Menu, Divider} from 'react-native-paper';
import { useSelector } from 'react-redux';

import CartCard from '../components/cart_card';
import { theme } from '../core/theme';

// const Products = [
//     {
//       id: 'A001',
//       productName: 'React Native',
//       quantity: 1,
//       description: '31st January 2020',
//     },
//     {
//       id: 'A002',
//       productName: 'Learn Mobile Development',
//       quantity: 2,
//       description: '2nd March 2020',
//     },
//     {
//       id: 'A003',
//       productName: 'What is axios',
//       quantity: 1,
//       description: '3rd dcember 2020',
//     },
//     {
//         id: 'A004',
//         productName: 'Learn Mobile Development',
//         quantity: 3,
//         description: '2nd March 2020',
//       },
//   ];

export default function CartScreen({ navigation }) {

    const cartItems = useSelector(state => state.cart.itemList);
    const [data, setData] = React.useState();

    React.useEffect(() => {
      if (!data) {
      setData(cartItems)
      // var axios = require('axios');
      // var config = {
      //   method: 'get',
      //   url: 'https://10.0.2.2:5001/api/Blog',
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      };
  
      // axios(config)
      //   .then(function (response) {
      //     console.log(JSON.stringify(response.data));
      
      //     setData(response.data);
      //   })
      //   .catch(function (error) {
      //     console.log(error);
      //   });
      // // }
    });
  
    return (
    <SafeAreaView style={{padding: 5}}>
        <FlatList
          data={cartItems}
          keyExtractor={cartItems => cartItems.id}
          contentContainerStyle={{paddingBottom: 60}}
          style={{
            shadowColor: theme.colors.medium,
            shadowOpacity: 0.7,
            shadowOffset: {height: 5, width: 0},
          }}
          renderItem={({item}) => (
            <CartCard
            id={item.id}
              productName={item.productName}
              description={item.description}
              quantity={item.quantity}
              
            />
          )}
        />
    </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    searchBarContainer: {
      flexDirection: 'row',
      width: '100%',
      alignItems: 'center',
      padding: 0,
      margin: 0,
    },
    searchBar: {
      flex: 1,
      marginVertical: 10,
      height: 45,
      fontSize: 18,
    },
    filterIcon: {
      borderWidth: 2,
      borderRadius: 2,
      height: 47,
      width: 47,
      marginVertical: 10,
      borderColor: theme.colors.border,
      borderRadius: 4,
      backgroundColor: theme.colors.white,
      marginLeft: 5,
      marginRight: 0,
      elevation: 5,
    },
  });
  