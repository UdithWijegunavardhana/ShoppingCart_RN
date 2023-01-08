import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {Provider as PaperProvider} from 'react-native-paper';
// import {AsyncStorage} from 'react-native';
import {Provider, useSelector } from 'react-redux';
import { AuthContext } from './src/core/utils';

import { theme } from './src/core/theme';
import BottomTab from './src/navigation/bottomTab_nav';
import LoginScreen from './src/screens/login_screen';
import SplashScreen from './src/screens/splash_screen';
import { store } from './src/store';
import { actions } from './src/store';

const Stack = createNativeStackNavigator();

function App({navigation}) {

  // const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  const authContext = React.useMemo(
    () => ({
      signIn: async data => {
        try {
          // await AsyncStorage.setItem('userToken', 'dummy-auth-token');
          console.log('User Token ');
        } catch (err) {
          console.log('Error in Storing :' + err);
        }
        dispatch({type: 'SIGN_IN', token: 'data.token'});
        console.log('token stored');
      },
      signOut: async () => {
        try {
          // await AsyncStorage.removeItem('userToken');
        } catch (err) {
          console.log('Error in storage :' + err);
        }
        dispatch({type: 'SIGN_OUT'});
      },
      signUp: async data => {
        try { 
          // userToken = await AsyncStorage.getItem(
          //   'userToken',
          //   'dummy-auth-token',
          // );
        } catch (err) {
          console.log(err.message);
        }
        dispatch({type: 'SIGN_IN', token: 'dummy-auth-token'});
      },
    }),
    [],
  );

  const [state, dispatch] = React.useReducer(
    (prevState, action) => {
      switch (action.type) {
        case 'RESTORE_TOKEN':
          return {
            ...prevState,
            userToken: action.token,
            isLoading: false,
          };
        case 'SIGN_IN':
          return {
            ...prevState,
            isSignout: false,
            userToken: action.token,
          };
        case 'SIGN_OUT':
          // AsyncStorage.removeItem('userToken');
          console.log('you are loged out');
          return {
            ...prevState,
            isSignout: true,
            userToken: null,
          };
      }
    },
    {
      isLoading: true,
      isSignout: false,
      userToken: null,
    },
  );

  React.useEffect(() => {
    const bootstrapAsync = async () => {
      let userToken;
      try {
        // userToken = await AsyncStorage.getItem('userToken');
        console.log('Token Restored');
      } catch (e) {
        console.log('');
      }
      dispatch({type: 'RESTORE_TOKEN', token: 'dummy-auth-token'});
    };
    bootstrapAsync();
  }, []);

  return (
    <AuthContext.Provider value={authContext}>
      <PaperProvider theme={theme}>
        <NavigationContainer>
          <Stack.Navigator>
            {state.isLoading ? (
              <Stack.Screen name="Splash" 
                component={SplashScreen} 
                options={{
                  headerShown: false,
              }}
            />
            ) : state.userToken == null ? (
              <Stack.Screen
                name="LogIn Screen"
                component={LoginScreen} 
                options={{
                  headerShown: false,
                  animationTypeForReplace: state.isSignout ? 'pop' : 'push',
                }}
              />
            ) : (
              <Stack.Screen
                name="Product Screen"
                component={BottomTab}
                options={{
                  headerShown: false,
                }}
              />
            )}
          </Stack.Navigator>
        </NavigationContainer>
      </PaperProvider>
    </AuthContext.Provider>
  );
}

export default App;