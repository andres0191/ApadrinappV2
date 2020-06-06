import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator} from '@react-navigation/stack';
import Login from './screens/login/login';
import Main from './screens/main/Main';
import SignUp from './screens/signUp/SignUp';
import Inversion from './screens/inversion/inversion';


const Stack = createStackNavigator()

export default function App(){
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{
          headerTitle: 'Apadrinapp',
          headerTitleAlign: 'center',
          headeTintColor: 'read'
        }} name='Login' component={Login} />
        <Stack.Screen name='SignUp' component={SignUp} />
        <Stack.Screen name='Main' component={Main} />
        <Stack.Screen name='Inversion' component={Inversion} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
        