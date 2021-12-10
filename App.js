import React from 'react';
import {Toast} from 'react-native-toast-message/lib/src/Toast';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginPage from './src/pages/login/LoginPage';
import Onboard from './src/pages/onboard/Onboard';
import SignUpPage from './src/pages/signup/SignUpPage';
import SplashScreen from './src/pages/splashscreen/SplashScreen';
import HomeScreen from './src/pages/homescreen/HomeScreen';
import Explore from './src/pages/explore/Explore';
import Cart from './src/pages/cart/Cart';
import Favourites from './src/pages/favourites/Favourites';
import Account from './src/pages/account/Account';
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
          <Stack.Screen name="explore" component={Explore} />
          <Stack.Screen name="cart" component={Cart} />
          <Stack.Screen name="favourites" component={Favourites} />
          <Stack.Screen name="account" component={Account} />
        </Stack.Navigator>
      </NavigationContainer>
      <Toast />
    </>
  );
};

export default App;
