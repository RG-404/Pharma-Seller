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
  ScrollView,
} from 'react-native';

import {
  Container,
  Content,
  Text,
  Input,
  Icon,
  Form,
  Item,
  Label,
  Spinner,
  Button,
  CheckBox,
} from 'native-base';

export const LoginScreen = ({navigation}) => {
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');

  const [showSpinner, setshowSpinner] = useState(false);

  const submit = () => {
    setshowSpinner(true);
    const data = {
      email,
      password,
    };
    axios
      .post('http://192.168.43.25:5000/auth', data)
      .then((res) => {
        console.log(res.data);
        if (res.data.token !== undefined) {
          console.log('Token recieved. Authorized.');
          // try {
          //   AsyncStorage.setItem('AUTH_TOKEN', res.data.token);
          // } catch (e) {
          //   console.log(e);
          // }
          navigation.navigate('Main', {screen: 'Overview'});
        }
        setshowSpinner(false);
      })
      .catch((err) => console.log(err.response.data));
  };

  return (
    <Container style={styles.register}>
      <StatusBar backgroundColor="#fff" barStyle="dark-content" />
      <Text style={styles.heading}>Welcome Back</Text>
      <Text style={{textAlign: 'center', marginBottom: 20}}>
        It was then the glorious energy met the weekly race.{' '}
      </Text>
      <Form style={styles.form}>
        <Item regular style={styles.formItem}>
          <Icon type="Feather" name="mail" />
          <Input
            placeholder="Email"
            value={email}
            onChangeText={(text) => setemail(text)}
          />
        </Item>

        <Item regular style={styles.formItem}>
          <Icon type="Feather" name="lock" />
          <Input
            placeholder="Password"
            value={password}
            onChangeText={(text) => setpassword(text)}
            secureTextEntry={true}
          />
        </Item>
      </Form>

      <Button
        rounded
        dark
        style={styles.submitButton}
        onPress={() => {
          submit();
        }}>
        {showSpinner ? <Spinner color="#fff" /> : <Text>Login</Text>}
      </Button>
    </Container>
  );
};

const styles = StyleSheet.create({
  register: {
    justifyContent: 'center',
    alignContent: 'center',
    paddingHorizontal: 20,
  },
  formItem: {
    borderRadius: 20,
    backgroundColor: '#f4f4f4',
    borderColor: '#00000000',
    marginBottom: 15,
    color: 'grey',
  },
  heading: {
    fontSize: 35,
    textAlign: 'center',
    textTransform: 'uppercase',
    fontWeight: 'bold',
    marginBottom: 15,
  },
  form: {},
  submitButton: {
    marginTop: 10,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
