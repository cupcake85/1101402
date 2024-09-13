import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import LoginScreen from "./login";
import ListScreen from "../pages/list";
import DetailScreen from "../pages/detail";
import CartScreen from "../pages/cart";
import ProfileScreen from "../pages/profile";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function TabMenu() {
  return (
    <Tab.Navigator
      tabBarOptions={{ activeTintColor: "#4D9C9B" }}
      screenOptions={{ headerShown: false }}
    >
      <Tab.Screen
        name="Home"
        component={ListScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="home-sharp" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Cart"
        component={CartScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="cart-sharp" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="person-sharp" size={24} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

function App() {
  return (
    // <NavigationContainer>
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Lists" component={TabMenu} />
      <Stack.Screen name="Detail" component={DetailScreen} />
    </Stack.Navigator>
    // </NavigationContainer>
  );
}

export default App;
