import LoginScreen from '@features/auth/LoginScreen';
import SplashScreen from '@features/auth/SplashScreen';
import AnimatedTab from '@features/tabs/AnimatedTab';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {navigationRef} from '@utils/NavigationUtils';
import {FC} from 'react';

const Stack = createNativeStackNavigator();

const Navigation: FC = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator
        initialRouteName="SplashScreen"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen
          options={{animation: 'fade'}}
          name="LoginScreen"
          component={LoginScreen}
        />
        <Stack.Screen
          options={{animation: 'fade'}}
          name="Home"
          component={AnimatedTab}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
