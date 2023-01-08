import * as React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Card, Paragraph, Button} from 'react-native-paper';
import { useDispatch } from 'react-redux';
import { theme } from '../core/theme';
import { cartActions } from '../store/cart_slice';

const ProductCard = ({ productName, price , description , id}) => {

  const dispatch = useDispatch();
  const addToCart = () => {
    dispatch(cartActions.addToCart({
      productName ,
      id,
      price,
    })
    );
  };

  return (
    <Card style={styles.container} mode="elevated">
       
      <View style={styles.mainContent }>
      <Card.Title
          title={productName}
          style={styles.title}
        />
        <Card.Actions>
          <Button
            onPress={addToCart}
          >Add to Cart</Button>
        </Card.Actions>   
      </View>
      <Card.Content>
          <View style={styles.content}>
            <Paragraph style={styles.description}>
              {price}
            </Paragraph>
            <Paragraph style={styles.description} numberOfLines={3}>
              {description}
            </Paragraph>
          </View>
        </Card.Content>

    </Card>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.light,
    borderRadius: 20,
    marginBottom: 10,
    elevation: 20,
  },
  title: {
    fontSize: 17,
    fontWeight: '700',
    width: '50%',
  },
  description: {
    fontSize: 12,
    color: theme.colors.medium,
  },
  content: {
    flexDirection: 'column',
    justifyContent: 'center',
    marginTop: 10,
  },
  mainContent:{
    flexDirection: 'row',
    justifyContent: 'space-between',
  }
});

export default ProductCard;
