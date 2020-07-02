import React from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createStackNavigator} from '@react-navigation/stack';
import EstadoCuentaR from './screens/Rappitendero/estadocuenta/EstadocuentaR';
import NameLogin from './screens/NameLogin/NameLogin';
import PostRappi from './screens/Rappitendero/PostRappitendero/PostRappi';
import {decode, encode} from 'base-64';
import login from './screens/Rappitendero/loginRappitendero/loginRappi';
import PublicacionesR from './screens/Rappitendero/PublicacionesR/PublicacionesR';
import SignUpRappi from './screens/Rappitendero/SignUpRappi/SingUpRappi';
import SinglePostRappi from './screens/Rappitendero/PostRappitendero/SingleRappiPost'
import SinglePost from './screens/Rappitendero/PostRappitendero/SingleRappiPost';
import MenuDreamer from './screens/Rappitendero/menuDreamer/MenuDreamer'

if (!global.btoa) {  global.btoa = encode }
if (!global.atob) { global.atob = decode }
const Stack = createStackNavigator()

export default function App(){
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen options={{ headerShown : false }} name='login' component={login}/>
        <Stack.Screen options={{ headerShown : false }} name='EstadoCuentaR' component={EstadoCuentaR} />
        <Stack.Screen options={{ headerShown : false }} name='NameLogin' component={NameLogin}/>
        <Stack.Screen options={{ headerShown : false }} name='PostRappi' component={PostRappi}/>
        <Stack.Screen options={{ headerShown : false }} name='PublicacionesR' component={PublicacionesR}/>
        <Stack.Screen options={{ headerShown : false }} name='SignUpRappi' component={SignUpRappi}/>
        <Stack.Screen options={{ headerShown : false }} name='MenuDreamer' component={MenuDreamer}/>
        <Stack.Screen options={{ headerShown : false }} name='SinglePostRappi' component={SinglePost}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

