import React from 'react';
import {Toast} from 'react-native-toast-message/lib/src/Toast';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginPage from './src/pages/login/LoginPage';
import Onboard from './src/pages/onboard/Onboard';
import SignUpPage from './src/pages/signup/SignUpPage';
import SplashScreen from './src/pages/splashscreen/SplashScreen';
import HomeScreen from './src/pages/homescreen/HomeScreen';
const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="home"
          screenOptions={{headerShown: false}}>
          <Stack.Screen name="loginpage" component={LoginPage} />
          <Stack.Screen name="onboard" component={Onboard} />
          <Stack.Screen name="signuppage" component={SignUpPage} />
          <Stack.Screen name="splash" component={SplashScreen} />
          <Stack.Screen name="home" component={HomeScreen} />
        </Stack.Navigator>
      </NavigationContainer>
      <Toast />
    </>
  );
};

export default App;
