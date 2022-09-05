import React from 'react';
import {Text, View} from 'react-native';
import Auth from '../../auth';
import { StyleSheet } from 'react-native';
import { Button } from '../Button';

const LoggedIn = () => {
  const out=()=>{
    Auth.signOut();
  }
  return (
    <View style={styles.container}>
      <Text>LoggedIn Tanmay Desai</Text>
      {/* <Text onPress={() => Auth.signOut()}>Signout</Text> */}
      <Button title="SignOut" onTap={out} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex:1,
    alignItems:'center',
    justifyContent:'center'
  }
});

export default LoggedIn;
