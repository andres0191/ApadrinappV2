import React from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createStackNavigator} from '@react-navigation/stack';
import Login from './screens/login/login';
import SignUp from './screens/signUp/SignUp';
/* import Inversion from './screens/inversion/inversion'; */
import Start from './screens/start/start';
import MenuApadrinapp from './screens/menuapadrinapp/MenuApadrinapp';
import PublicacionesRappi from './screens/publicacionesrappi/PublicacionesRappi';
import Transferencia from './screens/transferencia/Transferencia';
import EstadoCuenta from './screens/estadocuenta/Estadocuenta';
import Ciclo from './screens/slides/Ciclo';
import Dreamer from './screens/slides/Dreamer';
import Padrino from './screens/slides/Padrino';
import Color from './source/utils/Colors';


const Stack = createStackNavigator()

export default function App(){
  return (
    <NavigationContainer>
      <Stack.Navigator>
<<<<<<< HEAD
        <Stack.Screen options={{
          headerTitle: 'Apadrinapp',
          headerTitleAlign: 'center',
          headeTintColor: 'read'
        }} name='Start' component={Start} />
        <Stack.Screen name='SignUp' component={SignUp} />
        <Stack.Screen name='Inversion' component={Inversion} />
        <Stack.Screen name='Login' component={Login} />
        <Stack.Screen name='MenuApadrinapp' component={MenuApadrinapp} />
        <Stack.Screen name='PublicacionesRappi' component={PublicacionesRappi} />
        <Stack.Screen name='Transferencia' component={Transferencia} />
        <Stack.Screen name='EstadoCuenta' component={EstadoCuenta} />
=======
        <Stack.Screen options={{ headerShown : false }} name='Start' component={Dreamer} />
        <Stack.Screen options={{ headerShown : false }} name='SignUp' component={SignUp} />
        {/* <Stack.Screen name='Inversion' component={Inversion} /> */}
        <Stack.Screen options={{ headerShown : false }} name='Login' component={Login} />
        <Stack.Screen options={{ headerShown : false }} name='MenuApadrinapp' component={MenuApadrinapp} />
        <Stack.Screen options={{ headerShown : false }} name='PublicacionesRappi' component={PublicacionesRappi} />
        <Stack.Screen options={{ headerShown : false }} name='Transferencia' component={Transferencia} />
        <Stack.Screen options={{ headerShown : false }} name='EstadoCuenta' component={EstadoCuenta} />
        <Stack.Screen options={{ headerShown : false }} name='Ciclo' component={Ciclo} />
        <Stack.Screen options={{ headerShown : false }} name='Dreamer' component={Dreamer} />
        <Stack.Screen options={{ headerShown : false }} name='Padrino' component={Padrino} />
>>>>>>> 2c01ce996641b63d86fe13a60428c2715003285d
      </Stack.Navigator>
    </NavigationContainer>
  );
}
