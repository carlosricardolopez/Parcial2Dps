import * as React from 'react';
import { Text, Button, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

import { NavigationContainer } from '@react-navigation/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// You can import from local files
import Peliculas from './components/Peliculas';
import Series from './components/Series';
import Estrenos from './components/Estrenos';

function Pelicula() {
  return (
    <Peliculas/>
  );
}

function Serie() {
  return (
    <Series/>
  );
}
function Proximamente() {
  return (
    <Estrenos/>
  );
}

const Tab = createBottomTabNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Series Favoritas') {
              iconName = focused
                ? 'movie-open-check'
                : 'movie-open-check-outline';
            } else if (route.name === 'Peliculas Favoritas') {
              iconName = focused ? 'movie-filter' : 'movie-filter-outline';
            }

            // You can return any component that you like here!
            return < MaterialCommunityIcons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen name="Peliculas" component={Pelicula} />
        <Tab.Screen name="Series" component={Serie} />
        <Tab.Screen name="Proximamente" component={Proximamente} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}