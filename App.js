import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator} from '@react-navigation/stack';
import Login from './screens/login/login';
import Main from './screens/main/Main';
import SignUp from './screens/signUp/SignUp';
import Inversion from './screens/inversion/inversion';
import Home from './screens/start/start';
import MenuApadrinapp from './screens/menuapadrinapp/MenuApadrinapp';
import PublicacionesRappi from './screens/publicacionesrappi/PublicacionesRappi';
import Transferencia from './screens/transferencia/Transferencia';


const Stack = createStackNavigator()

export default function App(){
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{
          headerTitle: 'Apadrinapp',
          headerTitleAlign: 'center',
          headeTintColor: 'read'
        }} name='Start' component={Start} />
        name='Login' component={Login} />
        <Stack.Screen name='SignUp' component={SignUp} />
        <Stack.Screen name='Main' component={Main} />
        <Stack.Screen name='Inversion' component={Inversion} />
        <Stack.Screen name='Login' component={Login} />
        <Stack.Screen name='MenuApadrinapp' component={MenuApadrinapp} />
        <Stack.Screen name='PublicacionesRappi' component={PublicacionesRappi} />
        <Stack.Screen name='Transferencia' component={Transferencia} />*/
      </Stack.Navigator>
    </NavigationContainer>
  );
}
