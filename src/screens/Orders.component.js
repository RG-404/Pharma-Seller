import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import {
  Divider,
  Icon,
  Layout,
  Text,
  TopNavigation,
  TopNavigationAction,
} from '@ui-kitten/components';

const BackIcon = (props) => <Icon {...props} name="arrow-back" />;

export const OrderScreen = ({navigation}) => {
  const navigateBack = () => {
    navigation.goBack();
  };

  const BackAction = () => (
    <TopNavigationAction icon={BackIcon} onPress={navigateBack} />
  );

  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar backgroundColor="#000" />

      <TopNavigation title={(evaProps) => (
          <Text {...evaProps} style={{fontWeight: 'bold'}}>
            Orders
          </Text>
        )} alignment="center" />
      <Divider />
      <Layout style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text category="h1">ORDERS</Text>
      </Layout>
    </SafeAreaView>
  );
};
