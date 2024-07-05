import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { StyleSheet } from 'react-native';
import HomeScreen from './src/screens/Home';
import ProfileScreen from './src/screens/Profile';
import TentangScreen from './src/screens/About';
import TentangKesehatan from './src/screens/Kesehatan';
import LoginScreen from './src/screens/LoginScreen';
import RegisterScreen from './src/screens/RegisterScreen';
import { UserProvider } from './src/screens/UserContext';
import KesehatanReproduksi from './src/screens/KesehatanReproduksi';
import KesehatanTubuh from './src/screens/KesehatanTubuh';
import Olahraga from './src/screens/Olahraga';
import MenstruasiScreen from './src/screens/Menstruasi';

const Stack =createStackNavigator();
const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator screenOptions={{ tabBarActiveTintColor: 'pink' }}>
      <Tab.Screen
        name="Girls Area"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialCommunityIcons name="home-account" size={size} color={color} />
          ),
          tabBarLabel: 'Girls Area'
        }}
      />
      <Tab.Screen
        name="Tentang"
        component={TentangScreen}
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialCommunityIcons name="information" size={size} color={color} />
          ),
          tabBarLabel: 'Tentang'
        }}
      />
      <Tab.Screen
        name="Profil"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialCommunityIcons name="account" size={size} color={color} />
          ),
          tabBarLabel: 'Profil'
        }}
      />
    </Tab.Navigator>
  );
};
function App() {
  return (
    <UserProvider>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Tab"
          component={Tabs}
          options={{ headerShown: false }}
        />
        <Stack.Screen 
        name="LoginScreen" 
        component={LoginScreen} 
        options={{ title :'Login' }} 
        />
        <Stack.Screen 
        name="ProfileScreen" 
        component={ProfileScreen} 
        options={{ title :'Profil' }} 
        />
        <Stack.Screen 
        name="RegisterScreen" 
        component={RegisterScreen} 
        options={{ title :'Register' }} 
        />
        <Stack.Screen 
        name="Kesehatan" 
        component={TentangKesehatan} 
        options={{ title :'Tentang Kesehatan' }} 
        />
        <Stack.Screen 
        name="KesehatanReproduksi" 
        component={KesehatanReproduksi} 
        options={{ title: 'Kesehatan Reproduksi' }} 
        />
        <Stack.Screen 
        name="KesehatanTubuh" 
        component={KesehatanTubuh} 
        options={{ title: 'Kesehatan Tubuh' }} 
        />
        <Stack.Screen 
        name="Olahraga" 
        component={Olahraga} 
        options={{ title: 'Olahraga' }} 
        />
        <Stack.Screen 
        name="Menstruasi" 
        component={MenstruasiScreen} 
        options={{ title: 'Menstruasi' }} 
        />
        <Stack.Screen 
        name="UserContext" 
        component={UserProvider} 
        options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
    </UserProvider>
  );
}

export default App;

const styles = StyleSheet.create({});
