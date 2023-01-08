import * as React from 'react';
import { View, Text , StyleSheet} from 'react-native';
import {TextInput , Button} from 'react-native-paper';
import * as yup from 'yup';
import {Formik} from 'formik';
import { theme } from '../core/theme';
import axios from 'axios';
import { AuthContext } from '../core/utils';
import { useDispatch } from 'react-redux';
import { authActions } from '../store/auth_slice';

let loginSchema = yup.object().shape({
    username: yup
      .string()
      .required('user name is required'),
    password: yup
      .string()
      .min(8, ({min}) => 'Password must be at least 8 characters')
      .required('Password is required'),
  });
  
  function LoginScreen({navigation}) {
    const [showPassword, setShowPassword] = React.useState(true);
    const {signIn} = React.useContext(AuthContext);

    // const dispatch = useDispatch();
    // // dispatch(authActions.logIn({
    // //     data
    // //   })
    // // );
  
    return (
      <Formik
        initialValues={{username: '', password: ''}}
        validateOnMount={true}
        onSubmit={values => {
          console.log(values);
          fetch( 'https://dummyjson.com/auth/login' ,{
            method: 'POST',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify({
                username:values.username,
                password:values.password,
            })
          })
          .then(res=>res.json())
          .then(console.log);
          signIn();
        }}
    
        validationSchema={loginSchema}>
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          touched,
          errors,
          isValid,
        }) => (
          <View
            style={{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'space-between',
              backgroundColor: theme.colors.white,
            }}>
            <View style={{marginTop: '20%'}}>
              <Text style={Styles.title}>Welcome</Text>
            </View>
            
            <View style={{width: '90%', marginTop: '5%' , alignItems:'center' , marginBottom:50}}>
              <TextInput
                mode="outlined"
                style={Styles.input}
                label="user name"
                right={<TextInput.Icon name="user" />}
                outlineColor={theme.colors.primary}
                onChangeText={handleChange('username')}
                onBlur={handleBlur('username')}
                value={values.username}
                error={touched.username && errors.username}
              />
              {touched.username && errors.username && (
                <Text style={Styles.error}>{errors.username}</Text>
              )}
              <TextInput
                mode="outlined"
                label="Password"
                secureTextEntry={showPassword}
                right={
                  <TextInput.Icon
                    name={showPassword ? 'eye-off' : 'eye'}
                    onPress={() => setShowPassword(!showPassword)}
                  />
                }
                style={Styles.input}
                outlineColor={theme.colors.primary}
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                value={values.password}
                error={touched.password && errors.password}
              />
              {touched.password && errors.password && (
                <Text style={Styles.error}>{errors.password}</Text>
              )}
              <Button
              style={[
                Styles.Button,
                {
                  backgroundColor: isValid
                    ? theme.colors.primary
                    : theme.colors.disabled,
                },
              ]}
              mode="contained"
              uppercase={false}
              disabled={!isValid}
              labelStyle={Styles.labelStyle}
              onPress={handleSubmit}>
             Log in
            </Button>
            </View>
            
          </View>
        )}
      </Formik>
    );
  }
  
  const Styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'flex-start',
      backgroundColor: theme.colors.white,
    },
    title: {
      fontSize: 32,
      fontFamily: 'serif',
      color: theme.colors.dark,
      shadowColor: '#00A',
      shadowOffset: {width: 5, height: 5},
      shadowOpacity: 0.8,
      shadowRadius: 2,
      elevation: 1,
      textAlign: 'center',
      fontWeight: 'bold',
    },
    input: {
      width: '90%',
      height: 45,
      marginTop: 8,
      alignSelf: 'center',
      borderColor: theme.colors.primary,
    },
    buttonContainer: {
      flexDirection: 'column',
      width: '75%',
      alignSelf: 'center',
    },
    Button: {
      marginTop: 20,
      height: 46,
      width: '60%',
    },
    labelStyle: {
      fontSize: 18,
      fontWeight: 'bold',
      justifyContent: 'center',
      marginTop: 12,
      color: theme.colors.white,
    },
    error: {
      color: theme.colors.error,
      fontSize: 12,
      marginTop: 2,
      alignSelf: 'center',
    },
});
  
export default LoginScreen;