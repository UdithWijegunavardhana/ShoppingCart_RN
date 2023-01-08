import * as React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Card, Title, Paragraph, IconButton, Menu , Button} from 'react-native-paper';
import { theme } from '../core/theme';
import { cartActions } from '../store/cart_slice';
import { useDispatch } from 'react-redux';


const CartCard = ({ productName, quantity , description, id }) => {

    const dispatch = useDispatch();
    const removeFromCart = () =>{
        dispatch(cartActions.removeFromCart(id));
    }

  return (
    <Card style={styles.container} mode="elevated">
      
      <View style={styles.mainContent}>
        <Card.Title
            title={productName}
            style={styles.title}
        />
        <Card.Actions>
          <Button onPress={removeFromCart}
          >Remove</Button>
        </Card.Actions>   
      </View>
      <Card.Content>
          <View style={styles.content}>
             <Paragraph style={styles.description}>
              {quantity}
            </Paragraph>
            <Paragraph style={styles.description} numberOfLines={2}>
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
    height: 80,
    flexDirection: 'row',
    justifyContent: 'space-between',
  }
});

export default CartCard;
