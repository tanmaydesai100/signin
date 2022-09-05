import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoggedIn from '../loggedIn/LoggedIn';
const Stack = createNativeStackNavigator();
const AuthScreen = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="LoggedIn">
      <Stack.Screen name="LoggedIn" component={LoggedIn} />
    </Stack.Navigator>
  );
};

export default AuthScreen;
