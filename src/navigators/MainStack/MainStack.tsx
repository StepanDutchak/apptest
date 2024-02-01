import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {ScreenNavigationEnums} from '../../constants/enums/navigation';
import {MainNavigationOptions} from '../../config/navigation';

import {HomeScreen, LoadingScreen, PostDetailsScreen} from 'screens';

const Stack = createNativeStackNavigator();

function MainStack() {
  return (
    <Stack.Navigator screenOptions={MainNavigationOptions}>
      <Stack.Screen
        name={ScreenNavigationEnums.LOADING_SCREEN}
        component={LoadingScreen}
      />
      <Stack.Screen
        name={ScreenNavigationEnums.HOME_SCREEN}
        component={HomeScreen}
      />
      <Stack.Screen
        name={ScreenNavigationEnums.POST_DETAILS_SCREEN}
        component={PostDetailsScreen}
      />
    </Stack.Navigator>
  );
}

export default MainStack;
