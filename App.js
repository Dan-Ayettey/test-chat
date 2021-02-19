<<<<<<< Updated upstream
import React from 'react';
import Nav from './navigation/navigation';

export default function App() {
  return <Nav />;
=======
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Routes from "./navigation/Router";


export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>

        <Routes />
        <StatusBar />
      </SafeAreaProvider>
    );
  }
>>>>>>> Stashed changes
}
