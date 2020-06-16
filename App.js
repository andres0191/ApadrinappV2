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
import List from './screens/publicacionesrappi/List';
import NameLogin from './screens/NameLogin/NameLogin';
import { startClock } from 'react-native-reanimated';
import SaveFunction from './screens/PruebasAndres/SaveFunction';
import PostRappi from './screens/Rappitenderos/PostRappi';

const Stack = createStackNavigator()

export default function App(){
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{ headerShown : false }} name='Start' component={SaveFunction} />
        <Stack.Screen options={{ headerShown : false }} name='SignUp' component={SignUp} />
        <Stack.Screen options={{ headerShown : false }} name='Login' component={Login} />
        <Stack.Screen options={{ headerShown : false }} name='MenuApadrinapp' component={MenuApadrinapp} />
        <Stack.Screen options={{ headerShown : false }} name='PublicacionesRappi' component={PublicacionesRappi} />
        <Stack.Screen options={{ headerShown : false }} name='Transferencia' component={Transferencia} />
        <Stack.Screen options={{ headerShown : false }} name='EstadoCuenta' component={EstadoCuenta} />
        <Stack.Screen options={{ headerShown : false }} name='Ciclo' component={Ciclo} />
        <Stack.Screen options={{ headerShown : false }} name='Dreamer' component={Dreamer} />
        <Stack.Screen options={{ headerShown : false }} name='Padrino' component={Padrino} />
        <Stack.Screen options={{ headerShown : false }} name='List' component={List} />
        <Stack.Screen options={{ headerShown : false }} name='NameLogin' component={NameLogin}/>
        <Stack.Screen options={{ headerShown : false }} name='SaveFunction' component={SaveFunction}/>
        <Stack.Screen options={{ headerShown : false }} name='PostRappi' component={PostRappi}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
