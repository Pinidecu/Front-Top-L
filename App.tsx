import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Live } from './navigation/Live';

import Navegacion from './navigation/Navegacion';

export default function App() {
    return (
      <SafeAreaProvider>
        {/* <Navegacion /> */}
        <Live/>
        <StatusBar />
      </SafeAreaProvider>
    );
  }

