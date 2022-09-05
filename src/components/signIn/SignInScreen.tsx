import React, {useState} from 'react';
import {Alert, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import Auth from '../../auth';
import {Button} from '../Button';
import {TextField} from '../TextField';

const SignInScreen = ({navigation}: any) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleClick = () => {
    if (!email || !password) {
      Alert.alert('Please enter the details');
    } else {
      Auth.signIn(email, password);
    }
  };
  return (
    <>
      <SafeAreaView style={styles.background}>
        <View style={styles.container}>
          <Text style={styles.headerText}>Login Form</Text>
          <View style={styles.navContainer}>
            <View style={styles.navLogin}>
              <Text style={styles.loginNavText}>Login</Text>
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
              <Button title="Login" onTap={handleClick} />
              <View style={styles.footerText}>
                <Text style={styles.footerLeftText}>Not a member?</Text>
                <Text
                  style={styles.footerRightText}
                  onPress={() => navigation.navigate('SignUpScreen')}>
                  Signup now
                </Text>
              </View>
            </View>
          </View>
        </View>
      </SafeAreaView>
    </>
  );
};

export default SignInScreen;
export const styles = StyleSheet.create({
  body: {
    flex: 8,
  },
  loginView: {
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20,
    height: 400,
  },
  footerText: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  footerLeftText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#000',
  },
  footerRightText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#AA44B1',
  },
  container: {
    height: 450,
    width: 350,
    backgroundColor: '#fff',
    borderRadius: 10,
  },
  headerText: {
    fontSize: 25,
    fontWeight: '600',
    textAlign: 'center',
    marginTop: 10,
    color: '#000',
  },
  navContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
    borderWidth: 1,
    borderColor: 'thistle',
    height: 50,
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 5,
    paddingRight: 5,
  },
  navLogin: {
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    paddingLeft: 50,
    paddingRight: 50,
    borderRadius: 5,
  },
  loginNavText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#000',
  },
  navigation: {
    backgroundColor: '#fff',
  },
  background: {
    flex: 1,
    backgroundColor: '#AA44B1',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
