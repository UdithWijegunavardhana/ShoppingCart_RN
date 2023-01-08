import * as React from 'react';
import {View, Text, SafeAreaView, ImageBackground, Button} from 'react-native';
import {Avatar, Title} from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';

function ProfileScreen({navigation}) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.userProf}>
          <View style={styles.userTitle}>
            <Avatar.Image
              source={require('../assets/profileImage.png')}
              size={150}
            />
            <View>
              <Title style={{color: 'white', marginTop: 10, fontSize: 25}}>
                sdadscas dcascas
              </Title>
            </View>
          </View>
       
        <View style={styles.userInfo}>
          
          <View style={styles.card}>
            <View style={styles.row}>
              <Ionicons
                name="person"
                color="#777777"
                size={20}
                style={{marginRight: 4}}
              />
              <Text style={{color: '#777777', marginLeft: 20}}>
                First Name
              </Text>
            </View>
            <Text style={styles.cardInfo}>sample first name</Text>
          </View>

          <View style={styles.card}>
            <View style={styles.row}>
              <Ionicons name="person" color="#777777" size={20} />
              <Text style={{color: '#777777', marginLeft: 20}}>
                Last Name 
              </Text>
            </View>
            <Text style={styles.cardInfo}>sample last name</Text>
          </View>

          <View style={styles.card}>
            <View style={styles.row}>
              <Ionicons name="male-female-sharp" color="#777777" size={20} />
              <Text style={{color: '#777777', marginLeft: 20}}>Gender</Text>
            </View>
            <Text style={styles.cardInfo}>Male</Text>
          </View>
          <View style={styles.card}>
            <View style={styles.row}>
              <Ionicons name="mail" color="#777777" size={20} />
              <Text style={{color: '#777777', marginLeft: 20}}>Email</Text>
            </View>
            <Text style={styles.cardInfo}>sampleemail123@gmail.com</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = {
  container: {
    flex: 1,
  },
  userProf: {
    flex: 1,
    backgroundColor: 'white',
  },
  userTitle: {
    alignItems: 'center',
    marginTop: 60,
  },
  userInfo: {
    marginLeft: 20,
    marginRight: 20,
  },
  row: {
    flexDirection: 'row',
  },
  cardInfo: {
    marginLeft: 40,
    color: 'black',
  },
  card: {
    marginTop: 20,
    paddingBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0,0,0,0.1)',
    justifyContent: 'center',
  },
};

export default ProfileScreen;
