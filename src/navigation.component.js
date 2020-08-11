import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import {
  BottomNavigation,
  BottomNavigationTab,
  Layout,
  Text,
  Icon,
} from '@ui-kitten/components';

import {OverviewScreen} from './screens/Overview.component';
import {SettingsScreen} from './screens/Settings.component';
import {OrderScreen} from './screens/Orders.component';

import {LandingScreen} from './screens/Landing.Component';
import {LoginScreen} from './screens/Login.Component';
import {RegisterScreen} from './screens/Register.Component';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const ChartIcon = (props) => <Icon {...props} name="bar-chart-outline" />;

const BellIcon = (props) => <Icon {...props} name="bell-outline" />;

const SettingsIcon = (props) => <Icon {...props} name="settings-2-outline" />;

const BottomTabBar = ({navigation, state}) => (
  <BottomNavigation
    selectedIndex={state.index}
    onSelect={(index) => navigation.navigate(state.routeNames[index])}>
    <BottomNavigationTab title="Overview" icon={ChartIcon} />
    <BottomNavigationTab title="Orders" icon={BellIcon} />
    <BottomNavigationTab title="Settings" icon={SettingsIcon} />
  </BottomNavigation>
);

const TabNavigator = () => (
  <Tab.Navigator tabBar={(props) => <BottomTabBar {...props} />}>
    <Tab.Screen name="Overview" component={OverviewScreen} />
    <Tab.Screen name="Orders" component={OrderScreen} />
    <Tab.Screen name="Settings">
      {(props) => <SettingsScreen {...props} />}
    </Tab.Screen>
  </Tab.Navigator>
);

const LandingNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Land"
        component={LandingScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="Register"
        component={RegisterScreen}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

const RootStack = () => (
  <Stack.Navigator initialRouteName="Land">
    <Stack.Screen
      name="Land"
      component={LandingNavigator}
      options={{title: 'Welcome to Pharmacy Manager'}}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen
      name="Main"
      component={TabNavigator}
      options={{
        headerShown: false,
      }}
    />
  </Stack.Navigator>
);

export const AppNavigator = () => (
  <NavigationContainer>
    <RootStack />
  </NavigationContainer>
);
