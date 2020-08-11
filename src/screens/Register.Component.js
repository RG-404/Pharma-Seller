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
  Toast,
} from 'native-base';

export const RegisterScreen = () => {
  const [agreed, setagreed] = useState(false);
  const [name, setname] = useState('');
  const [email, setemail] = useState('');
  const [phone, setphone] = useState('');
  const [password, setpassword] = useState('');
  const [confirmPassword, setconfirmPassword] = useState('');

  const [showSpinner, setshowSpinner] = useState(false);

  const submit = () => {
    setshowSpinner(true);
    const data = {
      name,
      email,
      phone,
      password,
    };
    axios
      .post('http://192.168.43.25:5000/register/seller', {
        role: 'admin',
        name,
        phone,
        email,
        pass: password,
      })
      .then((res) => {
        console.log(res.data);
        setshowSpinner(false);
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  };

  return (
    <Container style={styles.register}>
      <StatusBar backgroundColor="#fff" barStyle="dark-content" />
      <Text style={styles.heading}>Register</Text>
      <Text style={{textAlign: 'center', marginBottom: 20}}>
        It was then the glorious energy met the weekly race.{' '}
      </Text>
      <Form style={styles.form}>
        <Item regular style={styles.formItem}>
          <Icon type="AntDesign" name="user" />
          <Input
            placeholder="Name"
            value={name}
            onChangeText={(text) => setname(text)}
          />
        </Item>
        <Item regular style={styles.formItem}>
          <Icon type="Feather" name="mail" />
          <Input
            placeholder="Email"
            value={email}
            onChangeText={(text) => setemail(text)}
          />
        </Item>
        <Item regular style={styles.formItem}>
          <Icon type="Feather" name="phone" />
          <Input
            placeholder="Phone Number"
            value={phone}
            onChangeText={(text) => setphone(text)}
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
        <Item regular style={styles.formItem}>
          <Icon type="Feather" name="lock" />
          <Input
            placeholder="Confirm Password"
            value={confirmPassword}
            onChangeText={(text) => setconfirmPassword(text)}
            secureTextEntry={true}
          />
        </Item>
      </Form>
      <View style={{flexDirection: 'row', marginBottom: 20}}>
        <CheckBox
          checked={agreed}
          color="#000"
          onPress={() => {
            setagreed(!agreed);
          }}
          Text
        />
        <Text style={{marginLeft: 20}}>I agree to the Terms & Conditions</Text>
      </View>

      <Button
        rounded
        dark
        style={styles.submitButton}
        onPress={() => {
          submit();
        }}>
        {showSpinner ? <Spinner color="#fff" /> : <Text>Create Account</Text>}
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
