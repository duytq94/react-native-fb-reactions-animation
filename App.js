import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import MainScreen from './src/Main/Main.Screen';
import AnimationScreen from './src/Animation/Animation.Screen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator headerMode={'none'}>
          <Stack.Screen
            name="MainScreen"
            component={MainScreen}
            options={{
              title: 'Main',
              gestureEnabled: true,
              gestureDirection: 'horizontal',
              headerStyle: {
                backgroundColor: '#3b5998',
              },
              headerTintColor: '#fff',
            }}
          />
          <Stack.Screen
            name="AnimationScreen"
            options={{
              title: 'Animation',
              gestureEnabled: true,
              gestureDirection: 'horizontal',
              headerStyle: {
                backgroundColor: '#3b5998',
              },
              headerTintColor: '#fff',
            }}
            component={AnimationScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
