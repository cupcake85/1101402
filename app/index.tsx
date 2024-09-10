import * as React from "react";
import { View, Text, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../components/pages/login";
import DetailsScreen from "../components/pages/list";

const Stack = createNativeStackNavigator();

function App() {
  return (
    // <NavigationContainer>
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Lists" component={DetailsScreen} />
    </Stack.Navigator>
    // </NavigationContainer>
  );
}

export default App;
