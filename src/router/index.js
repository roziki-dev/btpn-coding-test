import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {createStackNavigator} from '@react-navigation/stack';

// TO-DO: import all screen here
import {ListContact, ContactDetail, ContactForm} from '../screens';

const Stack = createStackNavigator();

export const MainRouter = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
          initialRouteName="MainRoute">
          <Stack.Screen name="MainRoute" component={ListContact} />
          <Stack.Screen name="ContactDetail" component={ContactDetail} />
          <Stack.Screen name="ContactForm" component={ContactForm} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};
