import React, {useState} from 'react';
import {View, ScrollView, Text} from 'react-native';
import AuthHeader from '../../components/AuthHeader';
import JumbtoAuth from '../../components/JumbtoAuth';
import PrimaryButton from '../../components/PrimaryButton';
import PrimaryInput from '../../components/PrimaryInput';
import {Toast} from 'react-native-toast-message/lib/src/Toast';
import base from '../../axios/Axios';
import {styles} from './SignupPage.style';
const SignUpPage = ({navigation}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [disabled, setDisabled] = useState(false);
  const signuping = () => {
    setDisabled(true);
    Toast.show({
      type: 'info',
      text1: 'Wait for a second',
      position: 'bottom',
    });
    base
      .post('api/auth/adduser', {
        email: email,
        password: password,
        mobileno: phone,
        name: name,
      })
      .then(Response => {
        console.log(Response.data);
        Toast.show({
          type: 'success',
          text1: `Welcome ${Response.data.name}`,
          text2: 'Please Login',
          position: 'bottom',
        });
        setDisabled(false);
        navigation.navigate('loginpage');
      })
      .catch(Error => {
        Toast.show({
          type: 'error',
          text1: `${Error}`,
          position: 'bottom',
        });
        setDisabled(false);
      });
  };
  return (
    <ScrollView>
      <View style={styles.container}>
        <AuthHeader
          heading="Sign up"
          tagline="Enter your credentials to continue"
        />
        <View style={styles.form}>
          <PrimaryInput
            label="Name"
            triggerChange={e => {
              setName(e);
            }}
            disabled={disabled}
          />
          <PrimaryInput
            label="Email"
            triggerChange={e => {
              setEmail(e);
            }}
            disabled={disabled}
          />
          <PrimaryInput
            label="Phone Number"
            phone={true}
            triggerChange={e => {
              setPhone(e);
            }}
            disabled={disabled}
          />
          <PrimaryInput
            label="Password"
            password={true}
            triggerChange={e => {
              setPassword(e);
            }}
            disabled={disabled}
          />
          <Text style={styles.terms}>
            By continuing you agree to our{' '}
            <Text style={styles.color}>Terms of Service</Text> and{' '}
            <Text style={styles.color}>Privacy Policy</Text>.
          </Text>
          <PrimaryButton
            label="Sign up"
            triggerclick={signuping}
            disabled={disabled}
          />
        </View>
        <JumbtoAuth
          label="Already have an account"
          tag=" login"
          triggerclick={() => {
            navigation.navigate('loginpage');
          }}
        />
      </View>
    </ScrollView>
  );
};

export default SignUpPage;
