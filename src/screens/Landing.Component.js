import React, {useState} from 'react';
import axios from 'axios';
import {
  View,
  TouchableWithoutFeedback,
  StyleSheet,
  Image,
  Dimensions,
  StatusBar,
  ImageBackground,
} from 'react-native';

import {
  Container,
  Header,
  Content,
  Form,
  Icon,
  Item,
  Input,
  Label,
  Button,
  Text,
  H1,
} from 'native-base';

import {NativeScreen} from 'react-native-screens';

import {ScrollView} from 'react-native-gesture-handler';

export const LandingScreen = ({navigation}) => {
  const [password, setPassword] = useState('');
  const [confirmpassword, setConfirmpassword] = useState('');
  const [user, setUser] = useState('');
  const [name, setName] = useState('');
  const [secureTextEntry, setSecureTextEntry] = useState(true);

  const [loading, setLoading] = useState(false);

  return (
    <Container style={styles.rootContainer}>
      <StatusBar backgroundColor="#E6F8FC" barStyle="dark-content" />
      <Image source={require('../../assets/hero.jpg')} style={styles.image} />
      <Container style={styles.signup}>
        <H1
          style={{
            textTransform: 'uppercase',
            fontWeight: 'bold',
            marginBottom: 20,
            fontSize: 32,
          }}>
          Pharma Manager
        </H1>
        <Text style={{textAlign: 'center', marginBottom: 20, color: 'grey'}}>
          Picker has been extracted from react-native core and will be removed
        </Text>
        <Button rounded light style={styles.googleButton}>
          <Icon type="FontAwesome" name="google" />
          <Text uppercase={false}>Signup with Google</Text>
        </Button>
        <Button
          rounded
          dark
          style={styles.submitButton}
          onPress={() => navigation.navigate('Register')}>
          <Text>Register with Email</Text>
        </Button>
        <Text onPress={()=>navigation.navigate('Login')}>
          <Text>Already have account? </Text>
          <Text style={{fontWeight: 'bold'}}>Login</Text>
        </Text>
      </Container>
    </Container>
  );
};

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
  signup: {
    paddingHorizontal: 20,
    backgroundColor: '#E6F8FC',
    height: Dimensions.get('window').height / 2,
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingVertical: 20,
  },
  form: {
    marginVertical: 20,
  },
  image: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height / 2,
  },
  heading: {
    fontSize: 75,
  },
  googleButton: {
    backgroundColor: '#fff',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  submitButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  secondary: {
    fontSize: 15,
    marginTop: 30,
  },
  secondaryAction: {
    fontSize: 20,
    marginTop: 10,
  },
});
