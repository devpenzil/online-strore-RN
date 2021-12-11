import React, {useState} from 'react';
import {View} from 'react-native';
import AuthHeader from '../../components/AuthHeader';
import JumbtoAuth from '../../components/JumbtoAuth';
import PrimaryButton from '../../components/PrimaryButton';
import PrimaryInput from '../../components/PrimaryInput';
import StatusBarMain from '../../components/StatusBarMain';
import {Toast} from 'react-native-toast-message/lib/src/Toast';
import {styles} from './LoginPage.style';
import base from '../../axios/Axios';
import SharedPreferences from 'react-native-shared-preferences';
const LoginPage = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [disabled, setDisabled] = useState(false);
  const logging = () => {
    setDisabled(true);
    Toast.show({
      type: 'info',
      text1: 'Wait for a second',
      position: 'bottom',
    });
    base
      .post('api/auth/login', {
        email: email,
        password: password,
      })
      .then(Response => {
        console.log(Response);
        // SharedPreferences.setItem('token', 5345634);
        Toast.show({
          type: 'success',
          text1: `Welcome ${Response.data.name}`,
          position: 'bottom',
        });
        setDisabled(false);
        navigation.navigate('home');
      })
      .catch(Error => {
        console.log(Error);
        Toast.show({
          type: 'error',
          text1: `${Error.message}`,
          position: 'bottom',
        });
        setDisabled(false);
      });
  };
  return (
    <View style={styles.container}>
      <StatusBarMain />
      <AuthHeader heading="Login" tagline="Enter your emails and password" />
      <View style={styles.form}>
        <PrimaryInput
          label="Email"
          triggerChange={e => setEmail(e)}
          value={email}
          disabled={disabled}
        />
        <PrimaryInput
          label="Password"
          password={true}
          value={password}
          triggerChange={e => setPassword(e)}
          disabled={disabled}
        />
        <PrimaryButton
          label="Login"
          triggerclick={logging}
          disabled={disabled}
        />
      </View>
      <JumbtoAuth
        label="Don't have a account"
        tag=" Sign Up"
        triggerclick={() => {
          navigation.navigate('signuppage');
        }}
      />
    </View>
  );
};

export default LoginPage;
