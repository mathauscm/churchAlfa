import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import HomeScreen from './screens/HomeScreen';
import BibliaScreen from './screens/BibliaScreen';
import DevocionalScreen from './screens/DevocionalScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === 'Menu') {
              iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === 'Bíblia') {
              iconName = focused ? 'book' : 'book-outline';
            } else if (route.name === 'Devocional') {
              iconName = focused ? 'heart' : 'heart-outline';
            }
            return <Icon name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#4CAF50',
          tabBarInactiveTintColor: 'gray',
          tabBarStyle: {
            backgroundColor: '#000',
          },
          headerShown: false,
        })}>
        <Tab.Screen name="Menu" component={HomeScreen} />
        <Tab.Screen name="Bíblia" component={BibliaScreen} />
        <Tab.Screen name="Devocional" component={DevocionalScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}