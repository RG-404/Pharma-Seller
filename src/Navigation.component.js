import React, {useEffect, useState} from 'react';
import {View, StatusBar} from 'react-native';
import {NavigationContainer, StackRouter} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {
  Container,
  Header,
  Content,
  Footer,
  FooterTab,
  Button,
  Text,
} from 'native-base';

import Icon from 'react-native-vector-icons/AntDesign';

import {LandingScreen} from './screens/Landing.component';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const FooterTabBar = ({navigation}) => {
  const [overviewActive, setoverviewActive] = useState(true);
  const [orderActive, setorderActive] = useState(false);
  const [settingActive, setsettingActive] = useState(false);

  const pressedOverview = () => {
    setoverviewActive(true);
    setorderActive(false);
    setsettingActive(false);
    navigation.navigate('Overview');
  };

  const pressedOrder = () => {
    setoverviewActive(false);
    setorderActive(true);
    setsettingActive(false);
    navigation.navigate('Orders');
  };

  const pressedSettings = () => {
    setoverviewActive(false);
    setorderActive(false);
    setsettingActive(true);
    navigation.navigate('Settings');
  };

  return (
    <Footer>
      <FooterTab>
        <Button
          active={overviewActive}
          onPress={() => {
            pressedOverview();
          }}>
          <Text>Overview</Text>
        </Button>
        <Button
          active={orderActive}
          onPress={() => {
            pressedOrder();
          }}>
          <Text>Orders</Text>
        </Button>
        <Button
          active={settingActive}
          onPress={() => {
            pressedSettings();
          }}>
          <Text>Settings</Text>
        </Button>
      </FooterTab>
    </Footer>
  );
};

const OverviewScreen = () => (
  <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
    <StatusBar backgroundColor="#000" barStyle="light-content" />
    <Text>HELLO FROM OVERVIEW</Text>
  </View>
);

const OrdersScreen = () => (
  <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
    <Text>HELLO FROM ORDERS</Text>
  </View>
);

const SettingScreen = () => (
  <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
    <Text>HELLO FROM SETTINGS</Text>
  </View>
);

const MainNavigator = () => (
  <Tab.Navigator
  // tabBar={(props) => <FooterTabBar {...props} />}
  >
    <Tab.Screen name="Overview" component={OverviewScreen} />
    <Tab.Screen name="Orders" component={OrdersScreen} />
    <Tab.Screen name="Settings" component={SettingScreen} />
  </Tab.Navigator>
);

const RootStack = () => (
  <Stack.Navigator initialRouteName="Landing">
    <Stack.Screen
      name="Landing"
      component={LandingScreen}
      options={{headerShown: false}}
    />
    <Stack.Screen
      name="Main"
      component={MainNavigator}
      options={{headerTitleAlign: 'center', headerLeft: null}}
    />
  </Stack.Navigator>
);

export const Navigation = () => {
  return (
    <NavigationContainer>
      <RootStack />
    </NavigationContainer>
  );
};
