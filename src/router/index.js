import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {createStackNavigator} from '@react-navigation/stack';

// TO-DO: import all screen here
import {ListContact} from '../screens';

const Stack = createStackNavigator();

export const MainRouter = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen name="MainRoute" component={ListContact} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};
