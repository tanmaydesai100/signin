import React, {useState} from 'react';
import {Alert, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import Auth from '../../auth';
import {Button} from '../Button';
import {styles} from '../signIn/SignInScreen';
import {TextField} from '../TextField';

const SignUpScreen = ({navigation}: any) => {
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleClick = () => {
    if (!userName || !email || !password) {
      Alert.alert('Please fill the details');
    } else {
      Auth.signUp(userName, email, password);
    }
  };
  return (
    <>
      <SafeAreaView style={styles.background}>
        <View style={styles.container}>
          <Text style={styles.headerText}>Login Form</Text>
          <View style={styles.navContainer}>
            <View style={styles.navLogin}>
              <Text
                style={styles.loginNavText}
                onPress={() => navigation.navigate('SignInScreen')}>
                Login
              </Text>
            </View>
            <View style={styles.navLogin}>
              <Text
                style={styles.loginNavText}
                onPress={() => navigation.navigate('SignUpScreen')}>
                Signup
              </Text>
            </View>
          </View>
          <View style={styles.body}>
            <View style={styles.loginView}>
              <TextField
                placeholder="Username"
                onTextChange={setUserName}
                val={userName}
              />
              <TextField
                placeholder="Email id"
                onTextChange={setEmail}
                val={email}
              />
              <TextField
                placeholder="Password"
                onTextChange={setPassword}
                val={password}
                secure={true}
              />
              <Button title="Sign Up" onTap={handleClick} />
            </View>
          </View>
        </View>
      </SafeAreaView>
    </>
  );
};

export default SignUpScreen;
