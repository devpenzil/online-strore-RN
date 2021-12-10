import React from 'react';
import {Toast} from 'react-native-toast-message/lib/src/Toast';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginPage from './src/pages/login/LoginPage';
import Onboard from './src/pages/onboard/Onboard';
import SignUpPage from './src/pages/signup/SignUpPage';
import SplashScreen from './src/pages/splashscreen/SplashScreen';

const App = () => {
  const stack = createNativeStackNavigator();
  return (
    <>
      <LoginPage />
      {/* <NavigationContainer>
        <stack.Navigator initialRouteName="Onboard">
          <stack.Screen name="Onboard" component={Onboard} />
          <stack.Screen name="Loginpage" component={LoginPage} />
          <stack.Screen name="SplashScreen" component={SplashScreen} />
          <stack.Screen name="SignupPage" component={SignUpPage} />
        </stack.Navigator>
      </NavigationContainer> */}
      <Toast />
    </>
  );
};

export default App;
