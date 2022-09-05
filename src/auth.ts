import auth from '@react-native-firebase/auth';
import {Alert} from 'react-native';

const signUp = (userName: string, email: string, password: string) => {
  if (!userName || !email || !password) {
    Alert.alert('Error', 'Please enter all fields');
  }
  const user: any = auth().currentUser;
  return auth()
    .createUserWithEmailAndPassword(email, password)
    .then(cred => {
      const {uid} = cred.user;

      user.updateProfile({
        userName: userName,
      });

      return uid;
    })
    .catch(err => Alert.alert(err.code, err.message));
};

const signIn = (email: string, password: string) => {
  if (!email || !password) {
    Alert.alert('Error', 'Please enter all fields');
  }

  return auth()
    .signInWithEmailAndPassword(email, password)
    .then(() => {})
    .catch(err => Alert.alert(err.code, err.message));
};

const signOut = () => {
  return auth().signOut();
};
const Auth = {
  signUp,
  signIn,
  signOut,
};

export default Auth;
