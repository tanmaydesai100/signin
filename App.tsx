import React, {useState, useEffect} from 'react';
// import type {Node} from 'react';
import auth from '@react-native-firebase/auth';
import {NavigationContainer} from '@react-navigation/native';
import HomeScreen from './src/components/homeScreen/HomeScreen';
import AuthScreen from './src/components/authScreen/AuthScreen';
const App = () => {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();
  // Handle user state changes
  function onAuthStateChanged(user: any) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);
  console.log('user', user);

  if (initializing) return null;
  return (
    <NavigationContainer>
      {user ? <AuthScreen /> : <HomeScreen />}
    </NavigationContainer>
  );
};

export default App;
