import React from 'react';
import {View, ScrollView, Text} from 'react-native';
import AuthHeader from '../../components/AuthHeader';
import JumbtoAuth from '../../components/JumbtoAuth';
import PrimaryButton from '../../components/PrimaryButton';
import PrimaryInput from '../../components/PrimaryInput';
import {styles} from './SignupPage.style';
const SignUpPage = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <AuthHeader
          heading="Sign up"
          tagline="Enter your credentials to continue"
        />
        <View style={styles.form}>
          <PrimaryInput label="Name" />
          <PrimaryInput label="Email" />
          <PrimaryInput label="Phone Number" phone={true} />
          <PrimaryInput label="Password" password={true} />
          <Text style={styles.terms}>
            By continuing you agree to our{' '}
            <Text style={styles.color}>Terms of Service</Text> and{' '}
            <Text style={styles.color}>Privacy Policy</Text>.
          </Text>
          <PrimaryButton label="Sign up" />
        </View>
        <JumbtoAuth label="Already have an account" tag=" login" />
      </View>
    </ScrollView>
  );
};

export default SignUpPage;
