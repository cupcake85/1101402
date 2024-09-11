import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "./login";
import ListScreen from "../pages/list";
import DetailScreen from "../pages/detail";
import CartScreen from "../pages/cart";
import ProfileScreen from "../pages/profile";

const Stack = createNativeStackNavigator();

function App() {
  return (
    // <NavigationContainer>
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Lists" component={ListScreen} />
      <Stack.Screen name="Detail" component={DetailScreen} />
      <Stack.Screen name="Cart" component={CartScreen} />
      <Stack.Screen name="Profile" component={ProfileScreen} />
    </Stack.Navigator>
    // </NavigationContainer>
  );
}

export default App;
