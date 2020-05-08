import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Icon from 'react-native-vector-icons/MaterialIcons';

import SignIn from './pages/SignIn';
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';

Icon.loadFont();

const Stack = createStackNavigator();
const Tabs = createBottomTabNavigator();

export default function createRouter(signedIn = false) {
    return !signedIn ? (
        <Stack.Navigator headerMode="none">
            <Stack.Screen name="SignIn" component={SignIn} />
        </Stack.Navigator>
    ) : (
        <Tabs.Navigator
            tabBarOptions={{
                activeTintColor: '#7149c1',
                inactiveTintColor: '#999',
                keyboardHidesTabBar: true,
            }}
        >
            <Tabs.Screen
                name="Dashboard"
                component={Dashboard}
                options={{
                    tabBarLabel: 'Entregas',
                    tabBarIcon: ({ color }) => (
                        <Icon name="reorder" size={20} color={color} />
                    ),
                }}
            />
            <Tabs.Screen
                name="Profile"
                component={Profile}
                options={{
                    tabBarLabel: 'Meu Perfil',
                    tabBarIcon: ({ color }) => (
                        <Icon name="account-circle" size={20} color={color} />
                    ),
                }}
            />
        </Tabs.Navigator>
    );
}
