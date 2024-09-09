import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Home } from "../screens";

const Stack = createStackNavigator();

const AppStack = () => {
  return (
    <Stack.Navigator
      initialRouteName={"Home"}
      screenOptions={{
        headerShown: false,
        gestureEnabled: false,
        animationEnabled: false,
      }}
    >
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
};

export default AppStack;
