import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator} from '@react-navigation/stack';
import Login from './screens/login/login';
import SignUp from './screens/signUp/SignUp';
import Inversion from './screens/inversion/inversion';
import Start from './screens/start/start';
import MenuApadrinapp from './screens/menuapadrinapp/MenuApadrinapp';
import PublicacionesRappi from './screens/publicacionesrappi/PublicacionesRappi';
import Transferencia from './screens/transferencia/Transferencia';
import EstadoCuenta from './screens/estadocuenta/Estadocuenta';
import Padrino from './screens/slides/Padrino';
import Ciclo from './screens/slides/Ciclo';
import Dreamer from './screens/slides/Dreamer'

const Stack = createStackNavigator()

export default function App(){
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{
          headerTitle: 'Apadrinapp',
          headerTitleAlign: 'center',
          headeTintColor: 'read'
        }} name='Start' component={ Login } />
        <Stack.Screen name='SignUp' component={SignUp} />
        <Stack.Screen name='Inversion' component={Inversion} />
        <Stack.Screen name='Login' component={Login} />
        <Stack.Screen name='MenuApadrinapp' component={MenuApadrinapp} />
        <Stack.Screen name='PublicacionesRappi' component={PublicacionesRappi} />
        <Stack.Screen name='Transferencia' component={Transferencia} />
        <Stack.Screen name='EstadoCuenta' component={EstadoCuenta} />
        <Stack.Screen name='Padrino' component={Padrino} />
        <Stack.Screen name='Dreamer' component={Dreamer} />
        <Stack.Screen name='Ciclo' component={Ciclo} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
