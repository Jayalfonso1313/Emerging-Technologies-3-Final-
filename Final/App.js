import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginPage from './components/LoginPage';
import ViewMenu from './components/ViewMenu';
import HomePage from './components/HomePage';
import Admin from './components/Admin';
import OrderStatus from './components/OrderStatus';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="LoginPage"
        screenOptions={{
          headerShown: false, // This line replaces headerMode="none"
        }}
      >
        <Stack.Screen name="LoginPage" component={LoginPage} />
        <Stack.Screen name="HomePage" component={HomePage} options={{ headerShown: true }} />
        <Stack.Screen name="ViewMenu" component={ViewMenu} options={{ headerShown: true }} />
        <Stack.Screen name="Admin" component={Admin} options={{ headerShown: true }} />
        {/* Add the OrderStatus screen */}
        <Stack.Screen name="OrderStatus" component={OrderStatus} options={{ headerShown: true }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
  