import React, {useState, useEffect} from 'react';
import * as eva from '@eva-design/eva';
import {ApplicationProvider, IconRegistry} from '@ui-kitten/components';
import {EvaIconsPack} from '@ui-kitten/eva-icons';
import {AppNavigator} from './src/navigation.component';

import {Root} from 'native-base';

import SplashScreen from 'react-native-splash-screen';

import {default as theme} from './theme.json'; // <-- Import app theme

export default () => {
  const [AppTheme, setAppTheme] = useState({...eva.light, ...theme});

  useEffect(() => {
    SplashScreen.hide();
  }, []);

  const changeAppTheme = (set) => {
    console.log('CALLED!!');
    set === true
      ? setAppTheme({...eva.dark, ...theme})
      : setAppTheme({...eva.light, ...theme});
  };

  return (
    <>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider {...eva} theme={{...eva.light, ...theme}}>
        <AppNavigator changeAppTheme={changeAppTheme} />
      </ApplicationProvider>
    </>
  );
};
