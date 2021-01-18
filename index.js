import React from 'react'; // Remember to import React
import { AppRegistry, StyleSheet, Text, ActivityIndicator, View } from 'react-native';
import { Provider } from 'react-redux'; 

import {name as appname} from './app.json';
import Application from './src/App';
import configStore from './src/store/config_store';
import { PersistGate } from 'redux-persist/integration/react';

const { store, persistor } = configStore();



const Loading = () => (
  <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
    <Text style={{ textAlign:'center' }}>Initializing...</Text>
  </View>
);

const RNRedux = () => (
    <Provider store={ store }>
        <PersistGate loading={<Loading />} persistor={persistor}>
            <Application/>
        </PersistGate>
    </Provider>
);

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center'
    }
  });

AppRegistry.registerComponent (appname, () => RNRedux);