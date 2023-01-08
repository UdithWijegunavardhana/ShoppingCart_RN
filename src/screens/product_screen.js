import * as React from 'react';
import { FlatList , SafeAreaView } from 'react-native';
import { useSelector } from 'react-redux';
import axios from 'axios';
import ProductCard from '../components/product_card';
import { theme } from '../core/theme';

export default function ProductScreen({ navigation }) {
    const [data, setData] = React.useState();
    const cartItems = useSelector((state) => state.cart.itemList);
    console.log(cartItems);

    React.useEffect(() => {
        axios.get('https://dummyjson.com/products')
        .then(function (response) {
            // console.log(response.data.products);
            console.log('product data fetched')
            setData(response.data.products);
        })
        .catch(function (error) {
            console.log(error);
        });
    },[]);

    return (
    <SafeAreaView style={{padding: 5, backgroundColor: theme.colors.white}}>
        <FlatList
          data={data}
          keyExtractor={data => data.id.toString()}
          contentContainerStyle={{paddingBottom: 60}}
          style={{
            shadowColor: theme.colors.medium,
            shadowOpacity: 0.7,
            shadowOffset: {height: 5, width: 0},
          }}
          renderItem={({item}) => (
            <ProductCard
              id={item.id}
              productName={item.title}
              price={'$ '+item.price}
              description={item.description}
            />
          )}
        />
    </SafeAreaView>
    );
}
