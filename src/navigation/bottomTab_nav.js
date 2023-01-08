import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useSelector } from 'react-redux';
import { AuthContext } from '../core/utils';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ProductScreen from '../screens/product_screen';
import { Button} from 'react-native-paper';
import ProfileScreen from '../screens/profile_screen';
import CartScreen from '../screens/cart_screen';
import { theme } from '../core/theme';

const Tab = createBottomTabNavigator();

export default function BottomTab() {
    const totalItems = useSelector(state => state.cart.totalQuantity);
    const {signOut} = React.useContext(AuthContext);

  return (
      <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === 'Products') {
            iconName = focused
              ? 'ios-list'
              : 'ios-list-outline';
          } else if (route.name === 'Cart') {
            iconName = focused ? 'cart' : 'cart-outline';
          }else if (route.name === 'Profile') {
            iconName = focused ? 'person' : 'person-outline';
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: theme.colors.primary,
        tabBarInactiveTintColor: 'gray',
        tabBarLabelStyle: {
            fontSize: 13,
            padding:5,
        },
        
      })}
      >
        <Tab.Screen name="Products" component={ProductScreen} />
        <Tab.Screen name="Cart" component={CartScreen} options={{ tabBarBadge: totalItems }}/>
        <Tab.Screen name="Profile" component={ProfileScreen} options={{
          headerRight: () => (
            <Button
              mode="outlined"
              uppercase={false}
              onPress={signOut}
            > Log out
            </Button>
          ),
        }}/>
      </Tab.Navigator>
  );
}
