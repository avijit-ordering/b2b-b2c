
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import 'react-native-reanimated'
import 'react-native-gesture-handler'
import React, { useEffect } from 'react';


import {
  SafeAreaView
} from 'react-native';
import StackNavigator from './navigation/stackNavigator';
import { ModalPortal } from 'react-native-modals';
import { MyProvider } from './src/context/myContext';
import { ToastProvider } from 'react-native-toast-notifications'



function App() {


  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }} >
      <ToastProvider>
        <MyProvider>
          <StackNavigator />
          <ModalPortal />
        </MyProvider>
      </ToastProvider>
    </SafeAreaView>
  );
}



export default App;

