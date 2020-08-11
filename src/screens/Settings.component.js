import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet, ScrollView} from 'react-native';
import {
  Card,
  Avatar,
  Divider,
  Icon,
  Toggle,
  Layout,
  Text,
  TopNavigation,
  TopNavigationAction,
} from '@ui-kitten/components';
import Icons from 'react-native-vector-icons/FontAwesome';

const BackIcon = (props) => <Icon {...props} name="arrow-back" />;

const ProfileCard = ({style}) => {
  return (
    <Layout style={style}>
      <Avatar
        source={{uri: 'https://picsum.photos/id/1005/200/300'}}
        style={{marginRight: 20}}
        size="giant"
      />
      <Layout>
        <Text
          style={
            (styles.center,
            {paddingBottom: 5, backgroundColor: 'rgba(0,0,0,0)'})
          }
          category="h5">
          John Doe
        </Text>
        <Text category="p2">Profile Image, Address, Phone & Email</Text>
      </Layout>
    </Layout>
  );
};

const SettingItem = ({title, toggler}) => {
  const [checked, setChecked] = React.useState(false);
  const onCheckedChange = (isChecked) => {
    setChecked(isChecked);
  };

  return (
    <Layout
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: 40,
      }}>
      <Text>{title}</Text>
      {toggler ? (
        <Toggle checked={checked} onChange={onCheckedChange} />
      ) : (
        <Icon
          name="arrow-ios-forward-outline"
          style={styles.icon}
          fill="#8F9BB3"
        />
      )}
    </Layout>
  );
};

const FirstSettingCluster = ({style}) => {
  return (
    <Card style={style}>
      <SettingItem title="Active" toggler />
      <Divider style={{marginVertical: 10}} />
      <SettingItem title="Shop Manager" />
      <Divider style={{marginVertical: 10}} />
      <SettingItem title="Shop Manager" />
    </Card>
  );
};

const SecondSettingCluster = ({style}) => {
  return (
    <Card style={style}>
      <SettingItem title="Active" toggler />
      <Divider style={{marginVertical: 10}} />
      <SettingItem title="Shop Manager" />
      <Divider style={{marginVertical: 10}} />
      <SettingItem title="Shop Manager" />
      <Divider style={{marginVertical: 10}} />
      <SettingItem title="Shop Manager" />
    </Card>
  );
};

const Logout = ({style, navigation}) => {
  return (
    <Card
      style={style}
      onPress={() => {
        console.log('LOGOUT');
        navigation.navigate('Land', {screen: 'Land'});
      }}>
      <SettingItem title="Logout" />
    </Card>
  );
};

export const SettingsScreen = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar backgroundColor="#000" />
      <TopNavigation
        title={(evaProps) => (
          <Text {...evaProps} style={{fontWeight: 'bold'}}>
            Settings
          </Text>
        )}
        alignment="center"
      />
      <Divider />
      <ScrollView>
        <Card style={{marginBottom: 30}}>
          <ProfileCard style={styles.profile} />
        </Card>
        <FirstSettingCluster style={{marginBottom: 30}} />
        <SecondSettingCluster style={{marginBottom: 30}} />
        <Logout navigation={navigation}/>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  layout: {
    justifyContent: 'flex-start',
    alignItems: 'stretch',
  },
  profile: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  icon: {
    width: 32,
    height: 32,
  },
});
